<?php

namespace App\Controller;

use App\Entity\RequestPortadaSeccion;
use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


/**
 * Class seccionController
 * @Route("/seccion")
 */
class SeccionController extends Controller
{

    /**
     * @Route("")
     * @Method("GET")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function redirectToHomeAction(Request $request)
    {
        $request->getSession()->getFlashBag()->clear();
        $this->addFlash("warning","La url ingresada no existe.");
        return $this->redirectToRoute("index");
    }


    /**
     * @Route("/buscarRubro", name="busqueda_por_rubro")
     * @Method("POST")
     * @param Request $request
     * @return JsonResponse
     */
    public function seccionFiltrarRubros(Request $request){
        $params = json_decode($request->get('params'), true);
        $seccionService = $this->container->get('seccion_service');
        $error = 0;
        $mensajesError = array();
        try{
            $fechaEdicion=$params['fechaPublicacion'];

            $requestPortadaSeccion=$this->getRequestPortadaSeccion(1,$fechaEdicion, $params['idRubro']);

            $secciones_nro = array(1=>'primera', 2=>'segunda', 3=>'tercera', 4=>'cuarta');
            $nombreSeccion = $secciones_nro[$params['seccion'][0]];
            $rubros = $seccionService->getAvisosSeccion($nombreSeccion, $requestPortadaSeccion);
            $ultimoRubro = $request->get('ult_rubro_bsq');

            $sectionClass = 'primary';
            switch ($nombreSeccion){
                case 'primera':
                    $sectionClass = 'first-section';
                    break;
                case 'segunda':
                    $sectionClass = 'second-section';
                    break;
                case 'tercera':
                    $sectionClass = 'third-section';
                    break;
                case 'cuarta':
                    $sectionClass = 'fourth-section';
                    break;
            }
    
            $sectionClassBg = 'bg-' . $sectionClass;

            $template = $this->renderView("secciones/item_avisos.html.twig", array(
                'rubros' => $rubros,
                'seccion' => $nombreSeccion,
                'sectionClassBg' => $sectionClassBg,
                'fecha_sin_formato' => $fechaEdicion,
                'ult_rubro' => $ultimoRubro,
            ));

            $response = $this->getUltimoRubro($rubros, $nombreSeccion);
        }
        catch(\Exception $e) {
            $error = 1;
            $mensajesError = array("Los rubros no pudieron ser filtrados");
        }


        $content = array('html'=>$template, 'sig_pag'=> 2, 'ult_rubro' => $response["nombreUltimoRubro"]);
        return new JsonResponse(array('error'=>$error, 'content'=>$content, 'mensajes' => $mensajesError));
    }

    //PARA EL INFINITY LOOP
    /**
     * @Route("/actualizar/{nombreSeccion}", name="actualizar_seccion")
     * @Method("GET")
     * @param Request $request
     * @param $nombreSeccion
     * @return JsonResponse
     */
    public function actualizarPortadaAction(Request $request, $nombreSeccion){
        $session = $request->getSession();
        $fechaEdicion = $session->get('fecha_edicion');
        $fechaEdicionYMD = CommonFunctions::getFechaEdicionSinFormato($session);

        //$cantItemsPorPagina = getenv('cantidad_items_por_pagina');

        $numeroPagina = $request->get('pag');
        $ultimoRubroBsq = $request->get('ult_rubro_bsq');
        $ultimoRubro = $request->get('ult_rubro');
        $idRubro = $request->get('id_rubro');
        if($ultimoRubro===null && $ultimoRubroBsq!="" && $idRubro != null){
            $requestPortadaSeccion=$this->getRequestPortadaSeccion($numeroPagina,$fechaEdicion, $idRubro);
        }else{
            $requestPortadaSeccion=$this->getRequestPortadaSeccion($numeroPagina,$fechaEdicion, 'all');
        }

        $seccionService = $this->container->get('seccion_service');
        try{
            $rubros = $seccionService->getAvisosSeccion($nombreSeccion, $requestPortadaSeccion);
        } catch(CallServiceException $e){
            $rubros = array();
        }

        if($ultimoRubroBsq!=""){
            $ultimoRubro = $ultimoRubroBsq;
        }

        $template = "";
        if(count($rubros)>0){

            $sectionClass = 'primary';
            switch ($nombreSeccion){
                case 'primera':
                    $sectionClass = 'first-section';
                    break;
                case 'segunda':
                    $sectionClass = 'second-section';
                    break;
                case 'tercera':
                    $sectionClass = 'third-section';
                    break;
                case 'cuarta':
                    $sectionClass = 'fourth-section';
                    break;
            }
    
            $sectionClassBg = 'bg-' . $sectionClass;


            $template = $this->renderView("secciones/item_avisos.html.twig", array(
                'rubros' => $rubros,
                'seccion' => $nombreSeccion,
                'sectionClassBg' => $sectionClassBg,
                'fecha_sin_formato' => $fechaEdicionYMD,
                'ult_rubro' => $ultimoRubro,
                'nro_pagina'=>$numeroPagina,
            ));
        }

        $response = $this->getUltimoRubro($rubros, $nombreSeccion);

        $hayMasDatos = count($rubros) > 0;

        return new JsonResponse(array('hay_mas_datos' => $hayMasDatos, 'html'=>$template, 'sig_pag'=> (((int)$numeroPagina) + 1), 'ult_rubro' => $response["nombreUltimoRubro"], 'id_rubro' => $idRubro));

    }



