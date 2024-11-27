<?php

namespace App\Controller;

use App\Entity\RequestBusquedaAvanzada;
use App\Entity\RequestBusquedaRapida;
use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use function PHPSTORM_META\map;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Config\Definition\Exception\Exception;

/**
 * @Route("/busquedaAvanzada")
 */
class BusquedaAvanzadaController extends Controller
{


    private $nombreSecciones = array(1=>"primera", 2=>"segunda", 3=>"tercera", 4=>"cuarta");
    private $numeroSecciones = array("primera"=>1, "segunda"=>2, "tercera"=>3, "cuarta"=>4, "all" => [1, 2, 3, 4]);
    private $SERIALIZADO_POR_SECCION = array(1=>"setParamsToPrimera", 2=>"setParamsToSegunda", 3=>"setParamsToTercera");


    /**
     * @Route("/realizarBusqueda/segunda", name="realizar_busqueda_segunda")
     * @Method("POST")
     * @param Request $request
     * @return JsonResponse
     */
    public function realizarBusquedaSegundaAction(Request $request){

        $parametros = json_decode($request->get('params'), true);
        $busquedaService = $this->container->get('busqueda_service');
        $session = $request->getSession();

        $mensajesErrorBusqAvanzada = array();
        $error = 0;
        $content = null;
        $template = "";
        $templatePrimerosAvisos = "";
        try {
            $numeroPagina=$parametros['numeroPagina'];

            if ($parametros["filtroPorRubroBusqueda"] === false){
                $mensajesErrorBusqAvanzada = $this->validarDatosBusquedaAvanzada($parametros);
                if (count($mensajesErrorBusqAvanzada) > 0){
                    $error = 1;
                    $content = null;
                }
            }

            if ($error == 0){
                $fechaEdicionYMD = CommonFunctions::getFechaEdicionSinFormato($session);

                if ($fechaEdicionYMD == ""){
                    $fechaHoy = new \DateTime();
                    $fechaEdicionYMD = $fechaHoy->format('Ymd');
                }

                $session->set('parametrosBusquedaUltimo', $parametros);
                if ($parametros["busquedaOriginal"]){
                    $session->set('parametrosBusquedaOriginal', $parametros);
                }
                $arrayVolver = json_decode($request->get('array_volver'), true);
                $session->set('arrayVolver', $arrayVolver);


                $request = $this->generarRequestBusquedaAvanzada($parametros);
                $segundaSeccion = $busquedaService->getSearchResponse($request, "Avanzada", true);

                $cantidadTotalAvisos = 0;
                $hayAvisos = true;
                if ($segundaSeccion){
                    $cantidadTotalAvisos = $segundaSeccion["cantidad_total_avisos"];
                    $hayAvisos = $segundaSeccion["items"] !== null && count($segundaSeccion["items"]) > 0;
                }

                $menuRubros = null;
                if (isset($segundaSeccion["menu_rubros"]) && $segundaSeccion["menu_rubros"]){
                    $menuRubros = $segundaSeccion["menu_rubros"];
                }
                $ultimaSeccion = $parametros["ultimaSeccion"];
                $ultimoItemExterno = $parametros['ultimoItemExterno'];
                $ultimoItemInterno = $parametros['ultimoItemInterno'];

                $ultimosItems = $this->getUltimosItems($segundaSeccion);
                $primerItemInterno = $this->getPrimerItemInterno($segundaSeccion);


                if ($primerItemInterno){
                    $templatePrimerosAvisos = $this->renderView("Busqueda/avisos_segunda.html.twig", array(
                        'item_interno' => $primerItemInterno,
                        'seccion' => "segunda"
                    ));
                }

                $templatePrimerosAvisos = str_replace("\n", '', $templatePrimerosAvisos);
                $templatePrimerosAvisos = str_replace('"', "'", $templatePrimerosAvisos);

                if ($hayAvisos){
                    $template = $this->renderView("Busqueda/items_busqueda.html.twig", array(
                        'trajo_pdf' => false,
                        'titulo_seccion' => "Sociedades y Avisos Judiciales",
                        'subtitulo_seccion' => "Segunda sección",
                        'seccion' => "segunda",
                        'ult_seccion' => $ultimaSeccion,
                        'segunda_seccion' => $segundaSeccion,
                        'fecha_sin_formato' => $fechaEdicionYMD,
                        'nro_pagina'=>$numeroPagina,
                        'es_busqueda'=>"Avanzada",
                        "cantidad_result_seccion"=>$cantidadTotalAvisos,
                        "menu_rubros" => $menuRubros,
                        "ultimoItemExterno" => $ultimoItemExterno,
                        "ultimoItemInterno" => $ultimoItemInterno,
                        "html_primeros_avisos" => $templatePrimerosAvisos
                    ));
                }

                $content = array('html'=>$template, 'sig_pag'=> (((int)$numeroPagina) + 1), 'ult_seccion' => "segunda", 'ultimos_items' => $ultimosItems, "cantidad_result_seccion"=>$cantidadTotalAvisos);
            }

        } catch (Exception $e) {
            $error = 2;
            $mensajesErrorBusqAvanzada =  array("Hubo un error al realizar la búsqueda.");
        }

        return new JsonResponse(array('error'=>$error, 'content'=>$content, 'mensajes' => $mensajesErrorBusqAvanzada));
    }

