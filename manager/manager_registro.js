$(document).ready(function() {

    function valida_construccion_alfabetica() {

    }

    function valida_vacios() {
        if ($('#registro_nombre').val() == "") {
            swal('Upps', 'Ingresa tu "Nombre" por favor', 'warning');
            return false;
        } else if ($('#registro_paterno').val() == "") {
            swal('Upps', 'Ingresa tu "Apellido Paterno" por favor', 'warning');
            return false;
        } else if ($('#registro_materno').val() == "") {
            swal('Upps', 'Ingresa tu "Apellido Materno" por favor', 'warning');
            return false;
        } else if ($('#registro_fecha_nacimiento').val() == "") {
            swal('Upps', 'Ingresa tu "Fecha de Nacimiento" por favor', 'warning');
            return false;
        } else if ($('#registro_telefono').val() == "") {
            swal('Upps', 'Ingresa tu "Telefono" por favor', 'warning');
            return false;
        } else if ($('#registro_carrera').val() == "") {
            swal('Upps', 'Selecciona tu carrera, por favor', 'warning');
            return false;
        } else if ($('#registro_mail').val() == "") {
            swal('Upps', 'Ingresa tu "Apellido Paterno" por favor', 'warning');
            return false;
        } else if ($('#registro_password').val() == "") {
            swal('Upps', 'Ingresa tu "Apellido Paterno" por favor', 'warning');
            return false;
        } else if ($('#registro_password_confirmar').val() == "") {
            swal('Upps', 'Ingresa tu "Apellido Paterno" por favor', 'warning');
            return false;
        } else {
            swal('Correcto', 'Todos los valores tienen un valor', 'success');
        }
    }

    $('#btn_registro_usuario').click(function() {
        valida_vacios();
    });
});