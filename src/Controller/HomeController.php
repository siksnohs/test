<?php

namespace App\Controller;


use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class homeController
 * @package App\Controller
 * @Route("/")
 */

class HomeController extends Controller
{
    /**
     * @Route("/", name="index")
     * @Method("GET")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function homeAction(Request $request){
        $nombreSeccion = 'all';
        $session = $request->getSession();
        $fechaUltimaEdicion =  $session->get("fecha_ultima_edicion_all");

        $fechaEdicion = $session->get('fecha_edicion');
        $sinPublicaciones = $session->remove('sin_publicaciones');

        if (!$sinPublicaciones) {
            $fechaEdicion = $fechaUltimaEdicion;
            $session->set("fecha_edicion", $fechaEdicion);
        }
        
        $diasHabilitados = $session->get("fechas_publicacion_all");
        if ($fechaEdicion != null){
            $fechaEdicionYMD = $fechaEdicion->format('Ymd');
        }


        $administradorBannersService = $this->container->get('administrador_banners_service');

        try{
            $banners = $administradorBannersService->getBanners();
        } catch(CallServiceException $e){
            $banners = array();
        }

        try{
            $sliders = $administradorBannersService->getSliders();
        } catch(CallServiceException $e){
            $sliders = array();
        }

        try{
            $mensaje = $administradorBannersService->getMensaje();
        } catch(CallServiceException $e){
            $mensaje = '';
        }


        $parameters = array(
            'fechaEdicion' => $fechaEdicion,
            'fecha_sin_formato' => $fechaEdicionYMD,
            'fechaEdicionPortada' => CommonFunctions::formatToLongDate($fechaEdicion),
            'diasHabilitados' => $diasHabilitados,
            'seccion' => $nombreSeccion,
            'calendar_reload' => false,
            'fechaParaPdf' => $fechaUltimaEdicion->format('Ymd'),
            'fechaUltimaEdicion' => $fechaUltimaEdicion,
            'banners' => $banners,
            'sliders' => $sliders,
            'mensaje' => $mensaje,
            'pdfLinkPrimera' => getenv('pdf_del_dia_primera'),
            'pdfLinkSegunda' => getenv('pdf_del_dia_segunda'),
            'pdfLinkTercera' => getenv('pdf_del_dia_tercera'),
            'pdfLinkCuarta' => getenv('pdf_del_dia_cuarta')

        );
        return $this->render('index.html.twig',$parameters);

    }

//    Redirects

    /**
     * @Route("/{nombreUri}", name="redirect_invalid_uri_mis_suscripciones",requirements={"nombreUri"="Dicha"})
     * @Method("GET")
     */
    public function redirectHomeMisSuscripcionesAction($nombreUri){

        return $this->redirectToRoute('index');
    }

    /**
     * @Route("/{nombreUri}", name="redirect_invalid_uri_ayuda_alertas",requirements={"nombreUri"="pdWnk"})
     * @Method("GET")
     */
    public function redirectHomeAyudaAlertasAction($nombreUri){

        return $this->redirectToRoute('index');
    }

    /**
     * @Route("/{nombreUri}", name="redirect_invalid_uri_mis_consumos",requirements={"nombreUri"="pdflink.*"})
     * @Method("GET")
     */
    public function redirectHomeMisConsumosAction($nombreUri){

        return $this->redirectToRoute('index');
    }

    /**
     * @Route("/getFilesEspeciales/{linkPdf}", name="redirect_invalid_uri_pdf")
     * @Method("GET")
     */
    public function redirectHomeLinkPdfAction($linkPdf){

        return $this->redirectToRoute('index');
    }

    /**
     * @Route("/pdf/linkQR/{linkQr}", name="download_pdf_codigo_qr")
     * @Method("GET")
     * @param Request $request
     * @return Response
     */
    public function downloadPdfCodigoQrAction(Request $request,$linkQr){
        $pdfService = $this->container->get('pdf_service');

        try{

            $pdfBase64 = $pdfService->getPdfLinkQr($linkQr);
            $PageHeaders = array(
                'Content-type' => 'application/pdf',
            );

            return new Response(base64_decode($pdfBase64),200,$PageHeaders);

        }catch (\Exception $e){
            $this->addFlash("warning", "No se pudo encontrar el pdf del aviso.");
            return $this->redirectToRoute('index');
        }
    }

}