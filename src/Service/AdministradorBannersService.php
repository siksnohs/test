<?php

namespace App\Service;

use App\Entity\Banner;
use App\Entity\Slider;
use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\DependencyInjection\ContainerInterface;



class AdministradorBannersService
{
    private $container;
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }


    public function getBanners(){
        $monolog = $this->container->get('logger');
        $url = getenv("url_banners");
        try{
            $responseArray = ConexionWS::llamarServicio($url);
            $content = $responseArray['content'];
            $banners = array();
            if ($content){
                foreach($content as $bannerContent){
                    $banner = new Banner();
                    $banner->setLink($bannerContent["link"]);
                    array_push($banners, $banner);
                }
            }
            return $banners;
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "AdministradorBannersService::getBanners" );
            throw new CallServiceException("Error al obtener los banners",0, $e);
        }
    }


    public function getSliders(){
        $monolog = $this->container->get('logger');
        $url = getenv("url_sliders");
        try{
            $responseArray = ConexionWS::llamarServicio($url);
            $content = $responseArray['content'];
            $sliders = array();
            if ($content){
                $count = 0;
                foreach($content as $bannerContent){
                    $slider = new Slider();
                    $slider->setHtml($bannerContent["html_slider"]);
                    $slider->setNumero($count);
                    array_push($sliders, $slider);
                    $count++;
                }
            }
            return $sliders;
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "AdministradorBannersService::getSliders" );
            throw new CallServiceException("Error al obtener los banners",0, $e);
        }
    }

    public function getMensaje() {
        $monolog = $this->container->get('logger');
        $url = getenv("url_mensaje");
        try {
            $responseArray = ConexionWS::llamarServicio($url);
            $content = $responseArray['content'];
            $mensaje = '';
            if ($content){
                $mensaje = $content['mensaje'];
            }
            return $mensaje;
        } catch (Exception $e) {
            CommonFunctions::logErrorException($e,$monolog, "AdministradorBannersService::getMensaje" );
            throw new CallServiceException("Error al obtener los banners",0, $e);
        }
    }

}