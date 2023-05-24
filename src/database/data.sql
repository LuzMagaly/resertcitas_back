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

INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Pacientes', 'Administración de todo el módulo de pacientes', '1', 'patient', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Medicos', 'Administración de todo el módulo de médicos', '2', 'doctor', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Horarios', 'Administración de horarios', '1', 'schedules', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Agenda', 'Modificación de agendas', '2', 'timetable', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Citas', 'Administración de todo el módulo de citas', '3', 'appointment', 'Activo');
INSERT INTO public."Permisos" ("Nombre", "Descripcion", "Nivel", "Objetivo", "Estado") VALUES ('Permiso_Pagos', 'Acceso a la sección de pacientes', '3', 'payments', 'Activo');

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