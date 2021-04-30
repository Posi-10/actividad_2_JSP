$(document).ready(function() {

    function valida_confirmacion_password() {
        if ($('#registro_password').val() != $('#registro_password_confirmacion').val()) {
            swal('Upps', 'Las contraseñas no coinciden, favor de verificar', 'warnig');
            $('#registro_password_confirmacion').val("");
            return false;
        } else {
            registro_password = $('#registro_password').val();
            recolector_de_informacion = "registro_nombre" + registro_nombre +
                "&registro_paterno" + registro_paterno +
                "&registro_materno" + registro_materno +
                "&registro_fecha_nacimiento" + registro_fecha_nacimiento +
                "&registro_telefono" + registro_telefono +
                "&registro_carrera" + registro_carrera +
                "&registro_mail" + registro_mail +
                "&registro_password" + registro_password;
            $.ajax({
                type: 'POST',
                data: recolector_de_informacion,
                url: 'control/control_registro.php',
                success: resultado => {

                }
            });
        }
    }

    function valida_confirmacion_email() {
        if ($('#regitro_mail').val() != $('#registro_mail_confirmacion').val()) {
            swal('Upps', 'Los email´s no coinciden, favor de verificar', 'warnig');
            $('#registro_mail_confirmacion').val("");
            return false;
        } else {
            registro_mail = $('#registro_mail').val();
            valida_confirmacion_password();
        }
    }

    function valida_construccion_email() {
        cadena = $('#registro_mail').val();
        if (/^\w+([\-]?\w+)*@\w+([\-]?\w+)*(\.\w{2,4})+$/.test(cadena)) {
            valida_confirmacion_email();
        } else {
            swal('Upps', 'Ingresa un email valido por favor', 'warnig');
            return false;
        }
    }

    function valida_seleccion_carrera() {
        carrera = $('#registro_carrera').val();
        carrera = carrera.toUpperCase();
        if (carrera == 'SIS' || carrera == 'IND' || carrera == 'GES') {
            registro_carrera = carrera;
            valida_construccion_email();
        }
    }

    function valida_telefono() {
        telefono = $('#registro_telefono').val();
        telefono = parseInt(telefono);
        if (telefono < 0) {
            swal('Alerta en el telefono', 'No existen numeros de telefono NEGATIVOS', 'warning');
            return false;
        } else {
            telefono = telefono.toString();
            if (telefono.length < 10) {
                swal('Alerta en el telefono', 'No debes de tener mas de 10 digitos\nRecuerda que en la zona metropolitana los inician con 55 o 56\nEjemplo: 5554189163', 'warning');
                return false;
            } else if (telefono.length > 10) {
                swal('Alerta en el telefono', 'No debes de tener menos de 10 digitos\nRecuerda que en la zona metropolitana los inician con 55 o 56\nEjemplo: 5554189163', 'warning');
                return false;
            } else {
                registro_telefono = $('#registro_telefono').val();
                valida_seleccion_carrera();
            }
        }
    }

    function valida_fecha_nacimiento() {
        if ($('#registro_fecha_nacimiento').val() != "") {
            fecha_ingresada = $('#registro_fecha_nacimiento').val().split("-");
            edad = 2021 - fecha_ingresada[0];
            if (edad < 16) {
                swal('Alerta en fecha de nacimiento', 'La fecha no es valida: Eres muy joven', 'warning');
                return false;
            } else if (edad > 99) {
                swal('Alerta en fecha de nacimiento', 'La fecha no es valida: Eres muy viejo', 'warning');
                return false;
            } else {
                registro_fecha_nacimiento = $('#registro_fecha_nacimiento').val();
                valida_telefono();
            }
        }
    }

    function valida_construccion_alfabetica() {
        cadena = $('#registro_nombre').val();
        regexp1 = /\w\s/gi;
        regexp2 = /[^A-Z]\s/gi;
        resultado1 = cadena.match(regexp1);
        resultado2 = cadena.match(regexp2);
        if (resultado1 != null || resultado2 != null) {
            if (resultado1 == null) {
                resultado1 = "";
            }
            if (resultado2 == null) {
                resultado2 = "";
            }
            swal('Alerta en el Nombre...', 'Los siguientes caracteres no son validos:\n\n' + resultado1 + resultado2, 'warning');
            return false;
        } else {
            registro_nombre = $('#registro_nombre').val();
            registro_nombre = registro_nombre.trim();
            registro_nombre = registro_nombre.toUpperCase();
            cadena = $('#registro_paterno').val();
            resultado1 = cadena.match(regexp1);
            resultado2 = cadena.match(regexp2);
            if (resultado1 != null || resultado2 != null) {
                if (resultado1 == null) {
                    resultado1 = "";
                }
                if (resultado2 == null) {
                    resultado2 = "";
                }
                swal('Alerta en el Apellido Paterno...', 'Los siguientes caracteres no son validos:\n\n' + resultado1 + resultado2, 'warning');
                return false;
            } else {
                registro_paterno = $('#registro_paterno').val();
                registro_paterno = registro_paterno.trim();
                registro_paterno = registro_paterno.toUpperCase();
                cadena = $('#registro_materno').val();
                resultado1 = cadena.match(regexp1);
                resultado2 = cadena.match(regexp2);
                if (resultado1 != null || resultado2 != null) {
                    if (resultado1 == null) {
                        resultado1 = "";
                    }
                    if (resultado2 == null) {
                        resultado2 = "";
                    }
                    swal('Alerta en el Apellido Materno...', 'Los siguientes caracteres no son validos:\n\n' + resultado1 + resultado2, 'warning');
                    return false;
                } else {
                    registro_materno = $('#registro_materno').val();
                    registro_materno = registro_materno.trim();
                    registro_materno = registro_materno.toUpperCase();
                    resultado1 = cadena.match(regexp1);
                    resultado2 = cadena.match(regexp2);
                    valida_fecha_nacimiento();
                }
            }
        }
    }

    function valida_vacios() {
        if ($('#registro_nombre').val() == "") {
            swal('Upps', 'Ingresa tu "nombre" por favor', 'warning');
            return false;
        } else if ($('#registro_paterno').val() == "") {
            swal('Upps', 'Ingresa tu "apellido paterno" por favor', 'warning');
            return false;
        } else if ($('#registro_materno').val() == "") {
            swal('Upps', 'Ingresa tu "apellido materno" por favor', 'warning');
            return false;
        } else if ($('#registro_fecha_nacimiento').val() == "") {
            swal('Upps', 'Ingresa tu "fecha de nacimiento" por favor', 'warning');
            return false;
        } else if ($('#registro_telefono').val() == "") {
            swal('Upps', 'Ingresa tu "telefono" por favor', 'warning');
            return false;
        } else if ($('#registro_carrera').val() == "") {
            swal('Upps', 'Selecciona tu carrera por favor', 'warning');
            return false;
        } else if ($('#registro_mail').val() == "") {
            swal('Upps', 'Ingresa tu "mail" por favor', 'warning');
            return false;
        } else if ($('#registro_password').val() == "") {
            swal('Upps', 'Ingresa tu "password" por favor', 'warning');
            return false;
        } else if ($('#registro_password_confirmacion').val() == "") {
            swal('Upps', 'Ingresa tu "confirmacion de password" por favor', 'warning');
            return false;
        } else {
            valida_construccion_alfabetica();
        }
    }

    $('#btn_registro_usuario').click(function() {
        valida_vacios();
    });

});