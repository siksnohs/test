pendingRequestBusqueda=false;
arrayVolver = [];
esVolver = false;

function actualizarBusquedaForm(selectedValues, rubrosSeleccionados, sv_url) {
    sv_url=setDefault(sv_url,'');
    rubrosSeleccionados=setDefault(rubrosSeleccionados,[]);
    primeraDiv =  $( "#primeraDiv" );
    segundaDiv =  $( ".segundaDiv" );
    terceraDiv =  $( "#terceraDiv" );
    rubroLB = $( "#rubroLB" );

    vaciarCampos();
    if(selectedValues.length > 1){
        primeraDiv.hide();
        segundaDiv.hide();
        terceraDiv.hide();
        magicSuggest = $("#magicSuggestRubros").magicSuggest();
        magicSuggest.clear();
        $("#rubroSelectorDiv").hide();
    }else{
        $("#rubroSelectorDiv").show();
        $("#magicSuggestRubros").find("input").addClass("ms-inv");
        $("#rubroSelectorDiv").removeClass("col-md-6");
        $("#rubroSelectorDiv").addClass("col-md-12");
        switch(selectedValues[0]){
            case 1:
                $("#rubroSelectorDiv").removeClass("col-md-12");
                $("#rubroSelectorDiv").addClass("col-md-6");
                rubroLB.text("Tipo de norma");
                primeraDiv.show();
                segundaDiv.hide();
                terceraDiv.hide();
                break;
            case 2:
                rubroLB.text("Rubros");
                primeraDiv.hide();
                segundaDiv.show();
                terceraDiv.hide();
                break;
            case 3:
                rubroLB.text("Rubros");
                primeraDiv.hide();
                segundaDiv.hide();
                terceraDiv.show();
                break;
            default:
                $("#rubroSelectorDiv").hide();
                primeraDiv.hide();
                segundaDiv.hide();
                terceraDiv.hide();
        }

    }
    refillSelector(rubrosSeleccionados, sv_url);
}


function refillSelector(rubrosSeleccionados, sv_url){
    sv_url=setDefault(sv_url,'');
    rubrosSeleccionados=setDefault(rubrosSeleccionados,[]);
    loaderRubro = $('#cargandoSelectRubrosSeccion');
    loaderRubro.show();
    if(sv_url!=''){
        $.ajax({
            url : sv_url,
            dataType: 'json',
            type : 'GET',
            success : function(result) {
                completeRubrosSelector(result, rubrosSeleccionados);
                loaderRubro.hide();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                loaderRubro.hide();
            }
        });
    }
   }


function completeRubrosSelector(result, rubrosSeleccionados){
    rubrosSeleccionados=setDefault(rubrosSeleccionados,[]);

    magicSuggest = $("#magicSuggestRubros").magicSuggest();
    magicSuggest.clear();
    magicSuggest.setData(result);
    if (rubrosSeleccionados.length > 0){
        magicSuggest.setValue(rubrosSeleccionados);
    }
    $("#magicSuggestRubros").find("input").addClass("ms-inv");

}


function ParametrosBusquedaRubroSeccion() {
    this.numeroPagina;
    this.fechaPublicacion;
    this.idRubro;
    this.seccion;
    this.ultimaSeccion;
    this.ultimoRubro;
    this.hayMasResultadosBusqueda='';
    this.ejecutandoLlamadaAsincronicaBusqueda='';
    this.filtroPorRubrosSeccion=true;
    this.filtroPorRubroBusqueda = false;
    this.filtroPorSeccionBusqueda = false;
    this.busquedaOriginal = false;
}

