<?php

namespace App\Service;

use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\DependencyInjection\ContainerInterface;

class CalendarioService
{

    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function getFechasPublicaciones($anio, $seccion){
        $monolog = $this->container->get('logger');
        if ($seccion != 'all'){
            $seccion = CommonFunctions::obtenerNumeroSeccion($seccion);
        }
        $url = getenv("url_fechas_publicacion");
        $parametros = array('anio'=>$anio, 'seccion'=>$seccion);
        try{
            $responseArray = ConexionWS::llamarServicio($url, "GET", $parametros);
            $dates = $responseArray['content'];
            return $dates;
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "CalendarioService::getFechasPublicaciones" );
            throw new CallServiceException("Error al obtener los fechas habilitadas para el calendario", 0, $e);
        }


    }


    public function getFechasPublicacionesBusqAvanzada($anio){
        $monolog = $this->container->get('logger');
        $url = getenv("url_fechas_publicacion");
        try{
            $secciones = array(1,2,3);
            $dates = array();
            foreach ($secciones as $nroSeccion){
                $parametros = array('anio'=>$anio, 'seccion'=> $nroSeccion);
                $responseArray = ConexionWS::llamarServicio($url, "GET", $parametros);
                $content = $responseArray['content'];
                $fechaSeccion = array();
                if ($content){
                    $fechaSeccion = $content['fechas'];
                }
                $dates = array_unique(array_merge($dates, $fechaSeccion));
            }
            return $dates;
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "CalendarioService::getFechasPublicaciones" );
            throw new CallServiceException("Error al obtener los fechas habilitadas para la busqueda", 0, $e);
        }
    }


}