$(document).ready(function() {
    const regexpLetra = /[^A-Za-zÑñÁÉÍÓÚáéíóú +]/g;
    const regexpNumero = /[^0-9+]/g;

    function vacio(id_nombre, nombre) {
        if (id_nombre == "") {
            swal('Upps', `Ingresa tu ${nombre} por favor`, 'warning');
            return false;
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
                swal('Alerta en fecha de nacimiento', 'La fecha no es valida: Eres muy joven', 'warning');
                return false;
            } else if (edad > 99) {
                swal('Alerta en fecha de nacimiento', 'La fecha no es valida: Eres muy viejo', 'warning');
                return false;
            }
        }
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
        registro_fecha_nacimiento = validar_fecha($('#registro_fecha_nacimiento').val(), 'Fecha de Nacimiento')
        registro_materno = valida_texto($('#registro_materno').val(), 'Apellido Materno');
        registro_paterno = valida_texto($('#registro_paterno').val(), 'Apellido Paterno');
        registro_nombre = valida_texto($('#registro_nombre').val(), 'Nombre');

    });

});