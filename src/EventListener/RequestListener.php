<?php

namespace App\EventListener;

use App\Utils\CallServiceException;
use Psr\Container\ContainerInterface;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;

class RequestListener
{
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function onKernelRequest(GetResponseEvent $event)
    {
        if (!$event->isMasterRequest()) {
            return;
        }

        $request = $event->getRequest();
        $routeName = $request->attributes->get('_route');

        if ($routeName === "show_error") {
            return;
        }

        $portadaService = $this->container->get('portada_service');
        $calendarioService = $this->container->get('calendario_service');
        $monolog = $this->container->get('logger');

        $session = $request->getSession();

        if (count($session->all()) == 0 || $session->get("error_en_servicios_fecha")) {
            $session->start();
            $monolog->info("La session ha expirado");
            $errorEnServicios = true;

            try {
                $fechaEdicion = $portadaService->getFechaUltimaEdicion();
                $errorEnServicios = false;
            } catch (CallServiceException $e) {
                $fechaEdicion = new \DateTime();
                $session->getFlashBag()->clear();
                $session->getFlashBag()->add('warning', 'No se pudo recuperar la fecha de la última edición.');
            }

            try {
                $fechasPublicacion = $calendarioService->getFechasPublicaciones($fechaEdicion->format('Y'), 'all');
                $errorEnServicios = false;
            } catch (CallServiceException $e) {
                $fechasPublicacion = array();
                $session->getFlashBag()->add('warning', "No se pudieron recuperar los días habilitados para el calendario.");
            }

            $session->set("fecha_edicion", $fechaEdicion);
            $session->set("fecha_ultima_edicion_all", $fechaEdicion);
            $session->set("fechas_publicacion_all", $fechasPublicacion);
            $session->set("error_en_servicios_fecha", $errorEnServicios);
        }
    }

    public function onKernelResponse(FilterResponseEvent $event)
    {
        $response = $event->getResponse();
        $response->headers->addCacheControlDirective('no-cache', true);
        $response->headers->addCacheControlDirective('max-age', 0);
        $response->headers->addCacheControlDirective('must-revalidate', true);
        $response->headers->addCacheControlDirective('no-store', true);
        $event->setResponse($response);
    }
}
