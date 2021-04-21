<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Posi</title>
    <!--Requiere etiquetas meta-->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="utf-8">
    <?php 
      require_once 'app/config.php';
      require_once 'app/dependencias.php';
    ?>
  </head>
  <body>
    <?php
      if(isset($_GET['vista_solicitada'])){
        switch($_GET['vista_solicitada']){
          case 'login':
            require_once 'view/login.php';
            break;
          case 'registro':
            require_once 'view/registro.php';
            break;
          default:
            require_once 'index.php';
            break;
        }
      }else{
        require_once 'view/login.php';
      }
    ?>
  </body>
</html>