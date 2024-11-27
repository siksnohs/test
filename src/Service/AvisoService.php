<?php

namespace App\Service;

use App\Utils\ConexionWS;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\DependencyInjection\ContainerInterface;
class AvisoService
{
    private $container;
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }
    public function getDetalleAviso($seccion, $idAviso, $fechaEdicion, $isSuplemento=null){
        $monolog = $this->container->get('logger');
        $url = getenv("url_detalle_aviso");
        $url = $url . $seccion;
        try{
            $responseArray = ConexionWS::llamarServicio($url, "GET", array('id'=>$idAviso, 'fecha_contexto'=>$fechaEdicion, 'es_suplemento'=>$isSuplemento));
            $detalleAviso = $responseArray['content'];
            return $detalleAviso;
        } catch (Exception $e) {
        }
    }
}