function ParametrosBusqueda() {
    this.texto;
    this.seccion;
    this.rubros;
    this.nroNorma;
    this.anioNorma;
    this.ordenamiento;
    this.denominacion;
    this.tipoContratacion;
    this.anioContratacion;
    this.nroContratacion;
    this.fechaDesde;
    this.fechaHasta;
    this.fecha;
    this.tipoBusqueda;
    this.numeroPagina;
    this.ultimoRubro;
    this.busquedaRubro=false;
    this.hayMasResultadosBusqueda='';
    this.ejecutandoLlamadaAsincronicaBusqueda='';
    this.ultimaSeccion='';
    this.todasLasPalabras;
    this.filtroPorRubrosSeccion=false;
    this.filtroPorRubroBusqueda = false;
    this.filtroPorSeccionBusqueda = false;
    this.busquedaOriginal = false;
    this.comienzaDenominacion;
    this.ordenamientoSegunda = true; // Denominacion-Rubro
    this.seccionesOriginales = [];
    this.ultimoItemExterno = null;
    this.ultimoItemInterno = null;

    this.clonarParametros = function (parametros)
    {
        this.texto = parametros.texto;
        this.seccion = parametros.seccion;
        this.rubros = parametros.rubros;
        this.nroNorma = parametros.nroNorma;
        this.anioNorma = parametros.anioNorma;
        this.ordenamiento = parametros.ordenamiento;
        this.denominacion = parametros.denominacion;
        this.tipoContratacion = parametros.tipoContratacion;
        this.anioContratacion = parametros.anioContratacion;
        this.nroContratacion = parametros.nroContratacion;
        this.fechaDesde = parametros.fechaDesde;
        this.fechaHasta = parametros.fechaHasta;
        this.fecha = parametros.fecha;
        this.tipoBusqueda = parametros.tipoBusqueda;
        this.numeroPagina = parametros.numeroPagina;
        this.ultimoRubro = parametros.ultimoRubro;
        this.busquedaRubro = parametros.busquedaRubro;
        this.hayMasResultadosBusqueda = parametros.hayMasResultadosBusqueda;
        this.ejecutandoLlamadaAsincronicaBusqueda = parametros.ejecutandoLlamadaAsincronicaBusqueda;
        this.ultimaSeccion = parametros.ultimaSeccion;
        this.todasLasPalabras = parametros.todasLasPalabras;
        this.filtroPorRubrosSeccion = parametros.filtroPorRubrosSeccion;
        this.filtroPorRubroBusqueda = parametros.filtroPorRubroBusqueda;
        this.filtroPorSeccionBusqueda = parametros.filtroPorSeccionBusqueda;
        this.busquedaOriginal = parametros.busquedaOriginal;
        this.comienzaDenominacion = parametros.comienzaDenominacion;
        this.ordenamientoSegunda =  parametros.ordenamientoSegunda;
        this.seccionesOriginales = parametros.seccionesOriginales;
        this.ultimoItemExterno = parametros.ultimoItemExterno;
        this.ultimoItemInterno = parametros.ultimoItemInterno;
    };

    this.cargarDatosBusqueda= function ()
    {
        this.texto=$( "#palabraClave" ).val();
        rubros = [];
        if ($("#magicSuggestRubros") !== undefined){
            magicSuggest = $("#magicSuggestRubros").magicSuggest();
            rubros = magicSuggest.getValue();
        }
        this.rubros=rubros;
        this.nroNorma=$('#nroNormaIP').val();
        this.anioNorma=$('#anioNormaIP').val();
        this.denominacion=$('#denominacion').val();
        this.tipoContratacion=$('#tipoContratacion').val();
        this.anioContratacion=$('#anioContratacion').val();
        this.nroContratacion=$('#nroContratacion').val();
        this.fechaDesde=$('#fechaDesdeInput').val();
        this.fechaHasta=$('#fechaHastaInput').val();
        this.todasLasPalabras=$("#checkTodasPalabras").is(':checked');
        this.filtroPorRubroBusqueda = false;
        this.filtroPorSeccionBusqueda = false;
        this.busquedaOriginal = false;
        this.comienzaDenominacion=$("#checkComienzaDenominacion").is(':checked');
        this.ordenamientoSegunda = $('#selectOrdenamientoSegunda').val() === "1";
    };

    this.cargarDatosBusquedaRapida= function () {
        this.texto=$( "#rapidaInput" ).val();
        this.rubros = [];
        sessionStorage.setItem('textoRapida', this.texto);
    };

    this.validarCampos = function() {
        huboError=false;
        seccionSelect = $("#magicsuggest");
        fechaDesdeInput = $('#fechaDesdeInput');
        fechaHastaInput= $('#fechaHastaInput');
        anioNormaIPInput = $('#anioNormaIP');
        nroContratacionInput =$('#nroContratacion');
        anioContratacionInput =$('#anioContratacion');

        if (this.seccion.length < 1){
            addCssError(seccionSelect, $("#spanSeccion"), "La seccion es requerida");
            huboError = true;
        }else{
            removeCssError(seccionSelect, $("#spanSeccion"));
        }

        if (this.anioNorma != ""){
            anioNorma = parseInt(this.anioNorma);
            if (isNaN(anioNorma)){
                addCssError(anioNormaIPInput, $("#anioNormaIPSpan"), "El año debe ser un número");
                huboError = true;
            }
            else{
                if(anioNorma < anioInicioBoletin || anioNorma > anioActual){
                    addCssError(anioNormaIPInput, $("#anioNormaIPSpan"), "El año debe estar entre "+anioInicioBoletin+" y "+anioActual);
                    huboError = true;
                }else{
                    removeCssError(anioNormaIPInput, $("#anioNormaIPSpan"));
                }
            }
        }

        if (this.anioContratacion != ""){
            anioContratacion = parseInt(this.anioContratacion);
            if (isNaN(anioContratacion)){
                addCssError(anioContratacionInput, $("#anioContratacionSpan"), "El año debe ser un número");
                huboError = true;
            }
            else{
                if(anioContratacion < anioInicioBoletin || anioContratacion > anioActual){
                    addCssError(anioContratacionInput, $("#anioContratacionSpan"), "El año debe estar entre "+anioInicioBoletin+" y "+anioActual);
                    huboError = true;
                }else{
                    removeCssError(anioContratacionInput, $("#anioContratacionSpan"));
                }
            }
        }

        removeCssError(fechaDesdeInput, $("#fechaDesdeSpan"));
        removeCssError(fechaHastaInput, $("#fechaHastaSpan"));
        if(this.fechaDesde.length>0 &&  !validarFecha(this.fechaDesde)){
            addCssError(fechaDesdeInput, $("#fechaDesdeSpan"), "Fecha desde inválida");
            huboError = true;
        }
        if(this.fechaHasta.length>0 &&  !validarFecha(this.fechaHasta)) {
            addCssError(fechaHastaInput, $("#fechaHastaSpan"), "Fecha hasta inválida");
            huboError = true;
        }

        if(this.fechaDesde.length>0 && this.fechaHasta.length>0 && !huboError){
            dateFechaDesde = convertirADate(this.fechaDesde);
            dateFechaHasta = convertirADate(this.fechaHasta);

            if (dateFechaDesde > dateFechaHasta){
                addCssError(fechaDesdeInput, $("#fechaDesdeSpan"), "La fecha desde no puede superar a la fecha hasta");
                huboError = true;
            }else{
                removeCssError(fechaDesdeInput, $("#fechaDesdeSpan"));
            }
        }

        return huboError;

    };

}

