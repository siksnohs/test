<?php

namespace App\Utils;


const ANIO_VALIDO_PRIMERA = 1893;
const ANIO_VALIDO_SEGUNDA = 1950;
const ANIO_VALIDO_TERCERA = 1967;
const ANIO_VALIDO_CUARTA = 2014;
const MES_VALIDO_CUARTA = 3;

class CommonFunctions
{

    static public function getNombreSeccionFromNro($nroSeccion){
        $nombreSecciones = array(1=>"primera", 2=>"segunda", 3=>"tercera", 4=>"cuarta");
        return $nombreSecciones[$nroSeccion];
    }

    static public function getNumeroSeccionFromNombre($nombreSeccion){
        $numeroSecciones = array("primera"=>1, "segunda"=>2, "tercera"=>3, "cuarta"=>4, "all" => [1, 2, 3]);
        return $numeroSecciones[$nombreSeccion];
    }

    static public function logErrorException($e, $monolog, $customMsg='')
    {
        $error = "Message: " . $e->getMessage() . " File: " . $e->getFile() . " Line: " . $e->getLine() . " Code: " . $e->getCode() . " StackTrace: " . $e->getTraceAsString();
        if ($customMsg !== '') {
            $error = $customMsg . ' -> ' . $error;
        }
        $monolog->error($error);
    }

    static public function formatToLongDate($date){
        $monthNames = array('01'=>'Enero','02'=>'Febrero','03'=>'Marzo','04'=>'Abril','05'=>'Mayo','06'=>'Junio','07'=>'Julio','08'=>'Agosto','09'=>'Septiembre','10'=>'Octubre','11'=>'Noviembre','12'=>'Diciembre');
        $monthNumber = date_format($date,'m');
        $monthName = $monthNames[$monthNumber];
        $day = date_format($date,'d');
        if ($day[0] == '0'){
            $day = str_replace('0','',$day);
        }
        return $day.' de '.$monthName.' de '.date_format($date,'Y');

    }

    static public function obtenerNumeroSeccion($nombreSeccion){
        $nombreToNumeroSeccion = array('primera'=> 1, 'segunda'=> 2, 'tercera'=> 3, 'cuarta'=> 4);
        return $nombreToNumeroSeccion[$nombreSeccion];

    }

    static public function validateDate($date, $format = 'Ymd')
    {
        $d = \DateTime::createFromFormat($format, $date);
        // The Y ( 4 digits year ) returns TRUE for any integer with any number of digits so changing the comparison from == to === fixes the issue.
        return $d && $d->format($format) === $date;
    }

    static public function obtenerYactualizarFechasPublicacion($calendarioService, $session, $anio, $nombreSeccion){
        $nombreKeyFechasPub = 'fechas_publicacion_'.$nombreSeccion;
        $existeFechasPub = $session->has($nombreKeyFechasPub);
        if ($existeFechasPub && $session->get($nombreKeyFechasPub) != null){
            $diasHabilitados = $session->get($nombreKeyFechasPub);
        }
        else{
            $diasHabilitados = $calendarioService->getFechasPublicaciones($anio,$nombreSeccion);
            $session->set($nombreKeyFechasPub,$diasHabilitados);
        }
        return $diasHabilitados;
    }


    static public function obtenerYactualizarFechaUltimaEdicion($portadaService, $session, $nombreSeccion){
        $nombreKeyFechaUltEdicion = 'fecha_ultima_edicion_'.$nombreSeccion;
        $existeFechaUltEdicion = $session->has($nombreKeyFechaUltEdicion);
        if ($existeFechaUltEdicion && $session->get($nombreKeyFechaUltEdicion) != null){
            $fechaUltimaEdicion = $session->get($nombreKeyFechaUltEdicion);
        }
        else{
            $fechaUltimaEdicion = $portadaService->getFechaUltimaEdicion($nombreSeccion);
            $session->set($nombreKeyFechaUltEdicion,$fechaUltimaEdicion);
        }
        return $fechaUltimaEdicion;
    }

    static public function obtenerAnioFechaSeleccionada($session){
        if ($session->has("fecha_edicion")){
            $fechaSeleccionada = $session->get("fecha_edicion");
            return $fechaSeleccionada->format('Y');
        }
        //No deberia pasar, deberia tener valor la session
        return (new \DateTime())->format('Y');
    }


    static public function getFechaEdicion($session, $fechaUltimaEdicion){
        $noHayFechaEdicion = !$session->has("fecha_edicion") || $session->get("fecha_edicion") == null;
        if ($noHayFechaEdicion){
            if ($fechaUltimaEdicion == null){
                return new \DateTime();
            }
            return $fechaUltimaEdicion;
        }
        $fechaEdicion = $session->get("fecha_edicion");
        if ($fechaEdicion > $fechaUltimaEdicion){
            return $fechaUltimaEdicion;
        }
        return $fechaEdicion;

    }


    static public function getFechaEdicionSinFormato($session){
        $fechaEdicion = $session->get('fecha_edicion');
        $fechaEdicionYMD = '';
        if ($fechaEdicion != null){
            $fechaEdicionYMD = $fechaEdicion->format('Ymd');
        }
        return $fechaEdicionYMD;
    }


    static public function getTituloSeccion($seccion){
        switch($seccion){
            case 1:
                $tituloSeccion='Legislación y Avisos Oficiales';
                $subtituloSeccion='Primera sección';
                $nombreSeccion='primera';
                break;
            case 2:
                $tituloSeccion='Sociedades y Avisos Judiciales';
                $subtituloSeccion='Segunda sección';
                $nombreSeccion='segunda';
                break;
            case 3:
                $tituloSeccion='Contrataciones';
                $subtituloSeccion='Tercera sección';
                $nombreSeccion='tercera';
                break;
            case 4:
                $tituloSeccion='Dominios de Internet';
                $subtituloSeccion='Cuarta sección';
                $nombreSeccion='cuarta';
                break;
            default:
                $tituloSeccion='';
                $subtituloSeccion='';
                $nombreSeccion='';
                break;
        }
        return array('nombreSeccion'=>$nombreSeccion ,'tituloSeccion'=>$tituloSeccion, 'subtituloSeccion'=>$subtituloSeccion);
    }


    static public function getClientIp()
    {
        if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
        {
            $ip=$_SERVER['HTTP_CLIENT_IP'];
        }
        elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
        {
            $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
        }
        else
        {
            $ip=$_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }


    static public function validateCaptcha($captcha, $urlGoogleVerify, $secretKeyCaptcha){
        $validate = true;

        //Validar captcha
        $dataCaptcha = array(
            'secret' => $secretKeyCaptcha,
            'response' => $captcha
        );


        $options = array('http' => array(
            'method' => 'POST',
            'header' =>
                "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => http_build_query($dataCaptcha)
        ));


        $context  = stream_context_create($options);
        $verify = file_get_contents($urlGoogleVerify, false, $context);
        $captcha_success = json_decode($verify);

        if (!$captcha_success->success) {
            $validate = false;
        }

        return $validate;
    }
}