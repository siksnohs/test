<?php

namespace App\Service;

use App\Entity\RequestAnexo;
use App\Entity\RequestDetalleAviso;
use App\Entity\RequestLinkQr;
use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\DependencyInjection\ContainerInterface;

class PdfService
{
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function getPdfSeccion($seccion, $fecha){
        $monolog = $this->container->get('logger');
        $fechaHoy = (new \DateTime())->format('Ymd');

        try{
            $url = getenv('pdf_del_dia_'.$seccion.'');
            if($fecha === $fechaHoy && $url){
                return base64_encode(file_get_contents($url));

            }else{
                $url = getenv("url_pdf_seccion");
                $url = $url . $seccion . '/' . $fecha;
                $responseArray = ConexionWS::llamarServicio($url);
                $base64Pdf = $responseArray['content'];
                return $base64Pdf;
            }
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "PdfService::getPdfSeccion" );
            throw new CallServiceException("Error al obtener el pdf de una sección", 0, $e);
        }
    }

    public function getPdfSuplemento($fecha, $nombreSuplemento)
    {
        $monolog = $this->container->get('logger');
        $url = getenv("url_pdf_suplemento");
        $url .= '?fecha=' . $fecha . '&nombre_suplemento=' . $nombreSuplemento;

        try {
            $responseArray = ConexionWS::llamarServicio($url);
            $base64Pdf = $responseArray['content'];
            $filePDF = tempnam(sys_get_temp_dir(), 'POST');
            file_put_contents($filePDF, base64_decode($base64Pdf));
            return $filePDF;
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e, $monolog, "PdfService::getPdfSuplemento");
            throw new CallServiceException("Error al obtener el pdf de un suplemento. URL: " . $url, 0, $e);
        }
    }

    public function getPdfAnexoSuplemento($fecha, $filename)
    {
        $monolog = $this->container->get('logger');
        $url = getenv("url_pdf_anexo_suplemento");
        $url .= '?fecha=' . $fecha . '&filename=' . $filename;

        try {
            $responseArray = ConexionWS::llamarServicio($url);
            $base64Pdf = $responseArray['content'];
            $filePDF = tempnam(sys_get_temp_dir(), 'POST');
            file_put_contents($filePDF, base64_decode($base64Pdf));
            return $filePDF;
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e, $monolog, "PdfService::getPdfAnexoSuplemento");
            throw new CallServiceException("Error al obtener el pdf de un anexo suplemento. URL: " . $url, 0, $e);
        }
    }

    public function getPdfSeccionPorPaginas($seccion, $fecha, $paginaDesde, $paginaHasta, $nombrePDF=''){
        $monolog = $this->container->get('logger');
        try{
            $url = getenv("url_pdf_seccion");
            $url = $url . $seccion . '/' . $fecha;
            $dataJson = '{';
            $dataJson .= '"pagina_desde": ' . (string)$paginaDesde . ',';
            $dataJson .= '"pagina_hasta": ' . (string)$paginaHasta . ',';
            $dataJson .= '"documento": "' . $nombrePDF . '"';
            $dataJson .= '}';
            $responseArray = ConexionWS::llamarServicio($url,"POST", array(), $dataJson);
            $base64Pdf = $responseArray['content'];
            return $base64Pdf;
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "PdfService::getPdfSeccion" );
            throw new CallServiceException("Error al obtener el pdf de una sección por paginas", 0, $e);
        }
    }

    public function getPdfAviso($seccion, $idTramite, $fecha, $isSuplemento=null){
        $monolog = $this->container->get('logger');
        $url = getenv("url_pdf_aviso");

        $data = new RequestDetalleAviso($idTramite, $seccion, $fecha, $isSuplemento);
        $dataJson = $data->serializarJson();

        try{
            $responseArray = ConexionWS::llamarServicio($url, "POST", array(), $dataJson);
            $base64Pdf = $responseArray['content'];
            return $base64Pdf;
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "PdfService::getPdfAviso" );
            throw new CallServiceException("Error al obtener el pdf de un aviso", 0, $e);
        }


    }


    public function getPdfAnexo($seccion, $nroAnexo, $idAnexo, $fecha, $isSuplemento=null){
        $monolog = $this->container->get('logger');
        $url = getenv("url_pdf_anexo");

        $data = new RequestAnexo($seccion, $nroAnexo, $idAnexo, $fecha, $isSuplemento);
        $dataJson = $data->serializarJson();

        try{
            $responseArray = ConexionWS::llamarServicio($url, "POST", array(), $dataJson);
            $base64Pdf = $responseArray['content'];
            return $base64Pdf;
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "PdfService::getPdfAnexo" );
            throw new CallServiceException("Error al obtener el pdf de un anexo", 0, $e);
        }


    }

    public function getPdfLinkQr($linkQr){
        $monolog = $this->container->get('logger');
        $url = getenv("url_pdf_link_qr");

        $data = new RequestLinkQr($linkQr);
        $dataJson = $data->serializarJson();

        try{
            $responseArray = ConexionWS::llamarServicio($url, "POST", array(), $dataJson);
            return $responseArray['content'];
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "PdfService::getPdfLinkQr" );
        throw new CallServiceException("Error al obtener el pdf de un aviso por su QR", 0, $e);
        }


    }



}