// BUSQUEDA RUBRO

function realizarBusquedaRubro(sv_url, seccion, rubro, fecha) {
    hayMasResultadosSeccion = false;
    arrayVolver = [];
    if (pendingRequestBusqueda){
        return;
    }
    $('#cargandoListadoAvisosSeccion').show();
    $("#avisosSeccionDiv").hide();
    $("#resultadosBusqueda").empty();
    $('#resultadosBusquedaRapidaDiv').hide();
    $("#sinResultados").text("");
    params = new ParametrosBusquedaRubroSeccion();
    secciones_number = {'primera': 1, 'segunda': 2, 'tercera': 3, 'cuarta': 4};
    params.fechaPublicacion=fecha;
    params.idRubro=rubro;
    params.seccion = [secciones_number[seccion]];
    IdRubro=rubro;
    numeroPagina=1;
    ultimoRubro='';
    oldParams = JSON.parse(sessionStorage.getItem('searchParams'));
    if(oldParams){
        numeroPagina = 2;
        hayMasResultados=true;
        params.numeroPagina = oldParams.numeroPagina;
    }else{
        params.numeroPagina = 1;
    }
    params.ultimoRubro = '';
    params.hayMasResultadosBusqueda = true;
    params.ejecutandoLlamadaAsincronicaBusqueda = false;

    sessionStorage.removeItem('idRubro');
    sessionStorage.removeItem('ultRubro');
    if(seccion!=='cuarta'){
        sessionStorage.setItem('idRubro', JSON.parse(rubro));
    }else{
        sessionStorage.setItem('idRubro', rubro);
    }
    cargarRespuestasAvanzada(params, sv_url, true, true);
}


// BUSQUEDA RAPIDA

function realizarBusquedaRapida(sv_url, seccion, newSearch, fromIndex, realizarValidacion, parametros) {
    if ($("#rapidaInput").val()) {
        producirRecarga = '0';
        if (ejecutandoLlamadaAsincronicaBusquedaRapida) {
            return;
        }
        ejecutandoLlamadaAsincronicaBusquedaRapida = true;
        ejecutandoLlamadaAsincronicaBusquedaAvanzada = true;
        hayMasResultadosSeccion = false;
        hayMasResultadosBusquedaRapida = true;
        newSearch = setDefault(newSearch, false);
        realizarValidacion = setDefault(realizarValidacion, true);
        fromIndex = setDefault(fromIndex, false);
        parametros = setDefault(parametros, null);

        if (newSearch) {
            arrayVolver = [];
        }

        if (realizarValidacion) {
            if (seccion) {
                $('#busquedaRapidaButton').attr("disabled", "disabled");
                cargarParametrosBusqRapida(sv_url, newSearch, fromIndex, seccion, parametros);
            } else {
                ejecutandoLlamadaAsincronicaBusquedaRapida = false;
            }
        } else {
            cargarParametrosBusqRapida(sv_url, newSearch, fromIndex, seccion, parametros);
        }
    }
}

