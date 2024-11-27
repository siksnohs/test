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

function parseDateYMDToDMY(fechaYMD){
    anioFecha = fechaYMD.substring(0,4);
    mesFecha = fechaYMD.substring(4,6);
    diaFecha = fechaYMD.substring(6,8);
    fechaDMY = diaFecha + '-' + mesFecha + '-' + anioFecha;
    return fechaDMY;
}


function changePreviousAndNextButtonCalendar(idCalendario) {
    $(idCalendario + ' th').each(function () {
        $(this).addClass('puntero');
        if ($(this).hasClass('prev')) {
            $(this)[0].innerHTML = '<i class="glyphicon glyphicon-chevron-left"></i>'
        }
        if ($(this).hasClass('next')) {
            $(this)[0].innerHTML = '<i class="glyphicon glyphicon-chevron-right"></i>'
        }
    })
}

function onChangeDate(e) {
    $('.day').on('click', onDayClick(e));
}

function formatFechaCalendario(datetime) {
    //Para que funcione en Chrome
    date = new Date(datetime);
    date.setMinutes(date.getMinutes() + 480);
    return date.getFullYear().toString() + formatMonthOrDate((date.getMonth() + 1)) + formatMonthOrDate(date.getDate());
}

function fechaEstaHabilitada(diasHabilitados, datetime) {
    fecha = formatFechaCalendario(datetime);
    return diasHabilitados.indexOf(fecha) > -1;
}

function fechaEstaHabilitadaBusquedaAvanzada(diasHabilitados, date) {
    fecha = date.getFullYear().toString() + formatMonthOrDate((date.getMonth() + 1)) + formatMonthOrDate(date.getDate());
    // diasHabilitados = objectToArray(diasHabilitados);
    if ($.inArray(fecha, diasHabilitados) == -1 && !$.isEmptyObject(diasHabilitados) ){
        return false;
    }

    if (!(date > new Date)){
        return true;

    } else {
        return false;
    }
}

function onDayClick(e) {


    //Para que funcione en Chrome
    var date = new Date(e.date);
    diaSeleccionado = date;
    date.setMinutes(date.getMinutes() + 480);
    day = date.getDate();
    monthNumber = date.getMonth() + 1;
    monthName = monthNames[monthNumber - 1];
    year = date.getFullYear();

    fechaSeleccionada = formatMonthOrDate(day) + '-' + formatMonthOrDate(monthNumber) + '-' + year;

    fechaSeleccionadaYMD =  year + '' + formatMonthOrDate(monthNumber) + '' + formatMonthOrDate(day);
    anioAnteriorPortada = parseInt(year);
    url = urlActualizarFechaEdicion + "/" + fechaSeleccionada;

    if (producirRecarga !== '1') {
        $('#loader').show();
        $('.fecha-ultima-edicion b')[0].innerHTML = day + " de " + monthName + " del " + year.toString();
    }

    $.ajax({
        url: url, success: function (result) {
            setTimeout(function(){
                if (producirRecarga === '1') {
                    window.location.href = urlPortadaSeccion;
                }else{
                    $('#loader').hide();
                }
            },500);
        }, async: false
    });

}

function actualizarDiasHabilitadosBusqueda(idCalendario, anio, fechaDesde) {
    fechaDesde = setDefault(fechaDesde, true);
    divLoading = fechaDesde ? "#cargandoFechaDesde" : "#cargandoFechaHasta";
    $(divLoading).show();
    urlE = urlGetDiasHabilitadosBusqueda + "/" + anio;
    $.ajax({
        url: urlE, success: function (result) {
            if (result != null && result !== "" && result !== "null") {
                diasHabilitadosBusqAvanzada[anio] = objectToArray(JSON.parse(result));
            }
            $(divLoading).hide();
        }, error: function () {
            diasHabilitadosBusqAvanzada[anio] = [];
            $(divLoading).hide();
        },
        async: false
    });
}

function llamadaAjaxAbortada(xhr) {
    return !xhr.getAllResponseHeaders();
}

var ajaxCall = null;

function actualizarDiasHabilitadosPortada(idCalendario, anio) {
    urlE = urlGetDiasHabilitadosPorAnio + "/" + anio + "/" + nombreSeccionPortada;
    if (ajaxCall != null){
        ajaxCall.abort();
    }
    ajaxCall = $.ajax({
        url: urlE, success: function (result) {
            if (result != null && result !== "" && result !== "null") {
                diasHabilitadosPortadaSuplemento = JSON.parse(result.replace(/&quot;/g, '"'));
                diasHabilitadosPortada = diasHabilitadosPortadaSuplemento['fechas'];
                cantidadDiasHabilitados = diasHabilitadosPortada.length;
                if (cantidadDiasHabilitados > 0) {
                    ultimaFechaHabilitada = diasHabilitadosPortada[cantidadDiasHabilitados - 1];
                    actualizarEndDateCalendario(ultimaFechaHabilitada);
                    fechaUltimaEdicion = ultimaFechaHabilitada;
                }
            }
            mes = convertMonthNameToNumber($(idCalendario+" .datepicker-days th.datepicker-switch")[0].innerHTML.split(' ')[0]);
            actualizarCalendario(diasHabilitadosPortada, idCalendario, formatMonthOrDate(mes), anio);
            ajaxCall = null;
        }, error: function (jqXHR, textStatus, errorThrown) {
            if(!llamadaAjaxAbortada(jqXHR)){
                diasHabilitadosPortada = [];
                actualizarCalendario(diasHabilitadosPortada, idCalendario, null, null);
            }
        }
    });
}


