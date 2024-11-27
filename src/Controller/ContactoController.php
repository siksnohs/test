<?php


namespace App\Controller;

use App\Utils\CallServiceException;
use App\Utils\CommonFunctions;
use App\Utils\ConexionWS;
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
 * @Route("/contacto")
 */
class ContactoController extends Controller
{

    /**
     * @Route("/", name="contacto_show")
     * @Method("GET")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function contactoAction(Request $request){

        $url = 'Contacto/contacto.html.twig';
        $session = $request->getSession();
        $diasHabilitados = $session->get("fechas_publicacion_all");
        $fechaUltimaEdicion = $session->get("fecha_ultima_edicion_all");
        $fecha_edicion = CommonFunctions::getFechaEdicion($session, $fechaUltimaEdicion);
        if ($fecha_edicion != null){
            $fechaEdicionYMD = $fecha_edicion->format('Ymd');
        }

        return $this->render('lateralMenuTemplate.html.twig',
            array('contentUrl' => $url,
                'fechaEdicion' => $fecha_edicion,
                'fecha_sin_formato' => $fechaEdicionYMD,
                'fechaUltimaEdicion' => $fechaUltimaEdicion,
                'seccion' => "all",
                'calendar_reload' => false,
                'rubros' => "",
                'diasHabilitados' => $diasHabilitados,
                'ult_rubro' => "",
                'fechaEdicionPortada' => CommonFunctions::formatToLongDate($fecha_edicion),
                'siteKeyCaptcha' => getenv("site_key_captcha")));
    }



    /**
     * @Route("/sendMail", name="send_mail")
     * @Method("POST")
     * @param Request $request
     * @return JsonResponse
     */
    public function sendMail(Request $request, \Swift_Mailer $mailer){
        try {
            $parametros = json_decode($request->get('params'), true);

            $mensajesError = $this->validarDatosContacto($parametros);

            $habilitarCaptcha = getenv("habilitar_captcha");
            if ($habilitarCaptcha === 'true'){
                $captcha = $parametros["captcha"];
                $urlGoogleVerify = getenv('url_google_verify');
                $secretKeyCaptcha = getenv('secret_key_captcha');
                if (!CommonFunctions::validateCaptcha($captcha, $urlGoogleVerify, $secretKeyCaptcha)){
                    array_push($mensajesError, "Por favor, confirme el código de validación.");
                }
            }

            $error = 0;
            if (count($mensajesError) == 0){
                $message = (new \Swift_Message(getenv('mail_asunto').' '.$parametros['tema']))
                    ->setFrom($parametros['email'])
                    ->setTo(getenv('mail_receptor'))
                    ->setBody(
                        $this->renderView(
                            'Contacto/mail.html.twig',
                            array('name' => $parametros['nombre'], 'email' => $parametros['email'], 'telefono' => $parametros["codigo_area"]."-".$parametros['telefono'],
                                'tema' => $parametros['tema'], 'empresa' => $parametros['empresa'], 'mensaje' => $parametros['mensaje'])
                        ), 'text/html');

                // Send the message
                $mailer->send($message);

                $request->getSession()->getFlashBag()->clear();
                $this->addFlash("success","Mail enviado correctamente");
            }
            else{
                $error = 1;
            }
            return new JsonResponse(array('error' => $error, 'mensajes' => $mensajesError));
        } catch (Exception $e) {
            $error = 1;
            return new JsonResponse(array('error' => $error, 'mensajes' => []));
        }
    }

    private function validarDatosContacto($datos){
        $mensajes = [];

        $regLetters = "/[a-z]/i";
        $regNumbers = "/[0-9]/";
        $regCaractersPermitidos = "/\,|\.|\&|\-|\_/";

        $nombre = $datos["nombre"];
        $containsNumbers = preg_match_all($regNumbers,$nombre) >= 1;
        $containsLetters = preg_match_all($regLetters,$nombre) >= 1;
        $containsCaracteresPermitidos = preg_match_all($regCaractersPermitidos,$nombre) >= 1;

        if (!$nombre){
            array_push($mensajes, "El nombre es requerido.");
        }

        if ($nombre && ($containsNumbers || (!$containsLetters && !$containsCaracteresPermitidos))){
            array_push($mensajes, "El campo nombre no es válido.");
        }

        $mail = $datos["email"];
        if (!$mail){
            array_push($mensajes, "El email es requerido.");
        }

        $mailInvalido = filter_var($mail,FILTER_VALIDATE_EMAIL) == false;

        if ($mail && $mailInvalido){
            array_push($mensajes, "El formato del mail no es válido.");
        }

        $codigoArea = $datos["codigo_area"];

        if (!$codigoArea){
            array_push($mensajes, "El código de area es requerido.");
        }

        $codigoAreaValido = preg_match_all($regNumbers,$codigoArea) >= 1;

        if ($codigoArea && !$codigoAreaValido){
            array_push($mensajes, "El código de área no es válido.");
        }

        $telefono = $datos["telefono"];

        if (!$telefono){
            array_push($mensajes, "El teléfono es requerido.");
        }

        $telefonoValido = preg_match_all($regNumbers,$telefono) >= 1;

        if ($telefono && !$telefonoValido){
            array_push($mensajes, "El teléfono no es válido.");
        }


        $tema = $datos["tema"];

        if (!$tema){
            array_push($mensajes, "El tema es requerido.");
        }


        $organismo = $datos["empresa"];

        if (!$organismo){
            array_push($mensajes, "El organismo/empresa es requerido.");
        }


        $mensaje = $datos["mensaje"];

        if (!$mensaje){
            array_push($mensajes, "El mensaje es requerido.");
        }


        return $mensajes;


    }


}