function cargarParametrosBusqRapida(sv_url, newSearch, fromIndex, seccion, parametros){
    $('#cargandoListadoBusqueda').show();
    $("#resultadosBusquedaRapida").empty();
    $("#resultadosBusquedaRapidaDiv").hide();
    //$("#respuestaDivContainer").hide();
    $("#layoutContent").empty();
    $('#layoutContent').removeClass("margin-top-40");
    if(fromIndex){
        $("#carousel-example-generic").hide();
        $("#banners-footer").hide();
        $('#indexContentDiv').removeClass("margin-top-40");
    }
    newSearch ? $("#counterBusquedaRapTotal").empty() : null;

    (seccion === 'all')? $("#responseBusqueda").show() : null;
    (!sessionStorage.getItem('searchParams')) ? sessionStorage.removeItem('searchParams') : null;

    if (parametros != null){
        params = parametros;
    }
    else{
        params = new ParametrosBusqueda();
        params.cargarDatosBusquedaRapida();
    }
    params.tipoBusqueda = "Rapida";
    params.numeroPagina = 1;
    params.seccion = seccion;
    params.fecha = diaSeleccionado.getFullYear()+""+padMeses((diaSeleccionado.getMonth()+1))+""+ padMeses(diaSeleccionado.getDate());
    params.ultimaSeccion = '';
    params.ultimoRubro = '';
    params.hayMasResultadosBusqueda = true;
    params.ejecutandoLlamadaAsincronicaBusqueda = false;
    params.busquedaOriginal = newSearch && !esVolver;

    cargarRespuestasRapida(this.params, sv_url, newSearch);
}


function cargarRespuestasRapida(params, sv_url, newSearch) {
    newSearch = setDefault(newSearch, true);
    $("#includeResultadosBusquedaRapida").show();
    $.ajax({
        url : sv_url,
        dataType: 'json',
        type : 'POST',
        data : {
            params : JSON.stringify(params),
            array_volver : JSON.stringify(arrayVolver)
        },
        success : function(response) {
            error = response["error"];
            if (error !== 0){
                mostrarMensajesError(response["mensajes"], error);
            }
            else {
                result = response["content"];
                cantTotalBusqRapida = 0;
                arrayCantidadesBusqRapida = result['cantidad_result_seccion'];
                tamanioCantidades = arrayCantidadesBusqRapida.length;

                for (keyBusqRapida in arrayCantidadesBusqRapida) {
                    (arrayCantidadesBusqRapida[keyBusqRapida]) ? cantTotalBusqRapida = (cantTotalBusqRapida + arrayCantidadesBusqRapida[keyBusqRapida]) : null;
                }
                $("#sinResultados").text("");
                if (cantTotalBusqRapida < 1) {
                    $("#counterBusquedaRapTotal").text(cantTotalBusqRapida);
                    $("#resultadosBusquedaRapidaDiv").show();
                    // $("#respuestaDivContainer").show();
                    $("#includeResultadosBusquedaRapida").show();
                    $("#counterRapDiv").hide();
                    $("#sinResultados").text("No se pudo encontrar resultados");
                    hayMasResultadosBusquedaRapida = false;

                } else {
                    $("#resultadosBusquedaRapida").append(result['html']);
                    $("#counterBusquedaRapTotal").text(cantTotalBusqRapida);
                    counterBusqRapida = 0;
                    actualizarContadores(arrayCantidadesBusqRapida, "Rapida");


                    $("#sumarizadoDeBusquedaRapida").show();
                    $("#resultadosBusquedaRapidaDiv").show();
                    //$("#respuestaDivContainer").show();

                    hayMasResultadosBusquedaRapida = result['html'] !== "";
                    params.hayMasResultadosBusqueda = result['html'] !== "";
                    params.numeroPagina = result['sig_pag'];
                    params.ultimaSeccion = result['ult_seccion'];
                    params.ultimoRubro = result['ult_rubro'];
                    params.ejecutandoLlamadaAsincronicaBusqueda = false;
                    sessionStorage.setItem('searchParams', JSON.stringify(params));
                    $('[data-toggle="tooltip"]').tooltip()
                }

                if (newSearch) {
                    if (esBrowserMobile()) {
                        scrollFunc("sumarizadoDeBusquedaRapida");
                    }
                }
            }
            $('#cargandoListadoBusqueda').hide();
            $('#busquedaRapidaButton').removeAttr('disabled');
            $('[data-toggle="tooltip"]').tooltip();
            pendingRequestBusqueda=false;
            ejecutandoLlamadaAsincronicaSeccion = false;
            ejecutandoLlamadaAsincronicaBusquedaRapida = false;
            hayMasResultadosBusquedaAvanzada = false;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $('#cargandoListadoBusqueda').hide();
            $("#resultadosBusquedaRapidaDiv").show();
           // $("#respuestaDivContainer").show();
            params.ejecutandoLlamadaAsincronicaBusqueda = false;
            sessionStorage.setItem('searchParams', JSON.stringify(params));
            $('#busquedaRapidaButton').removeAttr('disabled');
            ejecutandoLlamadaAsincronicaSeccion = false;
            ejecutandoLlamadaAsincronicaBusquedaRapida = false;
            hayMasResultadosBusquedaAvanzada = false;
        }
    });
}


