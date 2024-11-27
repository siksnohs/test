<?php

namespace App\Service;

use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\DependencyInjection\ContainerInterface;
use App\Entity\RequestImagen;

class ImagenesService
{

    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function getImagen($idImagen, $seccion){

        $url = getenv("url_imagenes");

        try{
            $idImagenParts = explode("/",$idImagen);
            $nombreArchivo = array_pop($idImagenParts);
            $fechaPublicacion = date_create_from_format("Y/m/d", implode("/",$idImagenParts));

            $imagenRequest = new RequestImagen();
            $imagenRequest->setSeccion($seccion);
            $imagenRequest->setFecha($fechaPublicacion);
            $imagenRequest->setNombreArchivo($nombreArchivo);

            $responseArray = ConexionWS::llamarServicio($url, "POST", array(), $imagenRequest->serializarJson());
            $base64Img = $responseArray['content'];

            return $base64Img;

        } catch(Exception $e){
            return "";
        }

    }


}