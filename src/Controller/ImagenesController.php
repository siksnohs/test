<?php

namespace App\Controller;

use App\Utils\CallServiceException;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * Class imagenesController
 * @package App\Controller
 * @Route("/imagenes")
 */

class ImagenesController extends Controller
{

    /**
     * Devuelve una imagen a partir de su Id
     *
     * @Route("/getImagen/{seccion}/{id}", requirements={"id" = ".+"}))
     * @Method({"GET", "POST"})
     * @codeCoverageIgnore
     *
     */
    public function getImagenAction($seccion,$id)
    {
        $imagenesService = $this->get('imagenes_service');
        $img = $imagenesService->getImagen($id,$seccion);
        return new Response(base64_decode($img),200,array('Content-type' => 'image'));
    }

}