// BUSQUEDA AVANZADA

function realizarBusquedaAvanzada(sv_url, seccion, rubros, nuevaBusqueda, realizarValidacion, parametros, sv_url_segunda){
    hayMasResultadosBusquedaAvanzada = true;
    $("#sumarizadoBusqAvanzada").hide();
    seccion=setDefault(seccion, 0);
    rubros = setDefault(rubros, []);
    if (rubros == null){
        rubros = [];
    }
    realizarValidacion = setDefault(realizarValidacion, true);
    nuevaBusqueda = setDefault(nuevaBusqueda, false);
    parametros = setDefault(parametros, null);
    sv_url_segunda = setDefault(sv_url_segunda, null);

    nuevaBusqueda ? hideCounterDiv(): null;
    $("#resultadosBusqueda").empty();
    $("#cargandoListadoAvisosSeccion").empty();
    $("#resultadosBusquedaRapidaDiv").hide();

    msBusqAvanzada = $('#magicsuggest').magicSuggest();

    if (nuevaBusqueda){
        arrayVolver = [];
    }

    if (parametros != null){
        params = parametros;
    }
    else{
        params = new ParametrosBusqueda();
        params.cargarDatosBusqueda();
    }
    (nuevaBusqueda && seccion == 0) ? params.seccion = msBusqAvanzada.getValue() : params.seccion = [seccion];
    rubros.length > 0 ? params.rubros = rubros : null;
    params.tipoBusqueda = "Avanzada";
    params.numeroPagina = 1;
    params.ultimoRubro = '';
    params.hayMasResultadosBusqueda = true;
    params.ejecutandoLlamadaAsincronicaBusqueda = false;
    params.busquedaOriginal = nuevaBusqueda;

    if (parametros == null && seccion == 0){
        params.seccionesOriginales = params.seccion;
    }

    if (realizarValidacion){
        if(!params.validarCampos()){
            if (params.seccion.length === 1 && params.seccion[0] === 2 && sv_url_segunda != null){
                cargarRespuestasAvanzadaSegunda(this.params, sv_url_segunda, nuevaBusqueda, parametros);
            }
            else{
                cargarRespuestasAvanzada(this.params, sv_url, nuevaBusqueda, parametros);
            }
        }else{
            hayMasResultadosBusquedaAvanzada = false;
            (!sessionStorage.getItem('searchParams')) ? sessionStorage.removeItem('searchParams') : null;
            $("#counterDiv").hide();
        }
    }
    else{
        cargarRespuestasAvanzada(this.params, sv_url, nuevaBusqueda, parametros);
    }

}