    private function getPrimerItemInterno($segundaSeccion){
        $primerItemInterno = array();
        if ($segundaSeccion != null && $segundaSeccion["items"] != null && count($segundaSeccion["items"]) > 0){
            $itemsExternos = $segundaSeccion["items"];
            $primerItemExterno = $itemsExternos[0];
            if ($primerItemExterno != null && $primerItemExterno["items"] != null && count($primerItemExterno["items"]) > 0){
                $primerItemInterno = $primerItemExterno["items"][0];
            }
        }

        return $primerItemInterno;
    }


    private function getUltimosItems($segundaSeccion){
        $ultimosItems = array();
        $ultimoItemExterno = null;
        $ultimoItemInterno = null;
        if ($segundaSeccion != null && $segundaSeccion["items"] != null){
            $itemsExternos = $segundaSeccion["items"];
            $ultimoItemExterno = array_pop($itemsExternos);
            if ($ultimoItemExterno["items"] != null){
                $itemsInternos = $ultimoItemExterno["items"];
                $ultimoItemInterno = array_pop($itemsInternos);
            }
        }
        $ultimosItems["itemExterno"] = $ultimoItemExterno;
        $ultimosItems["itemInterno"] = $ultimoItemInterno;

        return $ultimosItems;
    }

    /**
     * @Route("/realizarBusqueda", name="realizar_busqueda")
     * @Method("POST")
     * @param Request $request
     * @return JsonResponse
     */
    public function realizarBusqueda(Request $request)
    {
        $parametros = json_decode($request->get('params'), true);
        $session = $request->getSession();
        $arrayVolver = json_decode($request->get('array_volver'), true);
        return $this->getBusquedaAvanzadaResult($parametros, $session, $arrayVolver);
    }

    /**
     * @Route("/busquedaEspecial", name="realizar_busqueda_especial")
     * @Method("GET")
     * @param Request $request
     * @return Response
     */
    public function realizarBusquedaEspecialAction(Request $request)
    {
        if (!isset($_ENV['palabras_busqueda_avanzada_especial'])) {
            return $this->redirectToRoute('index');
        }

        $twig = 'Busqueda/busquedaAvanzadaEspecial.html.twig';
        return $this->busquedaAvanzadaShow($request, 'all', $twig);
    }
    
