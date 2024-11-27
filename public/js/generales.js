anioInicioBoletin = 1893;
fechaActual = new Date();
anioActual = fechaActual.getFullYear();
fechaInicioCalendario = "01-07-1893";

function setDefault(variable,valor){
    return typeof variable !== 'undefined' ? variable : valor;
}


function padMeses(s) { return (s < 10) ? '0' + s : s; }

//Funcion para validar una fecha, el formato de la misma es DD/MM/YYYY
function validarFecha(dateString){
    var date=convertirADate(dateString);
    var fechaSeparada = dateString.split("/")
    if(!date)
        return false;

    return (Boolean(+date) && date.getDate() === Number(fechaSeparada[0]))
}

// formato de la fecha DD/MM/YYYY
function convertirADate(fechaString)
{
    //var date = new Date(dateString.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
    var fechaSeparada = fechaString.split("/");
    //Chequea que tenga dia, mes y año
    if(fechaSeparada.length<3){
        fechaSeparada = fechaString.split("-");
        if(fechaSeparada.length<3)
            return false;
    }

    //Chequea que el año tenga 4 numeros
    if(fechaSeparada[2].length<4)
        return false;

    return new Date(fechaSeparada[2],Number(fechaSeparada[1])-1,fechaSeparada[0])
}

function initFechas(idInput){
    $('#'+idInput).datepicker({
        format: 'dd/mm/yyyy',
        endDate: "0d",
        language: "es",
    });
}

function showFlashMessage(msg, modal){
    modal = setDefault(modal, false);
    idDiv = '#div_flash_js';
    idDivMsg = '#div_flash_js_msg';
    if (modal){
        idDiv = '#div_flash_js_modal';
        idDivMsg = '#div_flash_js_msg_modal';
    }
    var div = $(idDiv);
    $(idDivMsg).html(msg);
    div.show();
    div.focus();
    return div;
}

function showFlashWarning(msg, modal) {
    modal = setDefault(modal, false);
    div = showFlashMessage(msg, modal);
    div.addClass("bg-warning");
}

function showFlashError(msg, modal) {
    modal = setDefault(modal, false);
    div = showFlashMessage(msg, modal);
    div.addClass("bg-danger");
}
function showFlashSucced(msg, modal) {
    modal = setDefault(modal, false);
    div = showFlashMessage(msg, modal);
    div.addClass("bg-success");
}

function hideFlashMessage(modal) {
    modal = setDefault(modal, false);
    idDiv = '#div_flash_js';
    idDivMsg = '#div_flash_js_msg';
    if (modal){
        idDiv = '#div_flash_js_modal';
        idDivMsg = '#div_flash_js_msg_modal';
    }
    $(idDiv).hide();
    $(idDivMsg).html("");
}


function hideMessages() {
    $('.alerts-warning').each(function (index) {
        $(this).html("");
        $(this).hide();
    });
    $('.alerts-danger').each(function (index) {
        $(this).html("");
        $(this).hide();
    });
    $('.alerts-success').each(function (index) {
        $(this).html("");
        $(this).hide();
    });
}

function joinMessages(msgAnterior, msgNuevo){
    delimiterUnion = msgAnterior !== "" ? "<br>" : "";
    return msgAnterior + delimiterUnion + msgNuevo;
}

function removeCssError(obj,span) {
    obj.css("border", "solid 1px #ccc");
    span.text("");
    obj.focus( function() {
        obj.css("box-shadow", "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)");
    });
    obj.focusout( function() {
        obj.css("box-shadow", "");
    });
}

function addCssError(obj, span, msg) {
    msg=setDefault(msg,"Debe completar este campo");
    obj.css("border", "1px solid #d9534f");
    span.html(msg);
    obj.focus( function() {
        obj.css("box-shadow", "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(217, 83, 79, .6)");
    });
    obj.focusout( function() {
        obj.css("box-shadow", "");
        if(obj.length > 0){
            obj.css("border", "solid 1px #ccc");
            span.text("");
            obj.focus( function() {
                obj.css("box-shadow", "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)");
            });
            obj.focusout( function() {
                obj.css("box-shadow", "");
            });
        }
    });
    obj.change( function() {
        span.text("");
    });
}


var regNumeros = /^[0-9]+$/i;
var regNumerosMiles = /^[0-9\.]+$/i;
var regLetras = /^[a-z]+$/i;
var regCaracteresEspecialesPermitidos = /^[\&\.\,\-\_]+/i;

function exceptuarTecla(codigo){
    // Backspace, delete, izquierda, derecha
    codigosExcepciones = [8,9,32,37,38,39,40];
    return codigosExcepciones.indexOf(codigo) != -1;
}

function isNumberOrLetter(evt, caracteresEspecialesPermitidos) {
    if (exceptuarTecla(evt.keyCode)){
        return true;
    }

    if (caracteresEspecialesPermitidos) {
        return (regNumeros.test(evt.key) || regLetras.test(evt.key) || regCaracteresEspecialesPermitidos.test(evt.key));
    }
    return (regNumeros.test(evt.key) || regLetras.test(evt.key));
}

