<?php

namespace App\Entity;

class RequestPortadaSeccion
{

    private $cantidadItemsPorPagina;

    private $numeroPagina;

    private $fechaPublicacion;

    private $idRubro;

    /**
     * @return mixed
     */
    public function getCantidadItemsPorPagina()
    {
        return $this->cantidadItemsPorPagina;
    }

    /**
     * @param mixed $cantidadItemsPorPagina
     */
    public function setCantidadItemsPorPagina($cantidadItemsPorPagina)
    {
        $this->cantidadItemsPorPagina = $cantidadItemsPorPagina;
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
    public function getFechaPublicacion()
    {
        return $this->fechaPublicacion;
    }

    /**
     * @param mixed $fechaPublicacion
     */
    public function setFechaPublicacion($fechaPublicacion)
    {
        $this->fechaPublicacion = $fechaPublicacion;
    }

    /**
     * @return mixed
     */
    public function getIdRubro()
    {
        return $this->idRubro;
    }

    /**
     * @param mixed $idRubro
     */
    public function setIdRubro($idRubro)
    {
        $this->idRubro = $idRubro;
    }




    public function serializarJson(){
        $fecha=$this->getFechaPublicacion();
        if (is_a($fecha, 'DateTime')) {
           $fecha = $fecha->format('Ymd');
        }

        $json = '{';
        $json .= '"CantRegPorPagina": ' . (string)$this->getCantidadItemsPorPagina() . ',';
        $json .= '"NroPagina": ' . (string)$this->getNumeroPagina() . ',';
        $json .= '"FechaPublicacion": "' . $fecha . '",' ;
        $json .= '"IdRubro": ' . '"'.(string)$this->getIdRubro().'"' ;
        $json .= '}';
        return $json;
    }


}