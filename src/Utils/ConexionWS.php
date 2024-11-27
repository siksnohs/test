<?php

namespace App\Utils;


use Symfony\Component\Config\Definition\Exception\Exception;
use App\Utils\CommonFunctions;

class ConexionWS
{
    public static function llamarServicio($url, $method = "GET", $getParams = array(), $dataJson = null)
    {

        if ($method == "GET") {
            if (count($getParams) > 0) {
                $url = $url . '?';
                foreach ($getParams as $key => $value) {
                    $url = $url . $key . '=' . $value . '&';
                }
                $url = substr($url, 0, strlen($url) - 1);
            }
        }

        $clientIp = CommonFunctions::getClientIp();
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        $httpHeader = array('Content-Type: application/json', 'X-FORWARDED-FOR: '.$clientIp);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $httpHeader);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        if ($method == "POST") {
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $dataJson);
        }

        $response = curl_exec($ch);
        curl_close($ch);

        $responseArray = json_decode($response, true);
        if ($responseArray == null || (array_key_exists("status", $responseArray) && $responseArray["status"] != 200)){
            throw new Exception("Errores en llamada de servicio: ". join(",",$responseArray["errors"]));
        }

        return $responseArray;
    }
}