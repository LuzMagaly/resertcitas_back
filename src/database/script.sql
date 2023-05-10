---  ONLY IF IT´S NECESSARY ---
ROLLBACK;


--- CLEAR DATABASE ---
BEGIN;

DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

COMMIT;


--- CREATE TABLES ---
BEGIN;

CREATE TABLE IF NOT EXISTS public."Roles"
(
    "Id" INTEGER NOT NULL,
    "Nombre" VARCHAR(255) NOT NULL,
    "Nivel" INTEGER NULL DEFAULT 0,
    CONSTRAINT "PK_Roles" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Permisos"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Nombre" VARCHAR(255) NOT NULL,
    "Descripcion" VARCHAR(1000) DEFAULT NULL,
    "Nivel" VARCHAR(2) DEFAULT NULL,
    "Objetivo" VARCHAR(200) DEFAULT NULL,
    "Estado" VARCHAR(20) NOT NULL,
    CONSTRAINT "PK_Permisos" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Usuarios"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Id_Rol" INTEGER REFERENCES public."Roles"("Id") MATCH SIMPLE NOT NULL DEFAULT 1,
    "DNI" VARCHAR(12) NOT NULL,
    "Nombres" VARCHAR(80) NOT NULL,
    "Apellido_Paterno" VARCHAR(80) NOT NULL,
    "Apellido_Materno" VARCHAR(80) NOT NULL,
    "Fecha_Nacimiento" VARCHAR(30) DEFAULT NULL,
    "Direccion" VARCHAR(80) DEFAULT NULL,
    "Telefono" VARCHAR(15) DEFAULT NULL,
    "Correo" VARCHAR(50) NOT NULL,
    "Estado" VARCHAR(20) NOT NULL,
    "Username" VARCHAR(30) NOT NULL,
    "Contraseña" VARCHAR(1000) NOT NULL,
    "Sexo" VARCHAR(20) NOT NULL,
    "Foto" TEXT DEFAULT NULL,
    "Creado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE ON DELETE SET NULL DEFAULT NULL,
    "Actualizado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE ON DELETE SET NULL DEFAULT NULL,
    "Creado_En" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "Actualizado_En" TIMESTAMPTZ DEFAULT NULL,
    CONSTRAINT "PK_Usuarios" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."RolPermiso"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Id_Rol" INTEGER REFERENCES public."Roles"("Id") MATCH SIMPLE NOT NULL,
    "Id_Permiso" INTEGER REFERENCES public."Permisos"("Id") MATCH SIMPLE NOT NULL,
    "Estado" VARCHAR(20) NOT NULL,
    "Creado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE NOT NULL,
    "Actualizado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE ON DELETE SET NULL DEFAULT NULL,
    "Creado_En" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "Actualizado_En" TIMESTAMPTZ DEFAULT NULL,
    CONSTRAINT "PK_RolPermiso" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."UsuarioPermiso"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Id_Usuario" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE NOT NULL,
    "Id_Permiso" INTEGER REFERENCES public."Permisos"("Id") MATCH SIMPLE NOT NULL,
    "Estado" VARCHAR(20) NOT NULL,
    "Creado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE NOT NULL,
    "Actualizado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE ON DELETE SET NULL DEFAULT NULL,
    "Creado_En" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "Actualizado_En" TIMESTAMPTZ DEFAULT NULL,
    CONSTRAINT "PK_UsuarioPermiso" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Especialidades"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Nombre" VARCHAR(255) NOT NULL,
    "Descripcion" VARCHAR(1000) DEFAULT NULL,
    "Estado" VARCHAR(20) NOT NULL,
    CONSTRAINT "PK_Especialidades" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Consultorios"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Nombre" VARCHAR(255) NOT NULL,
    "Ubicacion" VARCHAR(200) DEFAULT NULL,
    "Estado" VARCHAR(20) NOT NULL,
    CONSTRAINT "PK_Consultorios" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Pacientes"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Id_Usuario" INTEGER UNIQUE REFERENCES public."Usuarios"("Id") MATCH SIMPLE NOT NULL,
    "Aseguradora" VARCHAR(200) DEFAULT NULL,
    "Codigo_Seguro" VARCHAR(50) DEFAULT NULL,
    "Contacto_Emergencia" VARCHAR (300) DEFAULT NULL,
    "Numero_Emergencia_1" VARCHAR(50) DEFAULT NULL,
    "Numero_Emergencia_2" VARCHAR(50) DEFAULT NULL,
    "Numero_Emergencia_3" VARCHAR(50) DEFAULT NULL,
    "Alergias" VARCHAR(100) DEFAULT NULL,
    "Tipo_Sangre" VARCHAR(10) DEFAULT NULL,
    "Factor_Sangre" VARCHAR(2) DEFAULT NULL,
    "Donacion_Organos" VARCHAR(5) DEFAULT NULL,
    "Creado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE NOT NULL,
    "Actualizado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE ON DELETE SET NULL DEFAULT NULL,
    "Creado_En" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "Actualizado_En" TIMESTAMPTZ DEFAULT NULL,
    CONSTRAINT "PK_Pacientes" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Medicos"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Id_Usuario" INTEGER UNIQUE REFERENCES public."Usuarios"("Id") MATCH SIMPLE NOT NULL,
    "Codigo" VARCHAR(30) NOT NULL,
    "Id_Especialidad" INTEGER REFERENCES public."Especialidades"("Id") MATCH SIMPLE NOT NULL,
    "Grado_Instruccion" VARCHAR(100) DEFAULT NULL,
    "Creado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE NOT NULL,
    "Actualizado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE ON DELETE SET NULL DEFAULT NULL,
    "Creado_En" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "Actualizado_En" TIMESTAMPTZ DEFAULT NULL,
    CONSTRAINT "PK_Medicos" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Horarios"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Id_Medico" INTEGER REFERENCES public."Medicos"("Id") MATCH SIMPLE NOT NULL,
    "Hora_Inicio" VARCHAR(50) NOT NULL,
    "Hora_Fin" VARCHAR(50) NOT NULL,
    "Dia_Nombre" VARCHAR(10) NOT NULL,
    "Numero_Semana" VARCHAR(2) NOT NULL,
    "Dia_Numero" VARCHAR(3) DEFAULT NULL,
    "Mes" VARCHAR(20) DEFAULT NULL,
    "Anio" VARCHAR(4) DEFAULT NULL,
    "Codigo" VARCHAR(200) DEFAULT NULL,
    "Estado" VARCHAR(20) NOT NULL,
    CONSTRAINT "PK_Horarios" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."AgendaCalendario"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Id_Consultorio" INTEGER REFERENCES public."Consultorios"("Id") MATCH SIMPLE NOT NULL,
    "Id_Especialidad" INTEGER REFERENCES public."Especialidades"("Id") MATCH SIMPLE NOT NULL,
    "Id_Medico" INTEGER REFERENCES public."Medicos"("Id") MATCH SIMPLE NOT NULL,
    "Hora_Inicio" VARCHAR(50) NOT NULL,
    "Hora_Fin" VARCHAR(50) NOT NULL,
    "Turno" VARCHAR(20) NOT NULL,
    "Fecha" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "Estado" VARCHAR(20) NOT NULL,
    CONSTRAINT "PK_AgendaCalendario" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Citas"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Id_AgendaCalendario" INTEGER REFERENCES public."AgendaCalendario"("Id") MATCH SIMPLE NOT NULL,
    "Id_Pago" INTEGER REFERENCES public."AgendaCalendario"("Id") MATCH SIMPLE ON DELETE SET NULL DEFAULT NULL,
    "Id_Paciente" INTEGER REFERENCES public."Pacientes"("Id") MATCH SIMPLE NOT NULL,
    "Creado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE NOT NULL,
    "Actualizado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE ON DELETE SET NULL DEFAULT NULL,
    "Creado_En" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "Actualizado_En" TIMESTAMPTZ DEFAULT NULL,
    "Estado" VARCHAR(20) NOT NULL,
    CONSTRAINT "PK_Citas" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS public."Pagos"
(
    "Id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Id_Cita" INTEGER REFERENCES public."Citas"("Id") MATCH SIMPLE NOT NULL,
    "Codigo" VARCHAR(50) NOT NULL,
    "Monto" NUMERIC NOT NULL DEFAULT 0,
    "Creado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE NOT NULL,
    "Actualizado_Por" INTEGER REFERENCES public."Usuarios"("Id") MATCH SIMPLE ON DELETE SET NULL DEFAULT NULL,
    "Creado_En" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "Actualizado_En" TIMESTAMPTZ DEFAULT NULL,
    CONSTRAINT "PK_Pagos" PRIMARY KEY ("Id")
);

END;



--- CLEAR ALL DATA ---
BEGIN;

TRUNCATE public."Roles" RESTART IDENTITY CASCADE;
TRUNCATE public."Permisos" RESTART IDENTITY CASCADE;
TRUNCATE public."Usuarios" RESTART IDENTITY CASCADE;
TRUNCATE public."RolPermiso" RESTART IDENTITY CASCADE;
TRUNCATE public."UsuarioPermiso" RESTART IDENTITY CASCADE;
TRUNCATE public."Especialidades" RESTART IDENTITY CASCADE;
TRUNCATE public."Consultorios" RESTART IDENTITY CASCADE;
TRUNCATE public."Pacientes" RESTART IDENTITY CASCADE;
TRUNCATE public."Medicos" RESTART IDENTITY CASCADE;
TRUNCATE public."Horarios" RESTART IDENTITY CASCADE;
TRUNCATE public."AgendaCalendario" RESTART IDENTITY CASCADE;
TRUNCATE public."Citas" RESTART IDENTITY CASCADE;
TRUNCATE public."Pagos" RESTART IDENTITY CASCADE;

COMMIT;


--- ADD BASIC DATA ---
BEGIN;

INSERT INTO public."Roles" ("Id", "Nombre", "Nivel") VALUES (1, 'Paciente', '1');
INSERT INTO public."Roles" ("Id", "Nombre", "Nivel") VALUES (2, 'Medico', '2');
INSERT INTO public."Roles" ("Id", "Nombre", "Nivel") VALUES (3, 'Administrador', '3');

INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Pacientes', 'Administración de todo el módulo de pacientes', '1', 'patient', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Medicos', 'Administración de todo el módulo de médicos', '2', 'doctor', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Horarios', 'Administración de horarios', '1', 'schedules', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Agenda', 'Modificación de agendas', '2', 'timetable', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Citas', 'Administración de todo el módulo de citas', '3', 'appointment', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Pagos', 'Acceso a la sección de pacientes', '3', 'payments', 'Activo');

