
function showPopover(){
    $("#btn-share").popover({
        html : true,
        container : '#btn-share',
        content: function() {
            return $('#popoverExampleHiddenContent').html();
        },
        template: '<div class="popover" role="tooltip"><div class="popover-content"></div></div>'
    });

    $(document).click(function (event) {
        // hide share button popover
        if (!$(event.target).closest('#btn-share').length) {
            $('#btn-share').popover('hide')
        }
    });

    $("a.twitter").attr("href", "https://twitter.com/home?status=" + window.location.href);
    $("a.facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href);

}

function ParametrosMail() {
    this.emailDestino;
    this.asunto;
    this.aviso;
    this.captcha;


    this.removeCssError = function(obj,span) {
        obj.css("border", "solid 1px #ccc");
        span.text("");
        obj.focus( function() {
            obj.css("box-shadow", "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)");
        });
        obj.focusout( function() {
            obj.css("box-shadow", "");
        });
    };

    this.addCssError = function(obj, span, msg) {
        msg=setDefault(msg,"Debe completar este campo")
        obj.css("border", "1px solid #d9534f");
        span.text(msg);
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
    };


    this.cargarDatos= function (seccion, idAviso, fechaPublicacion, habilitarCaptcha)
    {
        this.emailDestino=$('#inputPara').val();
        this.asunto=$('#inputAsunto').val();
        this.aviso=$('#inputAviso').val();
        this.seccion=seccion;
        this.idAviso=idAviso;
        this.fechaPublicacion=fechaPublicacion;
        if (habilitarCaptcha === 'true'){
            this.captcha=grecaptcha.getResponse();
        }
        else{
            this.captcha = "";
        }

    };

    // Validador de Campos
    this.validarCampos = function() {
        var msg = "";

        patt = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        email = $("#inputPara");
        if (this.emailDestino.length < 1){
            this.addCssError(email, $("#spanPara"));

            msg = msg + "- El destinatario es requerido";
        }else{
            if(!patt.test(this.emailDestino)) {
                this.addCssError(email, $("#spanPara"), "Formato de email incorrecto");
                msg = msg + "- No es un email valido";
            }else{
                this.removeCssError(email, $("#spanPara"));
            }
        }

        var asunto = $("#inputAsunto");
        if (this.asunto.length < 1){
            this.addCssError(asunto, $("#spanAsunto"));

            msg = msg + "- El Asunto es requerido";
        }else{
            this.removeCssError(asunto, $("#spanAsunto"));
        }

        return msg;

    }


}

function shareMail(sv_url, seccion, idAviso, fechaPublicacion, habilitarCaptcha)
{
    params = new ParametrosMail();
    params.cargarDatos(seccion, idAviso, fechaPublicacion, habilitarCaptcha);
    var msg = params.validarCampos();
    if( msg === ""){
        deshabilitarCamposSharing();
        $.ajax({
            url : sv_url,
            dataType : "json",
            type : "POST",
            data : {
                params : JSON.stringify(this.params)
            },
            success : function(response) {
                if (response["error"] !== 0){
                    mensaje = "No se pudo enviar el mail.";
                    cantidadMensajesError = response["mensajes"].length;
                    if (cantidadMensajesError > 0){
                        mensaje += " Verifique los campos completados:<br><ul class='mensajes-validacion'>";
                        for(i=0; i<cantidadMensajesError; i++){
                            mensaje+= "<li>"+response["mensajes"][i]+"</li>";
                        }
                        mensaje += "</ul>"
                    }
                    showFlashWarning(mensaje, true);
                    $('#shareMailBtn').removeAttr('disabled');
                }
                else{
                    showFlashSucced("Mail enviado correctamente");
                    $("#shareMailModal").modal("hide");
                }
                habilitarCamposSharing();
            },
            error : function(e, asd, ss) {
                showFlashError("No se pudo enviar el mail");
                $("#shareMailModal").modal("hide");
                habilitarCamposSharing();
            }
        });
    }
}

function deshabilitarCamposSharing(){
    $("#shareMailBtn").addClass('disabled state-loading').attr('disabled', 'disabled');
    $("#inputPara").addClass("disabled").attr('disabled', 'disabled');
    $("#inputAsunto").addClass("disabled").attr('disabled', 'disabled');
}

function habilitarCamposSharing(){
    $("#shareMailBtn").removeClass('disabled state-loading').removeAttr('disabled');
    $("#inputPara").removeClass("disabled").removeAttr('disabled');
    $("#inputAsunto").removeClass("disabled").removeAttr('disabled');
}

function shareTW(){
    window.open("https://twitter.com/share?url="+document.URL+"&amp;");
}

function shareFB(){
    window.open("http://www.facebook.com/sharer.php?u="+document.URL);
}