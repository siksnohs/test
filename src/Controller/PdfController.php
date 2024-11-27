<?php

namespace App\Controller;

use App\Entity\RequestPortadaSeccion;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Utils\CallServiceException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

/**
 * Class pdfController
 * @package App\Controller
 * @Route("/pdf")
 */

class PdfController extends Controller
{

    /**
     * @Route("/seccion/{seccion}/{fecha}", name="render_pdf_seccion")
     * @Method("POST")
     * @param Request $request
     * @return Response
     */
    public function pdfSectionAction(Request $request, $seccion, $fecha){
        $pdfService = $this->container->get('pdf_service');
        $pdfBase64 = $pdfService->getPdfSeccion($seccion, $fecha);

        $PageHeaders = array(
            'Content-type' => 'application/pdf',
        );

        return new Response(base64_decode($pdfBase64),200,$PageHeaders);
    }

    /**
     * @Route("/download_section", name="download_pdf_section")
     * @Method("POST")
     * @param Request $request
     * @return JsonResponse
     */
    public function downloadPdfSectionAction(Request $request){
        $nombreSeccion = $request->get('nombreSeccion');
        $paginaDesde = $request->get('paginaDesde');
        $paginaHasta = $request->get('paginaHasta');

        $pdfService = $this->container->get('pdf_service');
        if ($paginaDesde == null || $paginaHasta == null){
            $dates = $this->getFormatedDatesFromSession($request->getSession(), $nombreSeccion);
            $pdfBase64 = $pdfService->getPdfSeccion($nombreSeccion, $dates['fechaEdicionYMD']);
        }
        else{
            $fechaPublicacion = $request->get('fechaPublicacion');
            $pdfBase64 = $pdfService->getPdfSeccionPorPaginas($nombreSeccion, $fechaPublicacion, $paginaDesde, $paginaHasta);
        }

        return new JsonResponse(array('pdfBase64'=>$pdfBase64));
    }


    /**
     * @Route("/aviso/{seccion}/{id}/{fechaPublicacion}", name="render_pdf_aviso")
     * @Method("POST")
     * @param Request $request
     * @return Response
     */
    public function pdfAvisoAction(Request $request, $seccion, $id, $fechaPublicacion){
        $pdfService = $this->container->get('pdf_service');
        $isSuplemento = $request->get('suplemento');
        $pdfBase64 = $pdfService->getPdfAviso($seccion, $id, $fechaPublicacion, $isSuplemento);

        $PageHeaders = array(
            'Content-type' => 'application/pdf',
        );

        return new Response(base64_decode($pdfBase64),200,$PageHeaders);
    }


    /**
     * @Route("/download_aviso", name="download_pdf_aviso")
     * @Method("POST")
     * @param Request $request
     * @return JsonResponse
     */
    public function downloadPdfAvisoAction(Request $request){
        $idAviso = $request->get('idAviso');
        $seccion = $request->get('nombreSeccion');
        $fechaPublicacion = $request->get('fechaPublicacion');
        $isSuplemento = $request->get('suplemento');

        $pdfService = $this->container->get('pdf_service');
        $pdfBase64 = $pdfService->getPdfAviso($seccion, $idAviso, $fechaPublicacion, $isSuplemento);
        return new JsonResponse(array('pdfBase64'=>$pdfBase64));

    }

    /**
     * @Route("/anexo/{seccion}/{id}/{nroAnexo}/{fechaPublicacion}", name="render_pdf_anexo")
     * @Method("POST")
     * @param Request $request
     * @return Response
     */
    public function pdfAnexoAction(Request $request, $seccion, $id, $nroAnexo, $fechaPublicacion){
        $pdfService = $this->container->get('pdf_service');
        $pdfBase64 = $pdfService->getPdfAnexo($seccion, $nroAnexo, $id, $fechaPublicacion);
        $PageHeaders = array(
            'Content-type' => 'application/pdf',
        );
        return new Response(base64_decode($pdfBase64),200,$PageHeaders);
    }

    /**
     * @Route("/download_anexo", name="download_pdf_anexo")
     * @Method("POST")
     * @param Request $request
     * @return JsonResponse
     */
    public function downloadPdfAnexoAction(Request $request){
        $seccion = $request->get('seccion');
        $idAnexo = $request->get('idAnexo');
        $nroAnexo = $request->get('nroAnexo');
        $fechaPublicacion = $request->get('fechaPublicacion');
        $isSuplemento = $request->get('suplemento');

        $pdfService = $this->container->get('pdf_service');
        $pdfBase64 = $pdfService->getPdfAnexo($seccion, $nroAnexo, $idAnexo, $fechaPublicacion, $isSuplemento);
        return new JsonResponse(array('pdfBase64'=>$pdfBase64));

    }

    /**
     * @Route("/download_pdf_suplemento", name="download_pdf_suplemento")
     * @Method("GET")
     * @param Request $request
     * @return BinaryFileResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function downloadSuplemento(Request $request)
    {
        try {
            $fechaPublicacion = $request->get('fechaPublicacion');
            $nombreSuplemento = $request->get('nombreSuplemento');

            $pdfService = $this->container->get('pdf_service');
            $pdfBase64 = $pdfService->getPdfSuplemento($fechaPublicacion, $nombreSuplemento);

            $response = new BinaryFileResponse($pdfBase64);
            $response->headers->set('Content-type', 'application/pdf');
            $response->setContentDisposition(
                ResponseHeaderBag::DISPOSITION_ATTACHMENT,
                $nombreSuplemento
            );
            return $response;
        } catch (Exception $e) {
            $this->addFlash("warning", "No se pudo encontrar el pdf del suplemento.");
            return $this->redirectToRoute("seccion_show", array("nombreSeccion" => "primera"));
        }
    }

    /**
     * @Route("/download_pdf_anexo_suplemento", name="download_pdf_anexo_suplemento")
     * @Method("GET")
     * @param Request $request
     * @return BinaryFileResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function downloadAnexoSuplemento(Request $request)
    {
        try {
            $fechaPublicacion = $request->get('fechaPublicacion');
            $filename = $request->get('filename');

            $pdfService = $this->container->get('pdf_service');
            $pdfBase64 = $pdfService->getPdfAnexoSuplemento($fechaPublicacion, $filename);

            $response = new BinaryFileResponse($pdfBase64);
            $response->headers->set('Content-type', 'application/pdf');
            $response->setContentDisposition(
                ResponseHeaderBag::DISPOSITION_ATTACHMENT,
                $filename
            );
            return $response;
        } catch (Exception $e) {
            $this->addFlash("warning", "No se pudo encontrar el pdf del anexo del aviso.");
            return $this->redirectToRoute("seccion_show", array("nombreSeccion" => "primera"));
        }
    }

    private function getFormatedDatesFromSession($session, $nombreSeccion) {
        $portadaService = $this->container->get('portada_service');
        $fechaUltimaEdicion = CommonFunctions::obtenerYactualizarFechaUltimaEdicion($portadaService, $session, $nombreSeccion);
        $fechaEdicion = CommonFunctions::getFechaEdicion($session, $fechaUltimaEdicion);
        if ($fechaEdicion != null){
            $fechaEdicionYMD = $fechaEdicion->format('Ymd');
        }
        return array("fechaEdicion"=>$fechaEdicion, "fechaEdicionYMD"=>$fechaEdicionYMD);
    }


}