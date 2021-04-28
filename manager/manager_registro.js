$(document).ready(function(){

    function valida_construccion_alfabetica(){
        
    }

    function valida_vacios(){
        if($('#registro_nombre').val() ==""){
            swal('Upps', 'Ingresa tu "nombre" por favor', 'warning');
            return false;
        }else if($('#registro_paterno').val()==""){
            swal('Upps', 'Ingresa tu "apellido paterno" por favor', 'warning');
            return false;
        }else if($('#registro_materno').val()==""){
            swal('Upps', 'Ingresa tu "apellido materno" por favor', 'warning');
            return false;
        }else if($('#registro_fecha_nacimiento').val()==""){
            swal('Upps', 'Ingresa tu "fecha de nacimiento" por favor', 'warning');
            return false;
        }else if($('#registro_telefono').val()==""){
            swal('Upps', 'Ingresa tu "telefono" por favor', 'warning');
            return false;
        }else if($('#registro_carrera').val()==""){
            swal('Upps', 'Selecciona tu carrera por favor', 'warning');
            return false;
        }else if($('#registro_mail').val()==""){
            swal('Upps', 'Ingresa tu "mail" por favor', 'warning');
            return false;
        }else if($('#registro_password').val()==""){
            swal('Upps', 'Ingresa tu "password" por favor', 'warning');
            return false;
        }else if($('#registro_password_confirmacion').val()==""){
            swal('Upps', 'Ingresa tu "confirmacion de password" por favor', 'warning');
            return false;
        }else{
            swal('Yeah', 'Todos los campos tienen algun valor', 'success');
            valida_construccion_alfabetica();
        }
    }

    $('#btn_registro_usuario').click(function(){
        valida_vacios();
    });

});