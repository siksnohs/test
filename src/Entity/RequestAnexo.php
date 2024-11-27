<?php

namespace App\Entity;


class RequestAnexo
{
    private $seccion;
    private $idAnexo;
    private $nroAnexo;
    private $fecha;
    private $isSuplemento;

    public function __construct($seccion, $nroAnexo, $idAnexo, $fecha, $isSuplemento=null)
    {
        $this->setSeccion($seccion);
        $this->setIdAnexo($idAnexo);
        $this->setNroAnexo($nroAnexo);
        $this->setFecha($fecha);
        $this->setIsSuplemento($isSuplemento);
    }

    /**
     * @return mixed
     */
    public function getSeccion()
    {
        return $this->seccion;
    }

    /**
     * @param mixed $idAnexo
     */
    public function setSeccion($seccion)
    {
        $this->seccion = $seccion;
    }

    /**
     * @return mixed
     */
    public function getIdAnexo()
    {
        return $this->idAnexo;
    }

    /**
     * @param mixed $idAnexo
     */
    public function setIdAnexo($idAnexo)
    {
        $this->idAnexo = $idAnexo;
    }

    /**
     * @return mixed
     */
    public function getNroAnexo()
    {
        return $this->nroAnexo;
    }

    /**
     * @param mixed $nroAnexo
     */
    public function setNroAnexo($nroAnexo)
    {
        $this->nroAnexo = $nroAnexo;
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
        $json .= '"nombre_seccion": ' . '"' . (string)$this->getSeccion() . '"' . ',';

        if ($this->getIsSuplemento()) {
            $json .= '"es_suplemento": "1",';
        }

        $json .= '"id_anexo": ' . '"' . (string)$this->getIdAnexo() . '"' . ',';
        $json .= '"numero_anexo": ' . '"' . (string)$this->getNroAnexo() . '"' . ',';
        $json .= '"fecha_publicacion": ' . '"' .  $this->getFecha() . '"';
        $json .= '}';
        return $json;
    }

}