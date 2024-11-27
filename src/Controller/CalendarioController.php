<?php

namespace App\Controller;

use App\Utils\CallServiceException;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * Class homeController
 * @package App\Controller
 * @Route("/calendario")
 */

class CalendarioController extends Controller
{

    /**
     * @Route("/dias_publicacion/busqueda/{anio}", name="get_dias_publicacion_busqueda")
     * @Method("GET")
     * @param Request $request
     * @param $anio
     * @return JsonResponse
     */
    public function getDiasPublicacionBusquedaAction(Request $request, $anio)
    {
        $session = $request->getSession();
        try{
            $dias=$this->get('calendario_service')->getFechasPublicacionesBusqAvanzada($anio);

        } catch(CallServiceException $e){
            $session->set("error_en_servicios_fecha_busqueda", true);
            $dias = array();
        }

        $diasJson = json_encode($dias);
        return new JsonResponse($diasJson);
    }

    /**
     * @Route("/dias_publicacion/{anio}/{seccion}", name="get_dias_publicacion")
     * @Method("GET")
     * @param Request $request
     * @param $anio
     * @param $seccion
     * @return JsonResponse
     */
    public function getDiasPublicacionAction(Request $request, $anio, $seccion)
    {
        $session = $request->getSession();
        try{
            $dias=$this->get('calendario_service')->getFechasPublicaciones($anio,$seccion);

        } catch(CallServiceException $e){
            $session->set("error_en_servicios_fecha", true);
            $dias = array();
        }

        $session->set('fechas_publicacion_'.$seccion,$dias);
        $diasJson = json_encode($dias);
        return new JsonResponse($diasJson);
    }

}