    public function realizarBusquedaEspecial(Request $request)
    {
        $palabras = getenv('palabras_busqueda_avanzada_especial');
        $palabras = str_replace(',', ' ', $palabras);
        
        $secciones = array(1, 2, 3);
        $seccionesABuscar = getenv('secciones_busqueda_avanzada_especial');
        
        if ($seccionesABuscar) {
            $secciones = explode(',', $seccionesABuscar);
        }
        
        $parametros = array(
            "busquedaRubro" => false,
            "hayMasResultadosBusqueda" => true,
            "ejecutandoLlamadaAsincronicaBusqueda" => false,
            "ultimaSeccion" => "",
            "filtroPorRubrosSeccion" => false,
            "filtroPorRubroBusqueda" => false,
            "filtroPorSeccionBusqueda" => false,
            "busquedaOriginal" => true,
            "ordenamientoSegunda" => false,
            "seccionesOriginales" => $secciones,
            "ultimoItemExterno" => null,
            "ultimoItemInterno" => null,
            "texto" => $palabras,
            "rubros" => array(),
            "nroNorma" => "",
            "anioNorma" => "",
            "denominacion" => "",
            "tipoContratacion" => "",
            "anioContratacion" => "",
            "nroContratacion" => "",
            "fechaDesde" => "",
            "fechaHasta" => "",
            "todasLasPalabras" => true,
            "comienzaDenominacion" => true,
            "seccion" => $secciones,
            "tipoBusqueda" => "Avanzada",
            "busquedaEspecial" => true,
            "numeroPagina" => 1,
            "ultimoRubro" => ""
        );

        $session = $request->getSession();
        $arrayVolver = array();

        $content = $this->getBusquedaAvanzadaResult($parametros, $session, $arrayVolver);
        $content = json_decode($content->getContent(), true);

        return new Response($content['content']['html']);
    }

