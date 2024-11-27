<?php

namespace App\Service;

use App\Entity\RequestPortadaSeccion;
use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\DependencyInjection\ContainerInterface;

class SeccionService
{

    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function getAvisosSeccion($seccion, RequestPortadaSeccion $requestPortadaSeccion){
        $monolog = $this->container->get('logger');
        $url = getenv("url_portada_seccion");
        $url .= $seccion;
        $json = $requestPortadaSeccion->serializarJson();
        try{
            $responseArray = ConexionWS::llamarServicio($url, "POST", array(), $json);
            return  $responseArray['content']['rubros'];
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "SeccionService::getAvisosSeccionPorRubro" );
            throw new CallServiceException("Error al obtener los avisos de una sección",0, $e);
        }
    }

    public function getElementsOfMenu($seccion, $fecha){
        $monolog = $this->container->get('logger');
        $url = getenv("url_menu_seccion");
        $url = $url . $seccion . '/' . $fecha;
        try{
            $responseArray = ConexionWS::llamarServicio($url, "GET", array());
            return $responseArray['content'];
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "SeccionService::getElementsOfMenu" );
            throw new CallServiceException("Error al obtener los items del menu de la sección: ".$seccion,0, $e);
        }
    }

    public function getUrlSuplementos($seccionNombre, $fechaEdicion, $nombreSuplemento=null)
    {
        $urlSuplementos = array();
        $baseUrl = getenv('base_url_suplementos');
        $anio = $fechaEdicion->format('Y');
        $mes = $fechaEdicion->format('m');
        $dia = $fechaEdicion->format('d');
        $dir = $anio . '/' . $mes . '/' . $dia . '/';

        if ($nombreSuplemento) {
            $urlSuplementos[] = array('url' => $baseUrl . $dir . $nombreSuplemento, 'anexos' => array());
        } else {
            $fechaPortadaSuplemento = $fechaEdicion->format('Ymd');
            $suplementos = $this->obtenerSuplementos($seccionNombre, $fechaPortadaSuplemento);
            foreach ($suplementos['suplementos'] as $suplemento) {
                $anexos = array();
                foreach ($suplemento['anexos'] as $anexo) {
                    $anexos[] = array('url' => $baseUrl . $dir . $anexo['documento_file']);
                }
                $suplementoArray = array('url' => $baseUrl . $dir . $suplemento['filename'], 'anexos' => $anexos);
                $urlSuplementos[] = $suplementoArray;
            }
        }

        return $urlSuplementos;
    }

    private function obtenerSuplementos($seccionNombre, $fechaPortadaSuplemento)
    {
        $responseArray = array('suplementos' => array());

        if ($seccionNombre == 'primera') {
            $monolog = $this->container->get('logger');
            $url = getenv("url_suplementos");
            $url = $url . $seccionNombre . '/' . $fechaPortadaSuplemento;

            try {
                $response = ConexionWS::llamarServicio($url);
                $responseArray = $response['content'];
            } catch (Exception $e) {
                CommonFunctions::logErrorException($e, $monolog, "SeccionService::obtenerSuplementos");
                throw new CallServiceException("Error al obtener los suplementos. URL: " . $url, 0, $e);
            }
        }

        return $responseArray;
    }
}