function cargarRespuestasAvanzada(params, sv_url, nuevaBusqueda, menu_rubro){
    menu_rubro = setDefault(menu_rubro, false);
    nuevaBusqueda = setDefault(nuevaBusqueda, true);
    $('#cargandoListadoBusquedaAvanzada').show();
    $("#counterDiv").hide();
    $('#btnBusquedaAvanzada').attr("disabled", "disabled");
    if(!pendingRequestBusqueda) {
        pendingRequestBusqueda = true;
        $.ajax({
            url: sv_url,
            dataType: 'json',
            type: 'POST',
            data: {
                params: JSON.stringify(params),
                array_volver : JSON.stringify(arrayVolver)
            },
            success: function (response) {
                error = response["error"];
                if (error !== 0){
                    mostrarMensajesError(response["mensajes"], error);
                    hayMasResultadosBusquedaAvanzada = false;
                }
                else{
                    hideFlashMessage();
                    result = response["content"];
                    $("#resultadosBusqueda").append(result['html']);
                    arrayCantidadesBusqAvanzada = result['cantidad_result_seccion'];
                    cantTotalBusqAvanzada = actualizarContadores(arrayCantidadesBusqAvanzada, "Avanzada");
                    $("#sinResultadosAvanzada").text("");
                    $("#sumarizadoBusqAvanzada").show();
                    $("#counterTotal").text(cantTotalBusqAvanzada);

                    if (!params.filtroPorRubrosSeccion && cantTotalBusqAvanzada <= 0) {
                        $("#counterAvanzadaDiv").hide();
                        $("#sinResultadosAvanzada").text("No se pudo encontrar resultados");
                        hayMasResultadosBusquedaAvanzada = false;
                        if (menu_rubro){
                            hayMasResultadosSeccion=false;
                        }
                    } else {
                        hayMasResultadosBusquedaAvanzada=result['html'] !== "";
                        if (menu_rubro){
                            hayMasResultadosSeccion=result['html'] !== "";
                        }
                        params.numeroPagina = result['sig_pag'];
                        numeroPagina = result['sig_pag'];
                        params.ultimaSeccion = result['ult_seccion'];
                        params.ultimoRubro = result['ult_rubro'];
                        if (params.seccion !== 'cuarta') {
                            sessionStorage.setItem('ultRubro', result['ult_rubro']);
                        }
                        params.ejecutandoLlamadaAsincronicaBusqueda = false;
                        sessionStorage.setItem('searchParams', JSON.stringify(params));
                        //!sessionStorage.getItem('searchParams') ? sessionStorage.setItem('searchParams', JSON.stringify(params)) : null;

                    }
                }


                $('#btnBusquedaAvanzada').removeAttr('disabled');
                $('#cargandoListadoBusquedaAvanzada').hide();
                $('#cargandoListadoAvisosSeccion').hide();
                $('[data-toggle="tooltip"]').tooltip();
                pendingRequestBusqueda=false;
                ejecutandoLlamadaAsincronicaBusquedaAvanzada = false;
                hayMasResultadosBusquedaRapida = false;
                ejecutandoLlamadaAsincronicaSeccion = false;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#btnBusquedaAvanzada').removeAttr('disabled');
                $('#cargandoListadoBusquedaAvanzada').hide();
                $("#counterAvanzadaDiv").hide();
                $('#cargandoListadoAvisosSeccion').hide();
                pendingRequestBusqueda=false;
                params.ejecutandoLlamadaAsincronicaBusqueda = false;
                sessionStorage.setItem('searchParams', JSON.stringify(params));
                ejecutandoLlamadaAsincronicaBusquedaAvanzada = false;
                hayMasResultadosBusquedaRapida = false;
                ejecutandoLlamadaAsincronicaSeccion = false;
                hayMasResultadosBusquedaAvanzada = false;
            }
        });
    }
}


function cargarRespuestasAvanzadaSegunda(params, sv_url, nuevaBusqueda){
    nuevaBusqueda = setDefault(nuevaBusqueda, true);
    $('#cargandoListadoBusquedaAvanzada').show();
    $("#counterDiv").hide();
    $('#btnBusquedaAvanzada').attr("disabled", "disabled");
    if(!pendingRequestBusqueda) {
        pendingRequestBusqueda = true;
        $.ajax({
            url: sv_url,
            dataType: 'json',
            type: 'POST',
            data: {
                params: JSON.stringify(params),
                array_volver : JSON.stringify(arrayVolver)
            },
            success: function (response) {
                error = response["error"];
                if (error !== 0){
                    mostrarMensajesError(response["mensajes"], error);
                    hayMasResultadosBusquedaAvanzada = false;
                }
                else{
                    hideFlashMessage();
                    result = response["content"];
                    $("#resultadosBusqueda").append(result['html']);
                    cantidadAvisos = result['cantidad_result_seccion'];
                    $("#sinResultadosAvanzada").text("");
                    $("#sumarizadoBusqAvanzada").show();
                    $("#counterTotal").text(cantidadAvisos);

                    if (cantidadAvisos <= 0) {
                        $("#counterTotal").text("0");
                        $("#counterAvanzadaDiv").hide();
                        $("#sinResultadosAvanzada").text("No se pudo encontrar resultados");
                        hayMasResultadosBusquedaAvanzada = false;
                    } else {
                        params.hayMasResultadosBusqueda = result['html'] !== "";
                        hayMasResultadosBusquedaAvanzada=result['html'] !== "";
                        params.numeroPagina = result['sig_pag'];
                        numeroPagina = result['sig_pag'];
                        if (result['ultimos_items'] != null){
                            params.ultimoItemExterno = null;
                            if (result['ultimos_items']["itemExterno"] != null){
                                params.ultimoItemExterno = result['ultimos_items']["itemExterno"]["nombre"];
                            }
                            params.ultimoItemInterno = null;
                            if (result['ultimos_items']["itemInterno"] != null){
                                params.ultimoItemInterno = result['ultimos_items']["itemInterno"]["nombre"];
                            }
                        }
                        ejecutandoLlamadaAsincronica = false;
                        params.ejecutandoLlamadaAsincronicaBusqueda = false;
                        sessionStorage.setItem('searchParams', JSON.stringify(params));
                    }
                }


                $('#btnBusquedaAvanzada').removeAttr('disabled');
                $('#cargandoListadoBusquedaAvanzada').hide();
                $('#cargandoListadoAvisosSeccion').hide();
                $('[data-toggle="tooltip"]').tooltip();
                pendingRequestBusqueda=false;
                ejecutandoLlamadaAsincronicaBusquedaAvanzada = false;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#btnBusquedaAvanzada').removeAttr('disabled');
                $('#cargandoListadoBusquedaAvanzada').hide();
                $("#counterAvanzadaDiv").hide();
                $('#cargandoListadoAvisosSeccion').hide();
                params.ejecutandoLlamadaAsincronicaBusqueda = false;
                sessionStorage.setItem('searchParams', JSON.stringify(params));
                pendingRequestBusqueda=false;
                ejecutandoLlamadaAsincronicaBusquedaAvanzada = false;
                hayMasResultadosBusquedaAvanzada = false;
            }
        });
    }
}

