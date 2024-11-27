<?php

namespace App\Service;

use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\DependencyInjection\ContainerInterface;

class EstaticaService
{

    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function getEstaticaContent($nombreEstatica){
        $monolog = $this->container->get('logger');
        $url = getenv("url_estatica");
        try{
            $responseArray = ConexionWS::llamarServicio($url.$nombreEstatica.'/');
            return $responseArray;
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "CalendarioService::getFechasPublicaciones" );
            throw new CallServiceException("Error al obtener la estática: ".$nombreEstatica,0, $e);
        }

    }

}