INSERT INTO public."Usuarios" ("Id_Rol", "DNI", "Nombres", "Apellido_Paterno", "Apellido_Materno", "Fecha_Nacimiento", "Direccion", "Telefono", "Correo", "Estado", "Username", "Contraseña", "Sexo", "Foto", "Creado_Por", "Actualizado_Por", "Creado_En", "Actualizado_En") 
VALUES (3, '12345678', 'Joaquin', 'Medina', 'Salas', '2002-08-19', 'Calle Los Álamos 203', '987654321', 'joaquinmedina@gmail.com', 'Activo', 'jmedina', '1234', 'Masculino', NULL, 1, NULL, '2022-11-15 23:50', NULL);

INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Estado", "Creado_Por", "Actualizado_Por", "Creado_En", "Actualizado_En") VALUES (2, 1, 'Activo', 1, NULL, '2022-11-15 23:50', NULL);
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Estado", "Creado_Por", "Actualizado_Por", "Creado_En", "Actualizado_En") VALUES (2, 3, 'Activo', 1, NULL, '2022-11-15 23:50', NULL);
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Estado", "Creado_Por", "Actualizado_Por", "Creado_En", "Actualizado_En") VALUES (2, 5, 'Activo', 1, NULL, '2022-11-15 23:50', NULL);
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Estado", "Creado_Por", "Actualizado_Por", "Creado_En", "Actualizado_En") VALUES (3, 1, 'Activo', 1, NULL, '2022-11-15 23:50', NULL);
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Estado", "Creado_Por", "Actualizado_Por", "Creado_En", "Actualizado_En") VALUES (3, 2, 'Activo', 1, NULL, '2022-11-15 23:50', NULL);
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Estado", "Creado_Por", "Actualizado_Por", "Creado_En", "Actualizado_En") VALUES (3, 3, 'Activo', 1, NULL, '2022-11-15 23:50', NULL);
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Estado", "Creado_Por", "Actualizado_Por", "Creado_En", "Actualizado_En") VALUES (3, 4, 'Activo', 1, NULL, '2022-11-15 23:50', NULL);
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Estado", "Creado_Por", "Actualizado_Por", "Creado_En", "Actualizado_En") VALUES (3, 5, 'Activo', 1, NULL, '2022-11-15 23:50', NULL);
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Estado", "Creado_Por", "Actualizado_Por", "Creado_En", "Actualizado_En") VALUES (3, 6, 'Activo', 1, NULL, '2022-11-15 23:50', NULL);

INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Urgencias', 'Atención rápida para casos de gravedad', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Medicina general', 'Diagnóstico general', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Odontología', 'Cuidado de los dientes y salud bucal', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Psicología', 'Cuidado de la salud mental', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Pediatría', 'Cuidado del niño', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Ginecología y obstetricia', 'Cuidado de la salud reproductora', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Oftalmología', 'Cuidado de la vista', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Otorrinolaringología', 'Salud auditiva', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Cardiología', 'Diagnóstico de problemas del corazón', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Oncología', 'Detección de cáncer', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Rehabilitación', 'Terapias de recuperación', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Laboratorios clínicos', 'Análisis y diagnóstico', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Radiología', 'Rayos X', 'Activo');

INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('101', 'Piso 1', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('102', 'Piso 1', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('103', 'Piso 1', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('104', 'Piso 1', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('105', 'Piso 1', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('106', 'Piso 1', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('107', 'Piso 1', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('108', 'Piso 1', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('109', 'Piso 1', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('201', 'Piso 2', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('202', 'Piso 2', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('203', 'Piso 2', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('204', 'Piso 2', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('205', 'Piso 2', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('206', 'Piso 2', 'Activo');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('207', 'Piso 2', 'Activo');

COMMIT;