function isNumber(evt) {
    if (exceptuarTecla(evt.keyCode)){
        return true;
    }

    if (regNumeros.test(evt.key)){
        return true;
    }
    return false;
}

function isNumberMiles(evt) {
    if (exceptuarTecla(evt.keyCode)){
        return true;
    }

    if (regNumerosMiles.test(evt.key)){
        return true;
    }
    return false;
}

function isLetter(evt) {
    if (exceptuarTecla(evt.keyCode) || evt.key == " "){
        return true;
    }

    if (regNumeros.test(evt.key)){
        return false;
    }

    if (regLetras.test(evt.key) || regCaracteresEspecialesPermitidos.test(evt.key)){
        return true;
    }
    return false;
}

function backToTop() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
}

function cleanActiveOfLateralMenuElement() {
    $('#itemLateralMenuPrimera').removeClass('active');
    $('#itemLateralMenuSegunda').removeClass('active');
    $('#itemLateralMenuTercera').removeClass('active');
    $('#itemLateralMenuCuarta').removeClass('active');
}


function getScrollPosition(){
    scrollPosition = 'pageYOffset' in window ? window.pageYOffset :  document.body.scrollTop;
    return scrollPosition;
}

function closeModal(modalId){
    $('#'+modalId+'').modal('hide');
}

function scrollFunc(elementId){
    document.querySelector('#'+elementId+'').scrollIntoView({
        behavior: 'smooth'
    });
}

function collapseMenu(elementId) {
    $('#'+elementId+'')
        .on('shown.bs.collapse', function() {
            $(this)
                .parent()
                .find(".fa-angle-down")
                .removeClass("fa-angle-down")
                .addClass("fa-angle-up");
        })
        .on('hidden.bs.collapse', function() {
            $(this)
                .parent()
                .find(".fa-angle-up")
                .removeClass("fa-angle-up")
                .addClass("fa-angle-down");
        });
}

offsetsTexto = {};
fontSizeMinimos = {};
fontSizeMaximos = {};

function calcularOffsetsMinYMaxTexto(idContenedor, porcentajeAumDism, cantidadAumDism){
    $(idContenedor).find("h1, h2, h3, h4, h5 h6, p, div, span, th, td").each(function(){
        element = $(this);
        fontSizeOriginal = parseFloat(element.css('font-size'));
        tagName = element[0].tagName;
        offsetsTexto[tagName] = fontSizeOriginal * porcentajeAumDism;
        fontSizeMinimos[tagName] = fontSizeOriginal;
        fontSizeMaximos[tagName] = fontSizeOriginal + (fontSizeOriginal * porcentajeAumDism * cantidadAumDism);
    });
}

function aumentarTexto(idContenedor) {
    $(idContenedor).find("h1, h2, h3, h4, h5 h6, p, div, span, th, td").each(function(){
       element = $(this);
       fontSizeAnterior = parseFloat(element.css('font-size'));
       tagName = element[0].tagName;
       if (fontSizeAnterior >= fontSizeMaximos[tagName]){
           return;
       }
       fontSizeNuevo = fontSizeAnterior + offsetsTexto[tagName];
       element.css("fontSize", fontSizeNuevo);
    });
}


function disminuirTexto(idContenedor) {
    $(idContenedor).find("h1, h2, h3, h4, h5 h6, p, div, span, th, td").each(function(){
        element = $(this);
        fontSizeAnterior = parseFloat(element.css('font-size'));
        tagName = element[0].tagName;
        if (fontSizeAnterior <= fontSizeMinimos[tagName]){
            return;
        }
        fontSizeNuevo = fontSizeAnterior - offsetsTexto[tagName];
        element.css("fontSize", fontSizeNuevo);
    });
}

function esBrowserMobile() {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}

function formatDateToDMY(date) {
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();


    return day + '-' + formatMonthOrDate(monthNames[monthIndex] + 1) + '-' + year;
}

function formatDateToYMD(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();


    return year + "" + formatMonthOrDate(month) + "" + formatMonthOrDate(day) ;
}


var monthNames = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
];

function formatMonthOrDate(monthOrDate) {
    monthOrDate = parseInt(monthOrDate.toString());
    return monthOrDate < 10 ? '0' + monthOrDate : monthOrDate;
}

function convertMonthNameToNumber(monthName) {
    return monthNames.indexOf(monthName) + 1;
}

function parseDateYMDToDMY(fechaYMD) {
    anioFecha = fechaYMD.substring(0, 4);
    mesFecha = fechaYMD.substring(4, 6);
    diaFecha = fechaYMD.substring(6, 8);
    fechaDMY = diaFecha + '-' + mesFecha + '-' + anioFecha;
    return fechaDMY;
}

function objectToArray(object){
    var result = Object.keys(object).map(function(key) {
        return object[key];
    });
    return result;
}

function validarUri(arrayUri,uri){

    validHash = false;

    var strUri = uri.split("/");
    checkUri = strUri[0];
    validUrlCount = arrayUri.length;
    for(var i=0;i<validUrlCount;i++){

        if(arrayUri.indexOf(checkUri) !== -1) {
            validHash = true;
        }

    }

    if(validHash){
        return uri;
    }

    return validHash;
}
