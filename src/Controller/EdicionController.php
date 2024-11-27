<?php

namespace App\Controller;


use App\Utils\CommonFunctions;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class edicionController
 * @package App\Controller
 * @Route("/edicion")
 */

class EdicionController extends Controller
{

    /**
     * @Route("/actualizar/{fecha}", name="actualizar_edicion")
     * @Method("GET")
     * @param $fecha
     * @return JsonResponse
     */
    public function actualizarEdicionAction(Request $request, $fecha)
    {
        $fecha_edicion = date_create_from_format('d-m-Y',$fecha);
        $request->getSession()->set("fecha_edicion",$fecha_edicion);
        return new JsonResponse();
    }

}