function actualizarEndDateCalendario(fechaYMD) {
    endDateSeteado = fechaUltimaEdicionPortada;
    if (fechaYMD != "" && endDateSeteado != "") {
        if (parseInt(fechaYMD) >= parseInt(endDateSeteado)) {
            endDateNuevo = parseDateYMDToDMY(fechaYMD);
            $('#datepicker').datepicker('option', 'endDate', endDateNuevo);
        }
    }
}

function onChangeMonthPortada(idCalendario, cambioDeAnio) {
    mesAnio = $(idCalendario + " .datepicker-days th.datepicker-switch")[0].innerHTML.split(' ');
    anioNuevo = parseInt(mesAnio[mesAnio.length - 1]);
    if (cambioDeAnio === false && buttonClickedPortada != null) {
        anioNuevo = obtenerAnioNuevo(idCalendario, buttonClickedPortada === "prev");
    }
    if (anioAnteriorPortada !== anioNuevo) {
        actualizarDiasHabilitadosPortada(idCalendario, anioNuevo);
        anioAnteriorPortada = anioNuevo;
    }
    buttonClickedPortada = null;
}

function onChangeMonthBusqueda(buttonClicked, anioAnteriorBusqueda, idCalendario, fechaDesde, cambioAnio) {
    fechaDesde = setDefault(fechaDesde, true);
    cambioAnio = setDefault(cambioAnio, false);
    mesAnio = $(idCalendario + " .datepicker-days th.datepicker-switch")[0].innerHTML.split(' ');
    anioNuevo = parseInt(mesAnio[mesAnio.length - 1]);
    if (buttonClicked != null) {
        if (cambioAnio){
            if (buttonClicked === "prev"){
                anioNuevo -= 1;
            }
            else{
                anioNuevo +=1;
            }
        }
        else{
            anioNuevo = obtenerAnioNuevo(idCalendario, buttonClicked === "prev");
        }
    }
    existenFechasParaAnio = !$.isEmptyObject(diasHabilitadosBusqAvanzada[anioNuevo]);
    if (anioAnteriorBusqueda !== anioNuevo && !existenFechasParaAnio) {
        actualizarDiasHabilitadosBusqueda(idCalendario, anioNuevo, fechaDesde);
        fechaDesde === true ? anioAnteriorBusquedaDesde = anioNuevo : anioAnteriorBusquedaHasta = anioNuevo;
    }
    fechaDesde === true ? buttonClickedFechaDesde = null : buttonClickedFechaHasta = null;
}

function obtenerAnioNuevo(idCalendario, prev) {
    mes = convertMonthNameToNumber($(idCalendario + " .datepicker-days th.datepicker-switch")[0].innerHTML.split(' ')[0]);
    anioNuevo = parseInt($(idCalendario + " .datepicker-days th.datepicker-switch")[0].innerHTML.split(' ')[1]);
    if (prev) {
        mes = mes === 1 ? 12 : (mes - 1);
        if (mes === 12) {
            anioNuevo -= 1;
        }
    }
    else {
        mes = mes === 12 ? 1 : (mes + 1);
        if (mes === 1) {
            anioNuevo += 1;
        }
    }
    return anioNuevo;
}

function actualizarCalendario(diasHabilitados, idCalendario, mes, anio) {
    if (diasHabilitados != null && diasHabilitados.length === 0) {
        $(idCalendario + " .datepicker-days table tbody td").each(function () {
            $(this).removeClass('disabled');
        });
    }
    else {
        $(idCalendario + " .datepicker-days table tbody td").each(function () {
            mesFecha = mes.toString();
            anioFecha = anio.toString();
            diaFecha = formatMonthOrDate(parseInt($(this)[0].innerHTML));
            mesAnterior = obtenerMesAnterior(mes);
            mesPosterior = obtenerMesPosterior(mes);
            if ($(this).hasClass('old')) {
                mesFecha = formatMonthOrDate(mesAnterior);
                if (mesAnterior === 12) {
                    anioFecha = (parseInt(anioFecha) - 1).toString();
                }
            }
            if ($(this).hasClass('new')) {
                mesFecha = formatMonthOrDate(mesPosterior);
                if (mesPosterior === 1) {
                    anioFecha = (parseInt(anioFecha) + 1).toString();
                }
            }
            fecha = anioFecha + mesFecha + diaFecha;
            actualizarDiaCalendario(diasHabilitados, $(this), fecha);

        });
    }
}

function obtenerMesAnterior(mes) {
    mesAnterior = parseInt(mes.toString());
    if (mesAnterior === 1) {
        return 12;
    }
    mesAnterior -= 1;
    return mesAnterior;
}

function obtenerMesPosterior(mes) {
    mesPosterior = parseInt(mes.toString());
    if (mesPosterior === 12) {
        return 1;
    }
    mesPosterior += 1;
    return mesPosterior;
}

function actualizarDiaCalendario(diasHabilitados, elem, fecha) {
    if (diasHabilitados != null && diasHabilitados.indexOf(fecha) > -1) {
        $(elem).removeClass('disabled');
    }
    else {
        $(elem).addClass('disabled');
    }

    if (diasHabilitadosPortadaSuplemento['fechas_con_suplemento'].indexOf(fecha) > -1) {
        $(elem).addClass('day-suplemento').attr('title', 'Fecha con suplemento');
    }
}