function mostrarMensajesError(mensajes, error){
    //Por default es error de validacion
    error = setDefault(error, 1);
    cantidadMensajesError = mensajes.length;
    if (cantidadMensajesError > 0){
        if (error === 1){
            mensaje = "No se pudo realizar la búsqueda. Verifique los campos completados:<br><ul class='mensajes-validacion'>";
            for(i=0; i<cantidadMensajesError; i++){
                mensaje+= "<li>"+mensajes[i]+"</li>";
            }
            mensaje += "</ul>";
        }
        else{
            mensaje = mensajes[0];
        }
        showFlashWarning(mensaje);
        backToTop();
    }
}


function volverBusquedaRapida(sv_url, array_volver, parametros){
    esVolver = true;
    $( "#rapidaInput" ).val(parametros.texto);
    $(".subLayouyContentDivDetalleAviso").hide();
    arrayVolver = array_volver;
    params = parametros;
    realizarBusqueda(sv_url, params, true);
}



// Generales

function hideCounterDiv() {
    $("#counterPrimera").hide();
    $("#counterSegunda").hide();
    $("#counterTercera").hide();
}

function vaciarCampos() {
    $('#rubroSelector').empty();
    $('#nroNormaIP').val("");
    $('#anioNormaIP').val("");
    $('#denominacion').val("");
    $('#tipoContratacion').val("");
    $('#anioContratacion').val("");
    $('#nroContratacion').val("");
}

function actualizarContadores(arrayCantidades, tipoBusqueda){
    cantidadTotalAvisosBusqueda = 0;
    counterBusqueda=0;
    //Comportamiento del submenu contador de resultados
    for (keyBusqueda in arrayCantidades) {
        if (arrayCantidades[keyBusqueda]){
            counterBusqueda++;
        }
        if (Object.keys(arrayCantidades).length > 1) {
            cantidadTotalAvisosBusqueda = (cantidadTotalAvisosBusqueda + arrayCantidades[keyBusqueda]);
            $("#counter" + keyBusqueda).show();
            divSpanCounterSeccion = "";
            divCounterSeccion = "";
            switch (keyBusqueda) {
                case "1":
                    tipoBusqueda === "Avanzada" ? divSpanCounterSeccion = "#spanCounterPrimera" : divSpanCounterSeccion = "#spanCounterPrimeraRap";
                    tipoBusqueda === "Avanzada" ? divCounterSeccion = "#counterPrimera" : divCounterSeccion = "#counter1Rap";
                    break;
                case "2":
                    tipoBusqueda === "Avanzada" ? divSpanCounterSeccion = "#spanCounterSegunda" : divSpanCounterSeccion = "#spanCounterSegundaRap";
                    tipoBusqueda === "Avanzada" ? divCounterSeccion = "#counterSegunda" : divCounterSeccion = "#counter2Rap";
                    break;
                case "3":
                    tipoBusqueda === "Avanzada" ? divSpanCounterSeccion = "#spanCounterTercera" : divSpanCounterSeccion = "#spanCounterTerceraRap";
                    tipoBusqueda === "Avanzada" ? divCounterSeccion = "#counterTercera" : divCounterSeccion = "#counter3Rap";
                    break;
                case "4":
                    // divSpanCounterSeccion = "#spanCounterCuartaRap";
                    // divCounterSeccion = "#counter4Rap";
                    break;
                default:
                    break;
            }
            cantidadSeccion = arrayCantidades[parseInt(keyBusqueda)];
            $(divSpanCounterSeccion).text("(" + cantidadSeccion + ")");
            cantidadSeccion < 1 ? $(divCounterSeccion).hide() : $(divCounterSeccion).show();

        }else{
            cantidadTotalAvisosBusqueda = arrayCantidades[keyBusqueda];
        }
    }
    tipoBusqueda === "Avanzada" ? divCounter = "#counterAvanzadaDiv" : divCounter = "#counterRapDiv";
    counterBusqueda === 1 ? $(divCounter).hide() : $(divCounter).show();

    return cantidadTotalAvisosBusqueda;
}

