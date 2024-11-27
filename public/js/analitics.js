function sendEstaticaEvent(action, label){
    ga('send', 'event', 'Estatica', action, label);
}

function sendPDFEvent(action, label){
    ga('send', 'event', 'PDF', action, label);
}

function sendSectionEvent(action, label){
    ga('send', 'event', 'Seccion', action, label);
}

function sendDetalleEvent(action, label){
    ga('send', 'event', 'Detalle', action, label);
}

function sendContactoEvent(action, label){
    ga('send', 'event', 'Contacto', action, label);
}

function sendShareEvent(action, label){
    ga('send', 'event', 'Compartir', action, label);
}

function sendBtnBusquedaRapidaEvent(action,label){
    ga('send', 'event', 'Busqueda Rapida', action, label);
}

function sendBtnBusquedaAvanzadaEvent(action,label){
    ga('send', 'event', 'Busqueda Avanzada', action, label);
}

function sendBtnHistorialSocComercialesEvent(action,label){
    ga('send', 'event', 'Historial de sociedades comerciales', action, label);
}

function sendBtnPublicarAvisoEvent(action,label){
    ga('send', 'event', 'Publicar aviso', action, label);
}

function sendExternalLinkEvent(event) {
    ga('send', 'event', {
        eventCategory: 'Link Externo',
        eventAction: 'Click',
        eventLabel: event.target.href,
        transport: 'beacon'
    });
}