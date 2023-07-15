import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectById = async (filters: any) => {
        return await prisma.citas.findFirst({
            where: {
                Id: parseInt(filters.Id)
            },
            select: {
                Id: true,
                Id_AgendaCalendario: true,
                Id_Paciente: true,
                AgendaCalendario: {
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
                Boucher: true,
                Monto: true,
                Estado: true
            }
        });
    }

    export const selectByPatient = async (filters: any) => {
        console.log(filters)
        return await prisma.citas.findMany({
            where: {
                OR: [
                    {
                        Pacientes: {
                            Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                                Nombres: (filters.Nombres)
                            }
                        }
                    },
                    {
                        Pacientes: {
                            Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                                Apellido_Paterno: (filters.Apellido_Paterno)
                            }
                        }
                    },
                    {
                        Pacientes: {
                            Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                                Apellido_Materno: (filters.Apellido_Materno)
                            }
                        }
                    },
                    {
                        Pacientes: {
                            Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                                DNI: (filters.DNI)
                            }
                        }
                    },
                    {
                        Pacientes: {
                            Id: (filters.Id)
                        }
                    }
                ]
            },
            select: {
                Id: true,
                Id_AgendaCalendario: true,
                Id_Paciente: true,
                AgendaCalendario: {
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
                Boucher: true,
                Monto: true,
                Estado: true
            }
        });
    }

//#endregion

//#region [ SAVE ]

    export const insertRow = async (item: any) => {
        try {
            return await prisma.citas.create({
                data: {
                    Id_AgendaCalendario: parseInt(item.Id_AgendaCalendario),
                    Id_Paciente: parseInt(item.Id_Paciente),
                    Creado_Por: (item.Creado_Por),
                    Estado: 'PENDIENTE'
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

    export const updateRow = async (item: any) => {
        try {
            return await prisma.citas.update({
                where: {
                    Id: parseInt(item.Id)
                },
                data: {
                    Id_AgendaCalendario: parseInt(item.Id_AgendaCalendario),
                    Id_Paciente: parseInt(item.Id_Paciente),
                    Boucher: (item.Boucher),
                    Monto: parseInt(item.Monto),
                    Actualizado_Por: (item.Creado_Por),
                    Actualizado_En: new Date().toISOString(),
                    Estado: (item.Estado)
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

//#endregion