function actualizarVistaVolverBusqueda(divVolver) {
    if (arrayVolver.length > 0){
        $(divVolver).show();
    }
    else{
        $(divVolver).hide();
    }
}


function actualizarBusqueda(sv_url, seccion, nro_seccion, tipoBusqueda){
    params.filtroPorSeccionBusqueda = true;
    params.busquedaOriginal = false;
    parametros = new ParametrosBusqueda();
    parametros.clonarParametros(params);
    arrayVolver.push(parametros);
    if (tipoBusqueda === "Avanzada"){
        realizarBusquedaAvanzada(sv_url, nro_seccion, null, false, false, params);
    }
    else{
        realizarBusquedaRapida(sv_url, seccion, false, false, false, params);
    }
    params.filtroPorSeccionBusqueda = true;
}


function actualizarBusquedaRubro(rubro_id, sv_url, sv_url_segunda){
    params.filtroPorRubroBusqueda = true;
    params.busquedaOriginal = false;
    parametros = new ParametrosBusqueda();
    parametros.clonarParametros(params);
    arrayVolver.push(parametros);
    params.rubros = [];
    rubro_menu_seleccionado = rubro_id != null && rubro_id != "";
    if (rubro_menu_seleccionado){
        params.rubros = [rubro_id];
    }
    params.ultimoItemInterno = null;
    params.ultimoItemExterno = null;
    params.ultimoRubro = null;
    realizarBusqueda(sv_url, params, false, sv_url_segunda);
}


function volverBusquedaAnterior(sv_url, sv_url_segunda){
    params = arrayVolver.pop();
    params.ultimaSeccion = "";
    params.ultimoItemExterno = null;
    params.ultimoItemExterno = null;
    params.ultimoRubro = "";
    realizarBusqueda(sv_url, params, false, sv_url_segunda);
}

function realizarBusqueda(sv_url, params, nuevaBusqueda, sv_url_segunda){
    nuevaBusqueda = setDefault(nuevaBusqueda, false);
    sv_url_segunda = setDefault(sv_url_segunda, null);
    if (pendingRequestBusqueda){
        return;
    }
    hayMasResultadosSeccion = false;
    numeroPagina=1;
    params.numeroPagina = 1;
    params.hayMasResultadosBusqueda = true;
    params.ejecutandoLlamadaAsincronicaBusqueda = false;
    params.busquedaOriginal = nuevaBusqueda && !esVolver;
    $("#avisosSeccionDiv").hide();
    cargarRespuestasBusqueda(params, sv_url, sv_url_segunda);
}

function cargarRespuestasBusqueda(params, sv_url, sv_url_segunda){
    if (params.tipoBusqueda == 'Avanzada'){
        hayMasResultadosBusquedaAvanzada = true;
        ejecutandoLlamadaAsincronicaBusquedaAvanzada = true;
        $('#cargandoListadoBusquedaAvanzada').show();
        $("#resultadosBusqueda").empty();
        if (params.seccionesOriginales.length === 1 && params.seccionesOriginales[0] === 2 && sv_url_segunda != null){
            cargarRespuestasAvanzadaSegunda(params, sv_url_segunda, false);
        }
        else{
            cargarRespuestasAvanzada(params, sv_url, false);
        }
    }
    else{
        ejecutandoLlamadaAsincronicaSeccion = true;
        ejecutandoLlamadaAsincronicaBusquedaRapida = true;
        $('#cargandoListadoBusqueda').show();
        $("#resultadosBusquedaRapida").empty();
        hayMasResultadosBusquedaRapida = true;
        cargarRespuestasRapida(params, sv_url, false);
    }
}



function ejecutarBusquedaAvanzadaConTexto(idInputTexto, path){
    texto = $(idInputTexto).val();
    if (texto != null && texto !== ""){
        texto_encoded = encodeURIComponent(texto);
        window.location.href = path + "?palabra_clave=" + texto_encoded;
    }
    else{
        window.location.href = path;
    }
}