<?php

namespace App\Entity;


class RequestBusquedaRapida
{

    private $numeroPagina;
    private $cantidadPorPagina;
    private $texto;
    private $secciones;
    private $fecha;
    private $rubros;


    public function serializarJson(){

        $json = '{';
        $json .= '"cantidad_por_pagina": ' . (string)$this->getCantidadPorPagina() . ',';
        $json .= '"numero_pagina": ' . (string)$this->getNumeroPagina() . ',';
        $json .= '"texto":' . json_encode($this->getTexto()) . ',' ;
        $json .= '"secciones": ' . '[' . implode(",", $this->getSecciones()) . ']' . ',';
        $json .= '"fecha": ' . '"' . ($this->getFecha() != "" ? (string)($this->getFecha()) : "") . '"';

        $rubros = $this->getRubros();
        if ($rubros !== null && count($rubros) > 0){
            $json .= ',"rubro": ' . '"' . ($rubros[0] != "" ? (string)($rubros[0]) : "") . '"';
        }
        $json .= '}';
        return $json;
    }

    /**
     * @return mixed
     */
    public function getNumeroPagina()
    {
        return $this->numeroPagina;
    }

    /**
     * @param mixed $numeroPagina
     */
    public function setNumeroPagina($numeroPagina)
    {
        $this->numeroPagina = $numeroPagina;
    }

    /**
     * @return mixed
     */
    public function getCantidadPorPagina()
    {
        return $this->cantidadPorPagina;
    }

    /**
     * @param mixed $cantidadPorPagina
     */
    public function setCantidadPorPagina($cantidadPorPagina)
    {
        $this->cantidadPorPagina = $cantidadPorPagina;
    }

    /**
     * @return mixed
     */
    public function getTexto()
    {
        return $this->texto;
    }

    /**
     * @param mixed $texto
     */
    public function setTexto($texto)
    {
        $this->texto = $texto;
    }

    /**
     * @return mixed
     */
    public function getSecciones()
    {
        return $this->secciones;
    }

    /**
     * @param mixed $secciones
     */
    public function setSecciones($secciones)
    {
        if(is_array($secciones)){
            $this->secciones = $secciones;
        }else{
            $aux = array($secciones);
            $this->secciones = $aux;
        }
    }

    /**
     * @return mixed
     */
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * @param mixed $fecha
     */
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    /**
     * @return mixed
     */
    public function getRubros()
    {
        return $this->rubros;
    }

    /**
     * @param mixed $rubros
     */
    public function setRubros($rubros)
    {
        $this->rubros = $rubros;
    }






}