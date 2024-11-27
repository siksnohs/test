<?php

namespace App\Entity;


class RequestBusquedaAvanzada
{
    private $numeroPagina;
    private $cantidadPorPagina;
    // primera
    private $nroNorma;
    private $anioNorma;
    // segunda
    private $denominacion;
    // tercera
    private $tipoContratacion;
    private $nroContratacion;
    private $anioContratacion;
    // general
    private $rubros;
    private $texto;
    private $secciones;
    private $fechaDesde;
    private $fechaHasta;
    private $todasLasPalabras;

    private $comienzaDenominacion;

    // true -> Denominacion-Rubro
    // false -> Rubro-Denominacion
    private $ordenamientoSegunda = true;
//    private $sorting;


    private $SERIALIZADO_POR_SECCION = array(1=>"serializarJsonPrimera", 2=>"serializarJsonSegunda", 3=>"serializarJsonTercera");

    public function serializarJson(){
        $json = '{';
        $json .= '"cantidad_por_pagina": ' . (string)$this->getCantidadPorPagina() . ',';
        $json .= '"numero_pagina": ' . (string)$this->getNumeroPagina() . ',';
        $json .= '"texto":' . json_encode($this->getTexto()) . ',' ;
        $todasLasPalabras = ($this->getTodasLasPalabras()) ? 'true' : 'false';
        $json .= '"todas_las_palabras": ' . $todasLasPalabras . ',';
        $json .= '"secciones": ' . '[' . implode(",", $this->getSecciones()) . ']' . ',';
        if(count($this->getSecciones())===1){
            if ($this->getRubros() != null && count($this->getRubros()) > 0){
                $json .= '"rubros": ' . '["' . implode('","', $this->getRubros()) . '"]' . ',';
            }
            $secciones = $this->getSecciones();
            $json = $this->{$this->SERIALIZADO_POR_SECCION[$secciones[0]]}($json);
        }
        $json .= '"fecha_desde": ' . '"' . ($this->getFechaDesde() != "" ? (string)$this->convertirFecha($this->getFechaDesde()) : "") . '"' . ',';
        $json .= '"fecha_hasta": ' . '"' . ($this->getFechaHasta() != "" ? (string)$this->convertirFecha($this->getFechaHasta()) : "") . '"';
//        $json .= '"sorting": ' . '"' . (string)$this->getSorting() . '"';
        $json .= '}';
        return $json;
    }

    public function convertirFecha($fecha){
        $fechaparss=explode("/",$fecha);
        return $fechaparss[2].$fechaparss[1].$fechaparss[0];
    }

    public function serializarJsonPrimera($json){
        $json .= '"numero_norma": '  . json_encode((string)$this->getNroNorma())  . ',';
        $json .= '"anio_norma": ' . '"' . (string)$this->getAnioNorma() . '"'. ',';
        return $json;
    }

    public function serializarJsonSegunda($json){
        $denominacionEscapedada = str_replace('"','\"',$this->getDenominacion());
        $json .= '"denominacion": ' . json_encode((string)$denominacionEscapedada) . ',';
        $comienzaDenominacion = ($this->getComienzaDenominacion()) ? 'true' : 'false';
        $json .= '"comienza_denominacion": ' . $comienzaDenominacion . ',';
        $ordenamientoSegunda = $this->getOrdenamientoSegunda() ? 'true' : 'false';
        $json .= '"ordenamiento": ' . $ordenamientoSegunda . ',';
        return $json;
    }

    public function serializarJsonTercera($json){
        $json .= '"tipo_contratacion": ' . json_encode((string)$this->getTipoContratacion()) . ',';
        $json .= '"numero_contratacion": ' . json_encode((string)$this->getNroContratacion()) . ',';
        $json .= '"anio_contratacion": ' . json_encode((string)$this->getAnioContratacion()) . ',';
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
        $this->secciones = $secciones;
    }

    /**
     * @return mixed
     */
    public function getFechaDesde()
    {
        return $this->fechaDesde;
    }

    /**
     * @param mixed $fechaDesde
     */
    public function setFechaDesde($fechaDesde)
    {
        $this->fechaDesde = $fechaDesde;
    }

    /**
     * @return mixed
     */
    public function getFechaHasta()
    {
        return $this->fechaHasta;
    }

    /**
     * @param mixed $fechaHasta
     */
    public function setFechaHasta($fechaHasta)
    {
        $this->fechaHasta = $fechaHasta;
    }

    /**
     * @return mixed
     */
    public function getSorting()
    {
        return $this->sorting;
    }

    /**
     * @param mixed $sorting
     */
    public function setSorting($sorting)
    {
        $this->sorting = $sorting;
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

    /**
     * @return mixed
     */
    public function getNroNorma()
    {
        return $this->nroNorma;
    }

    /**
     * @param mixed $nroNorma
     */
    public function setNroNorma($nroNorma)
    {
        $this->nroNorma = $nroNorma;
    }

    /**
     * @return mixed
     */
    public function getAnioNorma()
    {
        return $this->anioNorma;
    }

    /**
     * @param mixed $anioNorma
     */
    public function setAnioNorma($anioNorma)
    {
        $this->anioNorma = $anioNorma;
    }

    /**
     * @return mixed
     */
    public function getDenominacion()
    {
        return $this->denominacion;
    }

    /**
     * @param mixed $denominacion
     */
    public function setDenominacion($denominacion)
    {
        $this->denominacion = $denominacion;
    }



    /**
     * @return mixed
     */
    public function getTipoContratacion()
    {
        return $this->tipoContratacion;
    }

    /**
     * @param mixed $tipoContratacion
     */
    public function setTipoContratacion($tipoContratacion)
    {
        $this->tipoContratacion = $tipoContratacion;
    }

    /**
     * @return mixed
     */
    public function getNroContratacion()
    {
        return $this->nroContratacion;
    }

    /**
     * @param mixed $nroContratacion
     */
    public function setNroContratacion($nroContratacion)
    {
        $this->nroContratacion = $nroContratacion;
    }

    /**
     * @return mixed
     */
    public function getAnioContratacion()
    {
        return $this->anioContratacion;
    }

    /**
     * @param mixed $anioContratacion
     */
    public function setAnioContratacion($anioContratacion)
    {
        $this->anioContratacion = $anioContratacion;
    }

    /**
     * @return mixed
     */
    public function getTodasLasPalabras()
    {
        return $this->todasLasPalabras;
    }

    /**
     * @param mixed $todasLasPalabras
     */
    public function setTodasLasPalabras($todasLasPalabras)
    {
        $this->todasLasPalabras = $todasLasPalabras;
    }

    /**
     * @return mixed
     */
    public function getComienzaDenominacion()
    {
        return $this->comienzaDenominacion;
    }

    /**
     * @param mixed $comienzaDenominacion
     */
    public function setComienzaDenominacion($comienzaDenominacion)
    {
        $this->comienzaDenominacion = $comienzaDenominacion;
    }

    /**
     * @return mixed
     */
    public function getOrdenamientoSegunda()
    {
        return $this->ordenamientoSegunda;
    }

    /**
     * @param mixed $ordenamientoSegunda
     */
    public function setOrdenamientoSegunda($ordenamientoSegunda)
    {
        $this->ordenamientoSegunda = $ordenamientoSegunda;
    }

}