    private function getBusquedaAvanzadaResult($parametros, $session, $arrayVolver)
    {
        $busquedaService = $this->container->get('busqueda_service');
        $mensajesErrorBusqAvanzada = array();
        $error = 0;
        $content = null;
        $template = '';
        try {
            $esBusquedaEspecial = false;
            if (array_key_exists('busquedaEspecial', $parametros) 
                && $parametros['busquedaEspecial'] === true) {
                $esBusquedaEspecial = true;
            }

            $numeroPagina=$parametros['numeroPagina'];
            $tipoBusqueda = $parametros['tipoBusqueda'];
            $ultimoRubro = $parametros['ultimoRubro'];

            if ($tipoBusqueda === "Avanzada" && $parametros["filtroPorRubroBusqueda"] === false){
                $mensajesErrorBusqAvanzada = $this->validarDatosBusquedaAvanzada($parametros);
                if (count($mensajesErrorBusqAvanzada) > 0){
                    $error = 1;
                    $content = null;
                }
            }

            if ($error == 0){
                $fechaEdicionYMD = CommonFunctions::getFechaEdicionSinFormato($session);

                if ($fechaEdicionYMD == ""){
                    $fechaHoy = new \DateTime();
                    $fechaEdicionYMD = $fechaHoy->format('Ymd');
                }

                $session->set('parametrosBusquedaUltimo', $parametros);
                if ($parametros["busquedaOriginal"]){
                    $session->set('parametrosBusquedaOriginal', $parametros);
                }

                $session->set('arrayVolver', $arrayVolver);

                if($tipoBusqueda==='Avanzada'){
                    $request = $this->generarRequestBusquedaAvanzada($parametros);
                    $elements = $busquedaService->getSearchResponse($request, $tipoBusqueda);
                }else{
                    $request = $this->generarRequestBusquedaRapida($parametros);
                    $elements = $busquedaService->getSearchResponse($request, $tipoBusqueda);
                }

                $menuRubros = null;
                if (count($elements) == 1){
                    if (isset($elements[0]["menu_rubros"]) && $elements[0]["menu_rubros"]){
                        $menuRubros = $elements[0]["menu_rubros"];
                    }
                }

                $ultSeccion = $parametros['ultimaSeccion'];
                if($ultimoRubro===""){
                    $ultimoRubro=0;
                }
                if($ultSeccion===""){
                    $ultSeccion=0;
                }else{
                    $ultSeccion = $this->numeroSecciones[$ultSeccion];
                }

                $response = $this->getInfoDelaBusqueda($elements);
                $nombreUltimoRubro = $response['nombreUltimoRubro'];
                $tituloSeccion = "";
                $subtituloSeccion = "";
                $nombreSeccion = "";
                if ($response['encabezadoSeccion'] and count($response['encabezadoSeccion']) > 0){
                    $tituloSeccion=$response['encabezadoSeccion']['tituloSeccion'];
                    $subtituloSeccion=$response['encabezadoSeccion']['subtituloSeccion'];
                    $nombreSeccion=$response['encabezadoSeccion']['nombreSeccion'];
                }
                $cantidad=$response['cantidad'];
                $encabezadosSeccion = $response["encabezadosSeccion"];
                $cantRubros=0;
                $seccionService = $this->container->get('seccion_service');

                foreach ($elements as &$element){
                    $cantRubros += count($element['rubros']);
                    $element["nombre_seccion"] = $this->nombreSecciones[$element["seccion"]];
                    
                    // Para la busqueda de avisos en los suplementos
                    foreach ($element['rubros'] as &$rubro) {
                        foreach ($rubro['avisos'] as &$aviso) {
                            if (!$aviso['id_aviso']) {
                                $fechaSuplemento = new \DateTime($aviso['fecha_publicacion']);
                                $nombreSuplemento = null;
                                if (array_key_exists('nombre_suplemento', $aviso)) {
                                    $nombreSuplemento = $aviso['nombre_suplemento'];
                                }
                                $urlSuplementos = $seccionService->getUrlSuplementos($nombreSeccion, $fechaSuplemento, $nombreSuplemento);
                                $urlAviso = array_shift($urlSuplementos);
                                if (is_array($urlAviso) && array_key_exists('url', $urlAviso)) {
                                    $urlAviso = $urlAviso['url'];
                                }
                                $aviso['url_suplemento'] = $urlAviso;
                            }
                        }
                    }
                }

                if($cantRubros>0) {
                    $template = $this->renderView("Busqueda/items_busqueda.html.twig", array(
                        'trajo_pdf' => false,
                        'seccion' => $nombreSeccion,
                        'ult_seccion' => $ultSeccion,
                        'elements' => $elements,
                        'fecha_sin_formato' => $fechaEdicionYMD,
                        'ult_rubro' => $ultimoRubro,
                        'ultimo_rubro' => $nombreUltimoRubro,
                        'titulo_seccion' => $tituloSeccion,
                        'subtitulo_seccion' => $subtituloSeccion,
                        'nro_pagina'=>$numeroPagina,
                        'es_busqueda'=>$tipoBusqueda,
                        'es_busqueda_especial'=>$esBusquedaEspecial,
                        "cantidad_result_seccion"=>$cantidad,
                        "menu_rubros" => $menuRubros,
                        "encabezados_seccion" => $encabezadosSeccion
                    ));
                }
                $content = array('html'=>$template, 'sig_pag'=> (((int)$numeroPagina) + 1), 'ult_seccion' => $response["nombreUltimaSeccion"], 'ult_rubro' => $response["nombreUltimoRubro"], "cantidad_result_seccion"=>$cantidad);
            }

        } catch (Exception $e) {
            $error = 2;
            $mensajesErrorBusqAvanzada =  array("Hubo un error al realizar la búsqueda");
        }

        return new JsonResponse(array('error'=>$error, 'content'=>$content, 'mensajes' => $mensajesErrorBusqAvanzada));
    }