    /**
     * @Route("/{nombreSeccion}/{fechaPublicacion}", defaults={"fechaPublicacion" = null}, name="seccion_show")
     * @Method("GET")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function seccionAction(Request $request, $nombreSeccion, $fechaPublicacion = null){
        $secciones = array("primera", "segunda", "tercera", "cuarta");
        $tituloSeccion='';
        $subtituloSeccion='';
        if (!in_array($nombreSeccion, $secciones)){
            throw new NotFoundHttpException();
        }

        $session = $request->getSession();
        $portadaService = $this->container->get('portada_service');

        try {
            $fechaUltimaEdicion = CommonFunctions::obtenerYactualizarFechaUltimaEdicion($portadaService, $session, $nombreSeccion);
        } catch (CallServiceException $e) {
            $this->addFlash("warning", $e->getMessage());
            $fechaUltimaEdicion = new \DateTime();
        }


        $fechaEdicion = CommonFunctions::getFechaEdicion($session, $fechaUltimaEdicion);
        if ($fechaPublicacion != null && $fechaPublicacion != "" && CommonFunctions::validateDate($fechaPublicacion)){
            $fechaEdicion = \DateTime::createFromFormat('Ymd', $fechaPublicacion);
            $session->set("fecha_edicion", $fechaEdicion);
        }

        if ($fechaEdicion != null){
            $fechaEdicionYMD = $fechaEdicion->format('Ymd');
        }

        //Carga de calendario
        $calendarioService = $this->container->get('calendario_service');
        try {
            $anio = CommonFunctions::obtenerAnioFechaSeleccionada($session);
            $diasHabilitados = CommonFunctions::obtenerYactualizarFechasPublicacion($calendarioService, $session, $anio, $nombreSeccion);
        } catch (CallServiceException $e) {
            $diasHabilitados = array();
            $session->getFlashBag()->clear();
            $this->addFlash("warning", 'No hay publicaciones disponibles para el año seleccionado.');
            $session->set('sin_publicaciones', 1);
            return $this->redirectToRoute("index");
        }

        $url = 'secciones/seccion.html.twig';

        $seccionService = $this->container->get('seccion_service');
        $numeroPaginaSeccion = 1;

        $rubros = array();
        $pdfBase64 = '';
        $ultimoNombreRubro = '';

        // Volver desde el path
        $rubroSelected = $request->get('rubro');
        if(!$rubroSelected){
            $requestPortadaSeccion=$this->getRequestPortadaSeccion($numeroPaginaSeccion,$fechaEdicion, "all");
        }else{
            $requestPortadaSeccion=$this->getRequestPortadaSeccion(1,$fechaEdicion, $rubroSelected);
        }

        $nroSeccion=CommonFunctions::getNumeroSeccionFromNombre($nombreSeccion);
        $encabezado=CommonFunctions::getTituloSeccion($nroSeccion);

        $pdfLink = null;
        $seccionNombre = null;
        $sectionClass = 'primary';
        switch ($nroSeccion){
            case 1:
                $pdfLink = getenv('pdf_del_dia_primera');
                $seccionNombre = 'primera';
                $sectionClass = 'first-section';
                break;
            case 2:
                $pdfLink = getenv('pdf_del_dia_segunda');
                $seccionNombre = 'segunda';
                $sectionClass = 'second-section';
                break;
            case 3:
                $pdfLink = getenv('pdf_del_dia_tercera');
                $seccionNombre = 'tercera';
                $sectionClass = 'third-section';
                break;
            case 4:
                $pdfLink = getenv('pdf_del_dia_cuarta');
                $seccionNombre = 'cuarta';
                $sectionClass = 'fourth-section';
                break;
        }

        $sectionClassBg = 'bg-' . $sectionClass;

        $urlSuplementos = array();
        try {
            $urlSuplementos = $seccionService->getUrlSuplementos($seccionNombre, $fechaEdicion);
        } catch (Exception $e) {
            $this->addFlash("warning", "No se pudieron obtener los suplementos del dia.");
        }

        $tituloSeccion=$encabezado['tituloSeccion'];
        $subtituloSeccion=$encabezado['subtituloSeccion'];
        $nombreSeccion=$encabezado['nombreSeccion'];

        $no_trajo_pdf = false;

        try {
            $rubros = $seccionService->getAvisosSeccion($nombreSeccion, $requestPortadaSeccion);
            if (count($rubros) == 0) {
                if($rubroSelected){
                    $this->addFlash("warning", "No se pudo encontrar avisos del rubro.");
                    return $this->redirectToRoute('seccion_show', array('nombreSeccion'=>$nombreSeccion));
                }else{
                    $pdfBase64 = $this->obtenerPdfSeccion($nombreSeccion, $fechaEdicionYMD);
                    $no_trajo_pdf = $pdfBase64 == null || $pdfBase64 == "";
                }
            } else {

                $rubroSelected ? $ultimoNombreRubro=$rubros[0]['rubro'] : $ultimoNombreRubro = $this->getUltimoRubro($rubros, $nombreSeccion)['nombreUltimoRubro'];

                if ($nombreSeccion === "cuarta") {
                    $ultimoNombreRubro = $rubros[count($rubros) - 1]['extension'];
                } else {
                    $nuevo = $rubros[count($rubros) - 1]['nuevo'];

                    if (!$nuevo) {
                        $ultimoNombreRubro .= " - ANTERIOR";
                    }

                }
            }
        }
        catch
        (CallServiceException $e) {
            $pdfBase64 = $this->obtenerPdfSeccion($nombreSeccion, $fechaEdicionYMD);
            $no_trajo_pdf = $pdfBase64 == null || $pdfBase64 == "";
        }

        if($no_trajo_pdf){
            $session->getFlashBag()->clear();
            $this->addFlash("warning", 'No hay publicaciones disponibles para la fecha seleccionada.');
            $session->set('sin_publicaciones', 1);
            return $this->redirectToRoute("index");
        }

        //Obtiene elementos del menu
        try{
            $items_menu = $seccionService->getElementsOfMenu($nombreSeccion, $fechaEdicionYMD);
        }
        catch (CallServiceException $e){
            $items_menu = null;
            $this->addFlash("warning", "No se pudo obtener el menu de rubros.");
        }

        return $this->render('lateralMenuTemplate.html.twig',
            array(
                'contentUrl' => $url,
                'pdf_seccion' => $pdfBase64,
                'fechaUltimaEdicion' => $fechaUltimaEdicion,
                'fechaEdicion' => $fechaEdicion,
                'fechaEdicionPortada' => CommonFunctions::formatToLongDate($fechaEdicion),
                'fecha_sin_formato' => $fechaEdicionYMD,
                'diasHabilitados' => $diasHabilitados,
                'seccion' => $nombreSeccion,
                'titulo_seccion' => $tituloSeccion,
                'subtitulo_seccion' => $subtituloSeccion,
                'sectionClass' => $sectionClass,
                'sectionClassBg' => $sectionClassBg,
                'calendar_reload' => true,
                'rubros' => $rubros,
                'items_menu'=>$items_menu,
                'ult_rubro' => $ultimoNombreRubro,
                'trajo_pdf' => !$no_trajo_pdf,
                'nro_pagina'=>$numeroPaginaSeccion,
                'rubroSearch'=>$rubroSelected,
                'pdfLink' =>$pdfLink,
                'urlSuplementos'=> $urlSuplementos
            ));
    }

    private function getRequestPortadaSeccion($numeroPaginaSeccion,$fechaEdicion, $idRubro){
        $requestPortadaSeccion = new RequestPortadaSeccion();
        $requestPortadaSeccion->setCantidadItemsPorPagina(getenv('cantidad_items_por_pagina_portada'));
        $requestPortadaSeccion->setNumeroPagina($numeroPaginaSeccion);
        $requestPortadaSeccion->setFechaPublicacion($fechaEdicion);
        $requestPortadaSeccion->setIdRubro($idRubro);
        return $requestPortadaSeccion;
    }



    private function obtenerPdfSeccion($nombreSeccion, $fecha){
        $pdfService = $this->container->get('pdf_service');
        $pdfBase64 = "";
        try{
            $pdfBase64 = $pdfService->getPdfSeccion($nombreSeccion, $fecha);
            if ($pdfBase64 == null || $pdfBase64 == ""){
                $this->addFlash("warning", "No se pudo encontrar la portada de la sección y tampoco su pdf.");
            }
        }
        catch (CallServiceException $e) {
            $this->addFlash("warning", "No se pudo encontrar la portada de la sección y tampoco su pdf.");
        }
        return $pdfBase64;
    }


    private function getUltimoRubro($rubros, $nombreSeccion=''){
        $nombreUltimoRubro = '';
        foreach ($rubros as $rubro) {
            if($nombreSeccion==='cuarta'){
                $nombreUltimoRubro = $rubro['extension'];
            }else{
                $nombreRubro = $rubro["rubro"];
                $nombreUltimoRubro = $nombreRubro;
            }
        }
        return array("nombreUltimoRubro"=>$nombreUltimoRubro);
    }

}


