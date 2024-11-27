<?php

namespace App\Controller;


use App\Utils\CommonFunctions;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class exceptionController
 * @package App\Controller
 * @Route("/error")
 */

class ExceptionController extends Controller
{
    /**
     * @Route("/show", name="show_error")
     * @Method("GET")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showException(Request $request){
        $this->addFlash("danger", "Hubo un error en el sistema. Por favor contactarse con el administrador del mismo.");
        return $this->render('Exception/error.html.twig');

    }

}