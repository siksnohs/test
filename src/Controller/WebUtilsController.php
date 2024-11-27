<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 *
 * @Route("/web/utils")
 */
class WebUtilsController extends Controller
{
	/**
	 * @Route("/pdfView")
	 * @Method("GET")
	 * @Template()
	 */
	public function pdfViewAction()
	{
	  $allowedDomains = getenv("allowed_domains");

	  if($allowedDomains) {
		$allowedDomainsArray = explode(',', $allowedDomains);
	  }
	  
	  return $this->render('WebUtils/viewer.html.twig', [
		  'allowed_domains' => $allowedDomainsArray
	  ]);
	}

}


