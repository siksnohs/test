<?php

namespace App\Controller;

use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
use Swift_Message;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Config\Definition\Exception\Exception;


/**
 * Class seccionController
 * @Route("/share")
 */
class ShareController extends Controller
{

    /**
     * @Route("/shareMail", name="share_mail")
     * @Method("POST")
     * @param Request $request
     * @return JsonResponse
     */
    public function shareMail(Request $request, \Swift_Mailer $mailer){
        try {
            $parametros = json_decode($request->get('params'), true);
            $parametros['aviso'] = explode('?', $parametros['aviso'])[0];

            $mensajesValidacion = $this->validarCamposCompartir($parametros, $request);

            $habilitarCaptcha = getenv("habilitar_captcha");
            if ($habilitarCaptcha === "true"){
                $captcha = $parametros["captcha"];
                $urlGoogleVerify = getenv('url_google_verify');
                $secretKeyCaptcha = getenv('secret_key_captcha');
                if (!CommonFunctions::validateCaptcha($captcha, $urlGoogleVerify, $secretKeyCaptcha)){
                    array_push($mensajesValidacion, "Por favor, confirme el código de validación.");
                }
            }


            if (count($mensajesValidacion) == 0){
                $message = new \Swift_Message();
                $message->setSubject($parametros['asunto']);
                $message->setFrom(getenv("mail_emisor"));
                $message->setTo($parametros['emailDestino']);

                $logo = $message->embed(\Swift_Image::fromPath('images/boraLogo.jpg'));

                $dataArray = array("urlAviso" => $parametros['aviso'],'logo' => $logo);

                $message->setBody($this->renderView('Share/aviso_mail.html.twig',$dataArray), 'text/html');

                // Send the message
                $mailer->send($message);

                $error = 0;
            }
            else{
                $error = 1;
            }
            return new JsonResponse(array('error' => $error, 'mensajes' => $mensajesValidacion));
        } catch (Exception $e) {
            $error = 1;
            return new JsonResponse(array('error' => $error, 'mensajes' => []));
        }
    }

    private function validarCamposCompartir($datos, $request){
        $mensajes = [];

        $receptor = $datos["emailDestino"];
        if (!$receptor){
            array_push($mensajes, "El destinatario es requerido.");
        }

        $asunto = $datos["asunto"];
        if (!$asunto){
            array_push($mensajes, "El Asunto es requerido.");
        }

        $emailDestino = $datos["emailDestino"];
        $emailDestinoInvalido = filter_var($emailDestino,FILTER_VALIDATE_EMAIL) == false;

        if ($emailDestinoInvalido){
            array_push($mensajes, "El formato del mail destino no es válido.");
        }

        $urlAviso = $datos["aviso"];
        $regexProtocol = '/^[^:]+(?=:\/\/)/';
        $matchesProtocol = array();
        preg_match($regexProtocol, $urlAviso, $matchesProtocol);
        $regexPuerto = '/(.*)\:(?<puerto>\d*)\/?(.*)/';
        $matchesPuerto = array();
        preg_match($regexPuerto, $urlAviso, $matchesPuerto);

        $errorProtocolo = false;
        if (count($matchesProtocol) > 0){
            $protocolo = $matchesProtocol[0];
            if ($protocolo !== "http" && $protocolo !== "https"){
                array_push($mensajes, "El aviso a compartir no es válido.");
                $errorProtocolo = true;
            }
            else{
                $urlAviso = str_replace($protocolo."://","",$urlAviso);
            }
        }

        $puerto = $request->getPort();
        $errorPuerto = false;
        if (count($matchesPuerto) > 0){
            $puertoUrl = $matchesPuerto['puerto'];
            if ($puertoUrl && ((int) $puertoUrl) != $puerto){
                array_push($mensajes, "El aviso a compartir no es válido. ");
                $errorPuerto = true;
            }
            else{
                $urlAviso = str_replace(":".$puertoUrl,"",$urlAviso);
            }
        }

        $dominio = $request->getHost();
        $url = $dominio . $this->generateUrl("aviso_show", array("nombreSeccion" => $datos["seccion"], "idAviso" => $datos["idAviso"],
            "fechaPublicacion" => $datos["fechaPublicacion"]));

        if ($errorProtocolo || $errorPuerto || $url != $urlAviso) {
            array_push($mensajes, "El aviso a compartir no es válido.");
        }

        return $mensajes;
    }



}