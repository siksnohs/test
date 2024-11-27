<?php

namespace App\Entity;


class RequestImagen
{
    private $seccion;
    private $nombreArchivo;
    private $fecha;

    public function __construct()
    {
    }

    /**
     * @return mixed
     */
    public function getSeccion()
    {
        return (int) $this->seccion;
    }

    /**
     * @param mixed $seccion
     */
    public function setSeccion($seccion)
    {
        $this->seccion = $seccion;
    }

    /**
     * @return mixed
     */
    public function getNombreArchivo()
    {
        return $this->nombreArchivo;
    }

    /**
     * @param mixed $nombreArchivo
     */
    public function setNombreArchivo($nombreArchivo)
    {
        $this->nombreArchivo = $nombreArchivo;
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



    public function serializarJson(){
        $json = '{';
        $json .= '"seccion": ' . '' . $this->getSeccion() . '' . ',';
        $json .= '"fecha_publicacion": ' . '"' . $this->getFecha()->format("Ymd") . '"' . ',';
        $json .= '"nombre_archivo": ' . '"' . (string)$this->getNombreArchivo() . '"';
        $json .= '}';
        return $json;
    }

}