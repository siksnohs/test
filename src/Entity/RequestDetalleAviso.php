<?php

namespace App\Entity;

class RequestDetalleAviso
{
    private $idAviso;
    private $seccion;
    private $fecha;
    private $isSuplemento;
    
    public function __construct($idAviso, $seccion, $fecha, $isSuplemento=null)
    {
        $this->setIdAviso($idAviso);
        $this->setSeccion($seccion);
        $this->setFecha($fecha);
        $this->setIsSuplemento($isSuplemento);
    }
    /**
     * @return mixed
     */
    public function getIdAviso()
    {
        return $this->idAviso;
    }
    /**
     * @param mixed $idAviso
     */
    public function setIdAviso($idAviso)
    {
        $this->idAviso = $idAviso;
    }
    /**
     * @return mixed
     */
    public function getSeccion()
    {
        return $this->seccion;
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
    public function getIsSuplemento()
    {
        return $this->isSuplemento;
    }

    /**
     * @param mixed $isSuplemento
     */
    public function setIsSuplemento($isSuplemento)
    {
        $this->isSuplemento = $isSuplemento;
    }
    
    
    public function serializarJson(){
        $json = '{';
        $json .= '"id_tramite": ' . '"' . (string)$this->getIdAviso() . '"' . ',';

        if ($this->getIsSuplemento()) {
            $json .= '"es_suplemento": "1",';
        }
        
        $json .= '"nombre_seccion": ' . '"' . (string)$this->getSeccion() . '"' . ',';
        $json .= '"fecha_contexto": ' . '"' .  $this->getFecha() . '"';
        $json .= '}';
        return $json;
    }
}