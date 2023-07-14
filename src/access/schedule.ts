import { Prisma } from '@prisma/client';
import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectById = async (Id: number) => {
        return await prisma.agendaCalendario.findFirst({
            where: {
                Id: (Id)
            },
            select: {
                Id: true,
                Id_Consultorio: true,
                Consultorios: {
                    select: {
                        Nombre: true,
                        Ubicacion: true,
                        Estado: true
                    }
                },
                Id_Medico: true,
                Medicos: {
                    select: {
                        Usuarios_Medicos_Id_UsuarioToUsuarios: {
                            select:{
                                DNI: true,
                                Nombres: true,
                                Apellido_Paterno: true,
                                Apellido_Materno: true
                            }
                        },
                        Codigo: true,
                        Id_Especialidad: true,
                        Especialidades: {
                            select: {
                                Nombre: true,
                                Descripcion: true,
                                Estado: true
                            }
                        },
                        Grado_Instruccion: true
                    }
                },
                Hora_Inicio: true,
                Hora_Fin: true,
                Turno: true,
                Fecha: true,
                Estado: true
            }
        });
    }

    export const selectBySpecialty = async (Id_Especialidad: number[], Fecha: Date) => {
        return await prisma.agendaCalendario.findMany({
            where: {
                AND: {
                    Medicos: {
                        Id_Especialidad: {
                            in: Id_Especialidad
                        }
                    },
                    Fecha: new Date(Fecha).toISOString()
                }
            },
            select: {
                Id: true,
                Id_Consultorio: true,
                Consultorios: {
                    select: {
                        Nombre: true,
                        Ubicacion: true,
                        Estado: true
                    }
                },
                Id_Medico: true,
                Medicos: {
                    select: {
                        Usuarios_Medicos_Id_UsuarioToUsuarios: {
                            select:{
                                DNI: true,
                                Nombres: true,
                                Apellido_Paterno: true,
                                Apellido_Materno: true
                            }
                        },
                        Codigo: true,
                        Id_Especialidad: true,
                        Especialidades: {
                            select: {
                                Nombre: true,
                                Descripcion: true,
                                Estado: true
                            }
                        },
                        Grado_Instruccion: true
                    }
                },
                Hora_Inicio: true,
                Hora_Fin: true,
                Turno: true,
                Fecha: true,
                Estado: true
            }
        });
    }

    export const selectByDoctor = async (filters: any) => {
        return await prisma.agendaCalendario.findFirst({
            where: {
                Medicos: {
                    OR: [
                        {
                            Usuarios_Medicos_Id_UsuarioToUsuarios: {
                                Nombres: (filters.Nombres)
                            }
                        },
                        {
                            Usuarios_Medicos_Id_UsuarioToUsuarios: {
                                Apellido_Paterno: (filters.Apellido_Paterno)
                            }
                        },
                        {
                            Usuarios_Medicos_Id_UsuarioToUsuarios: {
                                Apellido_Materno: (filters.Apellido_Materno)
                            }
                        },
                        {
                            Usuarios_Medicos_Id_UsuarioToUsuarios: {
                                DNI: (filters.DNI)
                            }
                        }
                    ]
                }
            },
            select: {
                Id: true,
                Id_Consultorio: true,
                Consultorios: {
                    select: {
                        Nombre: true,
                        Ubicacion: true,
                        Estado: true
                    }
                },
                Id_Medico: true,
                Medicos: {
                    select: {
                        Usuarios_Medicos_Id_UsuarioToUsuarios: {
                            select:{
                                DNI: true,
                                Nombres: true,
                                Apellido_Paterno: true,
                                Apellido_Materno: true
                            }
                        },
                        Codigo: true,
                        Id_Especialidad: true,
                        Especialidades: {
                            select: {
                                Nombre: true,
                                Descripcion: true,
                                Estado: true
                            }
                        },
                        Grado_Instruccion: true
                    }
                },
                Hora_Inicio: true,
                Hora_Fin: true,
                Turno: true,
                Fecha: true,
                Estado: true
            }
        });
    }

    export const selectBasicBySpecialty = async (Id_Especialidad: number[], Fecha: Date) => {
        const query = `SELECT "MED"."Id_Especialidad", "ESP"."Nombre", CAST(COUNT("MED"."Id_Especialidad") AS INTEGER) AS "Citas"
        FROM public."Medicos" AS "MED"
        INNER JOIN PUBLIC."Especialidades" AS "ESP" ON "MED"."Id_Especialidad" = "ESP"."Id"
        INNER JOIN PUBLIC."AgendaCalendario" AS "AGE" on "AGE"."Id_Medico" = "MED"."Id"
        WHERE "AGE"."Fecha" = '${ new Date(Fecha).toISOString() }'
        AND "ESP"."Id" IN (${ Id_Especialidad.join() })
        AND "AGE"."Id" NOT IN (SELECT "Id_AgendaCalendario" FROM public."Citas")
        GROUP BY "MED"."Id_Especialidad", "ESP"."Nombre"`
        const result = await prisma.$queryRawUnsafe(query)
        return JSON.stringify(result)
    }

//#endregion

//#region [ SAVE ]

    export const insertRow = async (items: any[]) => {
        try {
            return await prisma.$transaction(
                async () => {
                    return items.map(async (item: any) => await prisma.agendaCalendario.create({
                        data: {
                            Id_Consultorio: parseInt(item.Id_Consultorio),
                            Id_Medico: parseInt(item.Id_Medico),
                            Hora_Inicio: new Date(item.Hora_Inicio).toISOString(),
                            Hora_Fin: new Date(item.Hora_Fin).toISOString(),
                            Turno: (item.Turno),
                            Fecha: (item.Fecha),
                            Estado: (item.Estado)
                        }
                    })
                    )
                },
                {
                    maxWait: 5000,
                    timeout: 10000,
                    isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
                }
            )
        }
        catch (err: any) {
            return err.message;
        }
    }

    export const updateRow = async (item: any) => {
        try {
            return await prisma.agendaCalendario.update({
                where: {
                    Id: parseInt(item.Id)
                },
                data: {
                    Id_Consultorio: parseInt(item.Id_Consultorio),
                    Id_Medico: parseInt(item.Id_Medico),
                    Hora_Inicio: new Date(item.Hora_Inicio).toISOString(),
                    Hora_Fin: new Date(item.Hora_Fin).toISOString(),
                    Turno: (item.Turno),
                    Fecha: (item.Fecha),
                    Estado: (item.Estado)
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

//#endregion