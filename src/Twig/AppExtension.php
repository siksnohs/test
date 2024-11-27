<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return array(
            new TwigFunction('get_url_suplemento', array($this, 'getUrlSuplemento'))
        );
    }

    public function getUrlSuplemento($fecha, $nombreSuplemento)
    {
        $baseUrl = getenv('base_url_suplementos');
        $anio = $fecha->format('Y');
        $mes = $fecha->format('m');
        $dia = $fecha->format('d');
        $dir = $anio . '/' . $mes . '/' . $dia . '/';

        return $baseUrl . $dir . $nombreSuplemento;
    }
}
