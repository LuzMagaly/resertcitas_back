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
TRUNCATE public."Sesiones" RESTART IDENTITY CASCADE;

INSERT INTO public."Roles" ("Id", "Nombre", "Nivel") VALUES (1, 'Paciente', '1');
INSERT INTO public."Roles" ("Id", "Nombre", "Nivel") VALUES (2, 'Medico', '2');
INSERT INTO public."Roles" ("Id", "Nombre", "Nivel") VALUES (3, 'Administrador', '3');

INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Reservas', 'Reservar una cita', '1', '', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Pacientes', 'Administración de todo el módulo de pacientes', '1', 'patient', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Medicos', 'Administración de todo el módulo de médicos', '2', 'doctor', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Horarios', 'Administración de horarios', '1', 'timetable', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Agenda', 'Modificación de agendas', '2', 'schedules', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Citas', 'Administración de todo el módulo de citas', '3', 'appointment', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permisos', 'Acceso a la sección de pacientes', '3', 'permisions', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Usuarios', 'Acceso a la sección de pacientes', '3', 'users', 'Activo');

INSERT INTO public."Usuarios" ("Id_Rol", "DNI", "Nombres", "Apellido_Paterno", "Apellido_Materno", "Fecha_Nacimiento", "Direccion", "Telefono", "Correo", "Estado", "Contrasenia", "Sexo", "Foto", "Creado_Por", "Actualizado_Por", "Creado_En", "Actualizado_En")
VALUES (3, '12345678', 'Joaquin', 'Medina', 'Salas', '2002-08-19', 'Calle Los Álamos 203', '987654321', 'joaquinmedina@gmail.com', 'Activo', '1234', 'M', NULL, 1, NULL, '2022-11-15 23:50', NULL);

INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Creado_Por", "Creado_En") VALUES (2, 1, 1, '2022-11-15 23:50');
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Creado_Por", "Creado_En") VALUES (2, 3, 1, '2022-11-15 23:50');
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Creado_Por", "Creado_En") VALUES (2, 5, 1, '2022-11-15 23:50');
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Creado_Por", "Creado_En") VALUES (3, 1, 1, '2022-11-15 23:50');
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Creado_Por", "Creado_En") VALUES (3, 2, 1, '2022-11-15 23:50');
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Creado_Por", "Creado_En") VALUES (3, 3, 1, '2022-11-15 23:50');
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Creado_Por", "Creado_En") VALUES (3, 4, 1, '2022-11-15 23:50');
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Creado_Por", "Creado_En") VALUES (3, 5, 1, '2022-11-15 23:50');
INSERT INTO public."RolPermiso" ("Id_Rol", "Id_Permiso", "Creado_Por", "Creado_En") VALUES (3, 6, 1, '2022-11-15 23:50');

INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Urgencias', 'Atención rápida para casos de gravedad', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Medicina general', 'Diagnóstico general', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Odontología', 'Cuidado de los dientes y salud bucal', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Psicología', 'Cuidado de la salud mental', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Pediatría', 'Cuidado del niño', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Ginecología y obstetricia', 'Cuidado de la salud reproductora', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Oftalmología', 'Cuidado de la vista', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Otorrinolaringología', 'Salud auditiva', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Oncología', 'Detección de cáncer', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Rehabilitación', 'Terapias de recuperación', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Laboratorios clínicos', 'Análisis y diagnóstico', 'Activo');
INSERT INTO public."Especialidades" ("Nombre", "Descripcion", "Estado") VALUES ('Radiología', 'Rayos X', 'Activo');

INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Urgencias', 'Piso 1', '1');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Medicina general', 'Piso 1', '2');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Odontología', 'Piso 1', '3');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Psicología', 'Piso 1', '4');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Pediatría', 'Piso 1', '5');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Ginecología y obstetricia', 'Piso 1', '6');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Oftalmología', 'Piso 1', '7');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Otorrinolaringología', 'Piso 1', '8');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Cardiología', 'Piso 1', '9');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Oncología', 'Piso 2', '10');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Rehabilitación', 'Piso 2', '11');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Laboratorios clínicos', 'Piso 2', '12');
INSERT INTO public."Consultorios" ("Nombre", "Ubicacion", "Estado") VALUES ('Consultorio de Radiología', 'Piso 2', '13');
















COMMIT;