    private function getInfoDelaBusqueda($elements){
        $nombreUltimoRubro = '';
        $nombreUltimaSeccion='';
        $nroUltimaSeccion=0;
        $encabezadosSeccion = array();
        $encabezadoSeccion = "";
        $cantidad = array();
        foreach ($elements as $element) {
            $cantidad[$element['seccion']] = $element['cantidad_total_avisos'];
            if(count($element['rubros'])>0){
                foreach ($element['rubros'] as $rubro) {
                    $nroUltimaSeccion = $element['seccion'];
                    $nombreUltimaSeccion = $this->nombreSecciones[$element['seccion']];
                }
                if ($nroUltimaSeccion == 4){
                    $nombreUltimoRubro = $rubro["extension"];
                }
                else{
                    $nombreUltimoRubro = $rubro['rubro'];
                }
                $encabezadoSeccion =  CommonFunctions::getTituloSeccion($element['seccion']);
                $encabezadosSeccion[$element["seccion"]] = $encabezadoSeccion;
            }else{
                $encabezadoSeccion =  CommonFunctions::getTituloSeccion($nroUltimaSeccion);
                $encabezadosSeccion[$nroUltimaSeccion] = $encabezadoSeccion;
            }

        }
        return array("nombreUltimaSeccion" => $nombreUltimaSeccion, "nombreUltimoRubro"=>$nombreUltimoRubro, "cantidad"=>$cantidad, "encabezadoSeccion"=>$encabezadoSeccion, "encabezadosSeccion" => $encabezadosSeccion);
    }


