<?php

namespace App\Service;

use App\Entity\RequestBusquedaAvanzada;
use App\Entity\RequestPortadaSeccion;
use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\DependencyInjection\ContainerInterface;

class BusquedaService
{

    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->URL_BUSQUEDA = array("Rapida"=> "url_busqueda_rapida", "Avanzada"=> "url_busqueda_avanzada");
    }

    public function getRubrosSeccion($seccion){
        $monolog = $this->container->get('logger');
        $url = getenv("url_rubros_seccion");
        $url = $url . $seccion . '/rubros';

        try{
            $responseArray = ConexionWS::llamarServicio($url);
            return $responseArray['content'];
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "BusquedaService::getRubrosSeccion" );
            throw new CallServiceException("Error al obtener el rubros de una sección", 0, $e);
        }


    }


    public function getSearchResponse($request, $tipo="Rapida", $busquedaSegunda = false){
        $monolog = $this->container->get('logger');
        if ($busquedaSegunda){
            $url = getenv("url_busqueda_avanzada_segunda");
        }
        else{
            $url = getenv($this->URL_BUSQUEDA[$tipo]);
        }

        $json = $request->serializarJson();

        try{
            $responseArray = ConexionWS::llamarServicio($url, "POST", array(), $json);
            if ($responseArray['content'] === null){
                return array();
            }
            return $responseArray['content'];
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "BusquedaService::getSearchResponse" );
            throw new CallServiceException("Error al obtener los elementos de la búsqueda",0, $e);
        }
    }

}