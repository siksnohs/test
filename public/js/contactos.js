

function ParametrosContacto() {
    this.nombre;
    this.email;
    this.codigo_area;
    this.telefono;
    this.tema;
    this.empresa;
    this.mensaje;
    this.captcha;

    this.cargarDatos= function (habilitar_captcha)
    {
        this.nombre=$('#inputName').val();
        this.email=$('#inputEmail').val();
        this.codigo_area=$('#inputCArea').val();
        this.telefono=$('#inputPhone').val();
        this.tema=$('#inputTheme').val();
        this.empresa=$('#inputCompany').val();
        this.mensaje=$('#inputMessage').val().trim();
        if (habilitar_captcha === "true"){
            this.captcha=grecaptcha.getResponse();
        }
        else{
            this.captcha = "";
        }

    };

    // Validador de Campos
    this.validarCampos = function() {

        var msg = "";

        var nombre = $("#inputName");
        if (this.nombre.length < 1){
            addCssError(nombre, $("#spanName"));

            msg = msg + "- El nombre es requerido";
        }else{
            removeCssError(nombre, $("#spanName"));
        }

        patt = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        var email = $("#inputEmail");
        if (this.email.length < 1){
            addCssError(email, $("#spanEmail"));

            msg = msg + "- El email es requerido";
        }else{
            if(!patt.test(this.email)) {
                addCssError(email, $("#spanEmail"), "Formato de email incorrecto");
                msg = msg + "- No es un email valido";
            }else{
                removeCssError(email, $("#spanEmail"));
            }
        }

        var code_area = $("#inputCArea");
        patt = /^\d+$/;
        if (this.codigo_area.length < 1){
            addCssError(code_area, $("#spanCodigoArea"));

            msg = msg + "- El código de área es requerido";
        }else{
            if(!patt.test(this.codigo_area)) {
                addCssError(code_area, $("#spanCodigoArea"), "Solo se permiten números en el código de área");
                msg = msg + "- No es un código de área valido";
            }else{
                removeCssError(code_area, $("#spanCodigoArea"));
            }
        }

        var phone = $("#inputPhone");
        patt = /^\d+$/;
        if (this.telefono.length < 1){
            addCssError(phone, $("#spanPhone"));

            msg = msg + "- El telefono es requerido";
        }else{

            if (this.telefono.length >8){
                addCssError(phone, $("#spanPhone"), "El telefono solo puede contener como maximo 8 digitos");
                msg = msg + "- No es un telefono valido";
            }else{
                if(!patt.test(this.telefono)) {
                    addCssError(phone, $("#spanPhone"), "Solo se permiten números en el teléfono");
                    msg = msg + "- No es un telefono valido";
                }else{
                    removeCssError(phone, $("#spanPhone"));
                }
            }
        }

        var theme = $("#inputTheme");
        if (this.tema.length < 1){
            addCssError(theme, $("#spanTheme"));

            msg = msg + "- El tema es requerido";
        }else{
            removeCssError(theme, $("#spanTheme"));
        }

        var company = $("#inputCompany");
        if (this.empresa.length < 1){
            addCssError(company, $("#spanCompany"));

            msg = msg + "- La compañia es requerido";
        }else{
            removeCssError(company, $("#spanCompany"));
        }

        var message = $("#inputMessage");
        if (this.mensaje.length < 1){
            addCssError(message, $("#spanMessage"));

            msg = msg + "- El mensaje es requerido";
        }else{
            removeCssError(message, $("#spanMessage"));
        }

        return msg;

    }


}

function enviarMail(sv_url, habilitar_captcha)
{
    params = new ParametrosContacto();
    params.cargarDatos(habilitar_captcha);
    var msg = params.validarCampos();
    if( msg === ""){
        $("#loader").show();
        $('#btnEnviarMail').attr("disabled", "disabled");
        $.ajax({
                url : sv_url,
                dataType : "json",
                type : "POST",
                data : {
                    params : JSON.stringify(params)
                },
                success : function(response) {
                    hideFlashMessage();
                    if (response["error"] === 0){
                        document.location.href="/";
                    }
                    else{
                        mensaje = "No se pudo enviar el mail.";
                        cantidadMensajesError = response["mensajes"].length;
                        if (cantidadMensajesError > 0){
                           mensaje += " Verifique los campos completados:<br><ul class='mensajes-validacion'>";
                           for(i=0; i<cantidadMensajesError; i++){
                               mensaje+= "<li>"+response["mensajes"][i]+"</li>";
                           }
                           mensaje += "</ul>"
                        }
                        showFlashWarning(mensaje);
                        backToTop();
                    }
                    $('#btnEnviarMail').removeAttr('disabled');
                    $("#loader").hide();
                },
                error : function(e, a, d) {
                    showFlashError("No se pudo enviar el mail");
                    $('#btnEnviarMail').removeAttr('disabled');
                    $("#loader").hide();
                    backToTop();
                }
            });
        }
}