    /**
     * @Route("/{nombreSeccion}", name="busquedaAvanzada_show")
     * @Method("GET")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function busquedaAvanzadaAction(Request $request, $nombreSeccion)
    {
        $twig = 'Busqueda/busquedaAvanzada.html.twig';
        return $this->busquedaAvanzadaShow($request, $nombreSeccion, $twig);
    }

    private function busquedaAvanzadaShow($request, $nombreSeccion, $twig)
    {
        $btnVolver = $request->get('volver');
        if($btnVolver != 1 and $btnVolver != 2){
            $session = $request->getSession();
            $session->remove('parametrosBusquedaUltimo');
            $session->remove('parametrosBusquedaOriginal');
            $session->remove('arrayVolver');
        }

        $session = $request->getSession();

        if ($session->get("parametrosBusquedaUltimo")){
            $parametrosBusquedaUltimo = $session->get("parametrosBusquedaUltimo");
            $parametrosBusquedaUltimo["ultimoItemExterno"] = null;
            $parametrosBusquedaUltimo["ultimoItemInterno"] = null;
            $parametrosBusquedaUltimo["ultimoRubro"] = "";
            $parametrosBusquedaUltimo["ultimaSeccion"] = "";
            $session->set("parametrosBusquedaUltimo", $parametrosBusquedaUltimo);
        }

        $diasHabilitados = $session->get("fechas_publicacion_all");

        $fechaUltimaEdicion = $session->get("fecha_ultima_edicion_all");

        $fecha_edicion = CommonFunctions::getFechaEdicion($session, $fechaUltimaEdicion);
        if ($fecha_edicion != null){
            $fechaEdicionYMD = $fecha_edicion->format('Ymd');
        }

        $calendarioService = $this->container->get('calendario_service');
        $fechaUltimaEdicion = $session->get("fecha_ultima_edicion_all");
        if (!$fechaUltimaEdicion){
            $fechaUltimaEdicion = new \DateTime();
        }
        $anioUltimaEdicion = intval($fechaUltimaEdicion->format('Y'));
        $anioFechaDesde = $anioUltimaEdicion;
        $anioFechaHasta = $anioUltimaEdicion;
        try{
            $diasHabilitadosBusqueda[$anioUltimaEdicion] = $calendarioService->getFechasPublicacionesBusqAvanzada($anioUltimaEdicion);
            $parametrosBusqOriginal = $session->get('parametrosBusquedaOriginal');
            if ($parametrosBusqOriginal){
                $fechaDesdeBusqOriginal = $parametrosBusqOriginal["fechaDesde"];
                $fechaHastaBusqOriginal = $parametrosBusqOriginal["fechaHasta"];
                if ($fechaDesdeBusqOriginal){
                    $anioFechaDesde = intval(substr($fechaDesdeBusqOriginal, 6, 4));
                }
                if ($fechaHastaBusqOriginal){
                    $anioFechaHasta = intval(substr($fechaHastaBusqOriginal, 6, 4));
                }

                if ($anioFechaDesde != $anioUltimaEdicion){
                    $diasHabilitadosBusqueda[$anioFechaDesde] = $calendarioService->getFechasPublicacionesBusqAvanzada($anioFechaDesde);
                }
                if ($anioFechaHasta != $anioUltimaEdicion && $anioFechaHasta != $anioFechaDesde){
                    $diasHabilitadosBusqueda[$anioFechaHasta] = $calendarioService->getFechasPublicacionesBusqAvanzada($anioFechaHasta);
                }
            }
        } catch(CallServiceException $e){
            $diasHabilitadosBusqueda = array();
            $session->getFlashBag()->clear();
            $session->getFlashBag()->add('warning',"No se pudieron recuperar los días habilitados para la búsqueda.");
        }

        $palabraClave = $request->get("palabra_clave");
        if ($palabraClave){
            $palabraClave = str_replace('"','\"', $palabraClave);
        }

        return $this->render('lateralMenuTemplate.html.twig',
            array('contentUrl' => $twig,
                'palabraClave' => $palabraClave,
                'fechaEdicion' => $fecha_edicion,
                'fecha_sin_formato' => $fechaEdicionYMD,
                'fechaUltimaEdicion' => $fechaUltimaEdicion,
                'seccion' => $nombreSeccion,
                'calendar_reload' => false,
                'diasHabilitados' => $diasHabilitados,
                'fechaEdicionPortada' => CommonFunctions::formatToLongDate($fecha_edicion),
                'diasHabilitadosBusqueda' => null === $diasHabilitadosBusqueda ? $diasHabilitadosBusqueda : json_encode($diasHabilitadosBusqueda),
                'anioFechaDesde' => $anioFechaDesde,
                'anioFechaHasta' => $anioFechaHasta
            ));
    }


    /**
     * @Route("/{nombreSeccion}/rubros", name="get_rubros_seccion")
     * @Method("GET")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getRubrosSeccion(Request $request, $nombreSeccion){
        if($nombreSeccion != 'all'){
            $busquedaService = $this->container->get('busqueda_service');
            $rubrosSeccion = $busquedaService->getRubrosSeccion($nombreSeccion);
            if($nombreSeccion=='tercera'){
                $rubrosSeccion = $this->formatearRubrosTercera($rubrosSeccion);
            }
        }

        $rubros = array();
        foreach($rubrosSeccion as $rubroSeccion){
            array_push($rubros, array("id" => $rubroSeccion["id"], "name" => $rubroSeccion["nombre"]));
        }



        return new JsonResponse($rubros);
    }

    private function formatearRubrosTercera($rubros){
        $rubrosFormateados = [];
        foreach ($rubros as $rubro){
            $rubro['nombre'] = ucfirst(mb_strtolower($rubro['nombre'], 'UTF-8'));
            array_push($rubrosFormateados, $rubro);
        }
        return $rubrosFormateados;
}

    private function generarRequestBusquedaAvanzada($params){
        $entity = new RequestBusquedaAvanzada();
        // Gral
        $entity->setCantidadPorPagina(getenv('cantidad_items_por_pagina_busqueda'));
        $entity->setNumeroPagina($params['numeroPagina']);
        $entity->setSecciones($params['seccion']);
        $entity->setTexto($params['texto']);
        $entity->setFechaDesde(str_replace("-","",$params['fechaDesde']));
        $entity->setFechaHasta(str_replace("-","",$params['fechaHasta']));
        $entity->setAnioContratacion($params['anioContratacion']);
        $entity->setRubros($params['rubros']);
        $entity->setTodasLasPalabras($params["todasLasPalabras"]);
        $entity->setComienzaDenominacion($params["comienzaDenominacion"]);
        $entity->setOrdenamientoSegunda($params["ordenamientoSegunda"]);

        if(count($params['seccion'])===1){
            $secciones = $params['seccion'];
            $entity = $this->{$this->SERIALIZADO_POR_SECCION[$secciones[0]]}($entity, $params);
        }

        return $entity;
    }
    
    public function setParamsToPrimera($entity, $params){
        $entity->setNroNorma($params['nroNorma']);
        $entity->setAnioNorma($params['anioNorma']);
        return $entity;
    }

    public function setParamsToSegunda($entity, $params){
        $entity->setDenominacion($params['denominacion']);
        return $entity;
    }

    public function setParamsToTercera($entity, $params){
        $entity->setTipoContratacion($params['tipoContratacion']);
        $entity->setNroContratacion($params['nroContratacion']);
        //$entity->setAnioContratacion($params['anioContratacion']);
        return $entity;
    }


    private function generarRequestBusquedaRapida($params){
        $entity = new RequestBusquedaRapida();
        $entity->setCantidadPorPagina(getenv('cantidad_items_por_pagina_busqueda'));
        $entity->setNumeroPagina($params['numeroPagina']);
        $entity->setSecciones($this->numeroSecciones[$params['seccion']]);
        $entity->setTexto($params['texto']);
        $entity->setFecha($params['fecha']);
        $entity->setRubros($params['rubros']);

        return $entity;
    }


    private function validarDatosBusquedaAvanzada($datos){
        $mensajes = array();

        $secciones = $datos["seccion"];
        if ($secciones == null  || count($secciones) < 1){
            array_push($mensajes, "La sección es requerida.");
        }

        $anioNorma = $datos["anioNorma"];
        $this->validarAnio($anioNorma, "año de norma", $mensajes);
        $anioContratacion = $datos["anioContratacion"];
        $this->validarAnio($anioContratacion, "año de contratación", $mensajes);

        $fechaDesde = $datos["fechaDesde"];
        $fechasBienFormateadas = true;
        if ($fechaDesde && !CommonFunctions::validateDate($fechaDesde, 'd/m/Y')){
            array_push($mensajes, "La fecha desde es inválida.");
            $fechasBienFormateadas = false;
        }
        $fechaHasta = $datos["fechaHasta"];
        if ($fechaHasta && !CommonFunctions::validateDate($fechaHasta, 'd/m/Y')){
            array_push($mensajes, "La fecha hasta es inválida.");
            $fechasBienFormateadas = false;
        }

        if ($fechaDesde && $fechaHasta && $fechasBienFormateadas){
            $fechaDesde = \DateTime::createFromFormat('d/m/Y', $fechaDesde);
            $fechaHasta = \DateTime::createFromFormat('d/m/Y', $fechaHasta);
            if ($fechaDesde > $fechaHasta){
                array_push($mensajes, "La fecha desde no puede superar a la fecha hasta.");
            }
        }

        return $mensajes;
    }


    private function validarAnio($anio, $nombreCampo, &$mensajes){
        if ($anio){
            if (!is_numeric($anio)){
                array_push($mensajes, "El ".$nombreCampo." debe ser un número");
            }
            else{
                $anio = (int) $anio;
                $anioInicioBoletin = 1893;
                $anioActual = date("Y");
                if ($anio < $anioInicioBoletin || $anio > $anioActual){
                    array_push($mensajes, "El ".$nombreCampo." debe estar entre ".$anioInicioBoletin." y ".$anioActual);
                }
            }
        }
    }



}