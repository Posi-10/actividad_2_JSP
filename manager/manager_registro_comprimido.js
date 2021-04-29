$(document).ready(function() {
    const regexpLetra = /[^A-Za-zÑñÁÉÍÓÚáéíóú +]/g;

    function vacio(id_nombre, nombre) {
        if (id_nombre == "" || id_nombre == " ") {
            swal('Upps', `Ingresa tu ${nombre} por favor`, 'warning');
            return false;
        }
    }

    function validar_numero(id_nombre, nombre) {
        telefono = id_nombre.toString();
        if (telefono == "") {
            swal('Upps', `Ingresa tu ${nombre} por favor`, 'warning');
            return false;
        } else {
            if (telefono.length < 10) {
                swal('Alerta en el telefono', 'No debes de tener menos de 10 digitos\nRecuerda que en la zona metropolitana los inician con 55 o 56\nEjemplo: 5554189163', 'warning');
                return false;
            } else {
                return id_nombre;

            }
        }
    }

    function validar_fecha(id_nombre, nombre) {
        vacio(id_nombre, nombre);
        if (id_nombre != "") {
            fecha_ingresada = id_nombre.split("-");
            fecha_actual = new Date();
            edad = fecha_actual.getFullYear() - fecha_ingresada[0];
            if (fecha_actual.getMonth() < (fecha_ingresada[1] - 1)) {
                --edad;
            } else if (fecha_actual.getDate() < fecha_ingresada[2] && fecha_actual.getMonth() == (fecha_ingresada[1] - 1)) {
                --edad;
            }
            if (edad < 16) {
                swal('Alerta en fecha de nacimiento', `La fecha no es valida: Eres muy joven\nTienes: ${edad}`, 'warning');
                return false;
            } else if (edad > 99) {
                swal('Alerta en fecha de nacimiento', `La fecha no es valida: Eres muy viejo\nTienes: ${edad}`, 'warning');
                return false;
            }
        }
        return id_nombre;
    }

    function valida_texto(id_nombre, nombre) {
        vacio(id_nombre, nombre);
        expreccion = id_nombre.match(regexpLetra);
        if (expreccion != null) {
            if (expreccion == null) {
                expreccion = "";
            }
            swal(`Alerta en el ${nombre}...`, `Los siguientes caracteres no son validos:\n\n${expreccion}`, 'warning');
            return false;
        }
        valor = id_nombre;
        valor = valor.trim().toUpperCase();
        return valor;
    }
    $('#btn_registro_usuario').click(function() {
        registro_telefono = validar_numero($('#registro_telefono').val(), 'Telefono');
        registro_fecha_nacimiento = validar_fecha($('#registro_fecha_nacimiento').val(), 'Fecha de Nacimiento');
        registro_materno = valida_texto($('#registro_materno').val(), 'Apellido Materno');
        registro_paterno = valida_texto($('#registro_paterno').val(), 'Apellido Paterno');
        registro_nombre = valida_texto($('#registro_nombre').val(), 'Nombre');

    });

});