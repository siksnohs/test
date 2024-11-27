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
 * @Route("/detalleAviso")
 */
class DetalleAvisoController extends Controller
{
    /**
     * @Route("/{nombreSeccion}/{idAviso}/{fechaPublicacion}", name="aviso_show")
     * @Method("GET")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function avisoAction(Request $request, $nombreSeccion, $idAviso, $fechaPublicacion){
        $pdfBase64='';
        $url = 'secciones/Detalle/detalle_aviso.html.twig';
        $avisoService = $this->container->get('aviso_service');
        $session = $request->getSession();

        $isBusqueda = $request->get('busqueda');
        $isSuplemento = $request->get('suplemento');

        $portadaService = $this->container->get('portada_service');
        try {
            $fechaUltimaEdicion = CommonFunctions::obtenerYactualizarFechaUltimaEdicion($portadaService, $session, $nombreSeccion);
        } catch (CallServiceException $e) {
            $fechaUltimaEdicion = new \DateTime();;
            $this->addFlash("warning", $e->getMessage());
        }

        $fechaEdicionYMD = "";
        $fechaEdicion = CommonFunctions::getFechaEdicion($session, $fechaUltimaEdicion);
        if ($fechaEdicion != null){
            $fechaEdicionYMD = $fechaEdicion->format('Ymd');
        }

        $fechaPub = $fechaPublicacion;
        if ($fechaPublicacion != null){
            $fechaPublicacion = trim($fechaPublicacion);
        }
        if ($fechaPublicacion == null or trim($fechaPublicacion) == "" or !CommonFunctions::validateDate($fechaPublicacion)){
            $fechaPub = $fechaEdicionYMD;
        }
        $fechaPub = trim($fechaPub);
        $fechaPublicacionDate = \DateTime::createFromFormat("Ymd",$fechaPub);

        $calendarioService = $this->container->get('calendario_service');
        try {
            $anio = CommonFunctions::obtenerAnioFechaSeleccionada($session);
            $diasHabilitados = CommonFunctions::obtenerYactualizarFechasPublicacion($calendarioService, $session, $anio, $nombreSeccion);
        } catch (CallServiceException $e) {
            $diasHabilitados = array();
            $this->addFlash("warning", $e->getMessage());
        }

        $no_trajo_pdf = false;
        $fechaPublicacionDetalleAviso = null;
        $pdfResponse = array();
        $detalle = null;
        try{
            $detalle = $avisoService->getDetalleAviso($nombreSeccion, $idAviso, $fechaPub, $isSuplemento);
            if ($detalle != null){
                if ($isBusqueda == 2 || ($detalle["fecha_publicacion"] == null || $detalle["fecha_publicacion"] == "")){
                    $fecha = \DateTime::createFromFormat("Ymd", $fechaPub);
                    $fechaPublicacionDetalleAviso = $fecha->format("d/m/Y");
                }
                else{
                    $fechaPubAnio = substr($detalle["fecha_publicacion"], 0, 4);
                    $fechaPubMes = substr($detalle["fecha_publicacion"], 4, 2);
                    $fechaPubDia = substr($detalle["fecha_publicacion"], 6, 2);
                    $fechaPublicacionDetalleAviso = $fechaPubDia . "/" . $fechaPubMes . "/" . $fechaPubAnio;
                }
            }
            if ($detalle == null || $detalle["texto"] == null || $detalle["texto"] == ""){
                $pdfResponse = $this->obtenerPdfContingencia($nombreSeccion, $idAviso, $fechaPub, $detalle);
                $no_trajo_pdf = count($pdfResponse) == 0;
            }
        } catch (CallServiceException $e) {
            try{
                $pdfResponse = $this->obtenerPdfContingencia($nombreSeccion, $idAviso, $fechaPub, $detalle);
                $no_trajo_pdf = count($pdfResponse) == 0;
            }catch (CallServiceException $e) {
                $this->addFlash("warning", "No se pudo encontrar el detalle del aviso y tampoco su pdf.");
                $no_trajo_pdf = true;
            }


        }
        $pdfBase64 = null;
        $pdfPaginasPublicacadas = false;
        if (count($pdfResponse) > 0){
            $pdfBase64 = $pdfResponse["pdf"];
            $pdfPaginasPublicacadas = $pdfResponse["paginas_publicadas"];
        }

        $anexos = $request->get("anexos");

        $datosSeo = $this->obtenerDatosSeo($detalle);

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

        return $this->render('secciones/Detalle/detalle_aviso.html.twig',
            array(
                'contentUrl' => $url,
                'fechaEdicion' => $fechaEdicion,
                'fechaEdicionPortada' => CommonFunctions::formatToLongDate($fechaEdicion),
                'fecha_sin_formato' => $fechaEdicionYMD,
                'seccion' => $nombreSeccion,
                'sectionClass' => $sectionClass,
                'sectionClassBg' => $sectionClassBg,
                'calendar_reload' => true,
                'diasHabilitados' => $diasHabilitados,
                'idAviso' => $idAviso,
                'pdfContingencia' => $pdfBase64,
                'paginasPublicadas' => $pdfPaginasPublicacadas,
                'aviso' => $detalle,
                'fechaDetalleDMY' => $fechaPublicacionDetalleAviso,
                'is_busqueda' => $isBusqueda, // 1- Avanzada 2- Rapida 3- AvanzadaEspecial
                'is_suplemento' => $isSuplemento, 
                'trajo_pdf' => !$no_trajo_pdf,
                'fechaUltimaEdicion' => $fechaUltimaEdicion,
                'fechaPublicacion' => $fechaPublicacionDate,
                "anexos" => $anexos,
                'siteKeyCaptcha' => getenv("site_key_captcha"),
                'datosSeo' => $datosSeo
            ));
    }



    private function obtenerPdfContingencia($seccion, $idAviso, $fechaPublicacion, $detalle){
        $pdfService = $this->container->get('pdf_service');
        $pdfResponse = array();
        try{
            $pdfBase64 = $pdfBase64 = $pdfService->getPdfAviso($seccion, $idAviso, $fechaPublicacion);
            if ($pdfBase64 == null || $pdfBase64 == ""){
                $pdfResponse = $this->obtenerPdfSeccionPorPaginas($seccion, $fechaPublicacion,$detalle);
                if (count($pdfResponse) == 0){
                    $this->addFlash("warning", "No se pudo encontrar el detalle del aviso y tampoco su pdf.");
                }
            }
            else{
                $pdfResponse["pdf"] = $pdfBase64;
                $pdfResponse["paginas_publicadas"] = false;
            }
        }
        catch (CallServiceException $e) {
            $pdfResponse = $this->obtenerPdfSeccionPorPaginas($seccion, $fechaPublicacion,$detalle);
            if (count($pdfResponse) == 0){
                $this->addFlash("warning", "No se pudo encontrar el detalle del aviso y tampoco su pdf.");
            }
            else{
                return $pdfResponse;
            }
        }
        return $pdfResponse;
    }


    private function obtenerPdfSeccionPorPaginas($seccion, $fechaPublicacion, $detalle){
        $pdfService = $this->container->get('pdf_service');
        $pdfResponse = array();
        if ($detalle !== null){
            $paginaDesde = $detalle["pagina_desde"];
            $paginaHasta = $detalle["pagina_hasta"];
            if ($paginaDesde !== null && $paginaHasta !== null){
                $pdfBase64 = $pdfService->getPdfSeccionPorPaginas($seccion, $fechaPublicacion,$paginaDesde, $paginaHasta, $detalle['documento']);
                $pdfResponse["pdf"] = $pdfBase64;
                $pdfResponse["paginas_publicadas"] = true;
            }
        }
        return $pdfResponse;
    }


    private function obtenerDatosSeo($detalle)
    {
        $tituloSeo = "BOLETIN OFICIAL REPUBLICA ARGENTINA";
        $descripcionSeo = $tituloSeo;
        if ($detalle != null) {
            $tituloAviso = $detalle["titulo"];
            $subtituloAviso = $detalle["subtitulo"];
            $sintesisAviso = $detalle["sintesis"];

            if ($tituloAviso) {
                $tituloSeo .= " - " . $tituloAviso;
                if ($subtituloAviso) {
                    $tituloSeo .= " - " . $subtituloAviso;
                }
                $descripcionSeo = $tituloSeo;
                if ($sintesisAviso) {
                    $descripcionSeo .= " - " . $sintesisAviso;
                }
            }
        }
        return array("titulo" => $tituloSeo, "descripcion" => $descripcionSeo);
    }

}