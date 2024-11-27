<?php

namespace App\Controller;

use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Class EstaticasController
 * @Route("/estatica")
 */
class EstaticasController extends Controller
{
    /**
     * @Route("")
     * @Method("GET")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function redirectToHomeAction(Request $request)
    {
        $request->getSession()->getFlashBag()->clear();
        $this->addFlash("warning","La url ingresada no existe.");
        return $this->redirectToRoute("index");
    }

    /**
     * @Route("/{nombreEstatica}", name="estatica_show")
     * @Method("GET")
     * @param Request $request
     * @param string $nombreEstatica
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function estaticaAction(Request $request, $nombreEstatica)
    {
        $session = $request->getSession();

        $fechaUltimaEdicion = $session->get('fecha_ultima_edicion_all');
        $fechaEdicion = CommonFunctions::getFechaEdicion($session, $fechaUltimaEdicion);
        $fechaEdicionPortada = CommonFunctions::formatToLongDate($fechaEdicion);

        if ($fechaEdicion != null) {
            $fechaEdicionYMD = $fechaEdicion->format('Ymd');
        }

        $estaticaService = $this->container->get('estatica_service');
        $contenidoEstatica = "";
        try {
            $nombreEstatica = filter_var($nombreEstatica, FILTER_SANITIZE_STRING);
            $estatica = $estaticaService->getEstaticaContent($nombreEstatica);
            $contenidoEstatica = $estatica['content']['html_content'];
        } catch (CallServiceException $e) {
            $this->addFlash("warning", "No se pudo encontrar el recurso solicitado");
        }

        $servicioSeleccionado = $request->get("servicio");
        $diasHabilitados = $session->get("fechas_publicacion_all");

        return $this->render('lateralMenuTemplate.html.twig', array(
            'contentUrl' => '',
            'diasHabilitados' => $diasHabilitados,
            'seccion' => 'all',
            'contenidoEstatica' => $contenidoEstatica,
            'fechaUltimaEdicion' => $fechaUltimaEdicion,
            'fechaEdicion' => $fechaEdicion,
            'fecha_sin_formato' => $fechaEdicionYMD,
            'fechaEdicionPortada' => $fechaEdicionPortada,
            'calendar_reload' => false,
            'servicioFaq' => $servicioSeleccionado
        ));
    }
}
