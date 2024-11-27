<?php

namespace App\Entity;

class RequestLinkQr
{
    private $linkQr;

    public function __construct($linkQr)
    {
        $this->setLinkQr($linkQr);
    }

    /**
     * @return mixed
     */
    public function getLinkQr()
    {
        return $this->linkQr;
    }

    /**
     * @param mixed $linkQr
     */
    public function setLinkQr($linkQr)
    {
        $this->linkQr = $linkQr;
    }

    public function serializarJson(){
        $json = '{';
        $json .= '"link_qr": ' . '"' . (string)$this->getLinkQr() . '"';
        $json .= '}';
        return $json;
    }
}