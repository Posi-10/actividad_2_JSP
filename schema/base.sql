CREATE TABLE IF NOT EXISTS usuario(
  id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre_usuario VARCHAR(45) NOT NULL,
  paterno_usuario VARCHAR(45) NOT NULL,
  materno_usuario VARCHAR(45) NOT NULL,
  fecha_nacimiento_usuario DATE NOT NULL,
  telefono_usuario VARCHAR(45) NOT NULL,
  carrera_usuario VARCHAR(45) NOT NULL,
  mail_usuario VARCHAR(45) NOT NULL,
  password_usuario VARCHAR(45)NOT NULL,
  subio_archivo INT DEFAULT 0,
  dda_autorizo INT DEFAULT 0,
  rf_autorizo INT DEFAULT 0,
  habilitar_examen INT DEFAULT 0,
  calificacion_usuario INT DEFAULT 0,
  rol INT NOT NULL DEFAULT 0
)ENGINE=InnoDB 