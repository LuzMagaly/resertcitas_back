import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectAll = async () => {
        return await prisma.pagos.findMany({
            select: {
                Id: true,
                Id_Cita: true,
                Citas: {
                    select: {
                        AgendaCalendario_Citas_Id_AgendaCalendarioToAgendaCalendario: {
                            select:{
                                Consultorios: {
                                    select: {
                                        Nombre: true,
                                        Ubicacion: true
                                    }
                                },
                                Medicos: {
                                    select: {
                                        Usuarios_Medicos_Id_UsuarioToUsuarios: {
                                            select: {
                                                Nombres: true,
                                                Apellido_Paterno: true,
                                                Apellido_Materno: true,
                                                Foto: true
                                            }
                                        },
                                        Especialidades: {
                                            select: {
                                                Nombre: true,
                                                Descripcion: true
                                            }
                                        },
                                        Codigo: true,
                                        Grado_Instruccion: true
                                    },
                                },
                                Hora_Inicio: true,
                                Hora_Fin: true,
                                Turno: true,
                                Fecha: true
                            }
                        },
                        Pacientes: {
                            select: {
                                Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                                    select: {
                                        DNI: true,
                                        Nombres: true,
                                        Apellido_Paterno: true,
                                        Apellido_Materno: true
                                    }
                                }
                            }
                        },
                        Estado: true
                    }
                },
                Codigo: true,
                Monto: true
            }
        });
    }

//#endregion

//#region [ SAVE ]

    export const insertRow = async (item: any) => {
        try {
            return await prisma.pagos.create({
                data: {
                    Id_Cita: (item.Id_Cita),
                    Codigo: (item.Codigo),
                    Monto: (item.Monto),
                    Creado_Por: (item.Creado_Por)
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

    export const deleteRow = async (item: any) => {
        try {
            return await prisma.pagos.delete({
                where: {
                    Id: parseInt(item.Id)
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

//#endregion