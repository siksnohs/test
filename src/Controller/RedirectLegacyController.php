<?php

namespace App\Controller;
use App\Entity\RequestPortadaSeccion;
use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
/**
 * Class RedirectLegacyController
 * @Route("/redirect")
 */
class RedirectLegacyController extends Controller
{

    /**
     * @Route("/{detalleNormaSeccion}/{idSoapAviso}/{fechaPublicacion}", name="redirect_detalle_aviso_seccion")
     * @Method("GET")
     */
    public function redirectDetalleAvisoSeccionAction($detalleNormaSeccion,$idSoapAviso, $fechaPublicacion){

        return $this->redirectToRoute('aviso_show', array(
            'nombreSeccion' => $detalleNormaSeccion,
            'idAviso' => $idSoapAviso,
            'fechaPublicacion' => $fechaPublicacion
        ),301);
    }




}