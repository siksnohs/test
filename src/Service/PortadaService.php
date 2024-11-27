<?php

namespace App\Service;

use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\DependencyInjection\ContainerInterface;

class PortadaService
{

    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function getFechaUltimaEdicion($seccion=null){
        $monolog = $this->container->get('logger');
        $url = getenv("url_fecha_ultima_edicion");

        if ($seccion != null){
            $seccion_numero = CommonFunctions::obtenerNumeroSeccion($seccion);
            $url .= "?seccion=".(string) $seccion_numero;
        }

        try{
            $responseArray = ConexionWS::llamarServicio($url);
            $date = $responseArray['content']['fecha_ultima_edicion'];
            if ($date == null){
                throw new CallServiceException("Error al obtener la última fecha de edición del boletín",0,null);
            }
            return date_create_from_format('Ymd',$date);
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "SeccionService::getAvisosSeccionPorRubro" );
            throw new CallServiceException("Error al obtener la última fecha de edición del boletín",0, $e);
        }


    }


}