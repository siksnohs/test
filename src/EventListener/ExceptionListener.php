<?php

namespace App\EventListener;

use App\Kernel;
use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use Psr\Container\ContainerInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBag;
use Symfony\Component\Asset\Exception\LogicException;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Component\Routing\RouterInterface;

class ExceptionListener
{
    /**
     * @var RouterInterface
     */
    private $router;

    private $kernel;

    private $container;
    /**
     * @var RouterInterface $router
     */
    public function __construct(RouterInterface $router, Kernel $kernel, ContainerInterface $container)
    {
        $this->router = $router;
        $this->kernel = $kernel;
        $this->container = $container;
    }

    /**
     * @var GetResponseForExceptionEvent $event
     * @return null
     */
    public function onKernelException(GetResponseForExceptionEvent $event)
    {
        $session = $event->getRequest()->getSession();
        $exception = $event->getException();
        if ($exception instanceof CallServiceException){
            return;
        }

        if ($exception instanceof NotFoundHttpException) {

            /** Choose your router here */
            $route = $event->getRequest()->get('_route');
            if ($route === "index" || $route === "show_error") {
                return;
            }

            $session->getFlashBag()->clear();
            $session->getFlashBag()->add("warning","La url ingresada no existe.");
            $url = $this->router->generate($route);
            $response = new RedirectResponse($url);
            $event->setResponse($response);
        }
        else{
            if ($this->kernel->getEnvironment() != "dev"){
                $monolog = $this->container->get('logger');
                CommonFunctions::logErrorException($exception,$monolog);
                $response = new RedirectResponse($this->router->generate('show_error'));
                $event->setResponse($response);
            }
        }


    }
}