import { Prisma } from '@prisma/client';
import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectById = async (Id: number) => {
        return await prisma.horarios.findFirst({
            where: {
                Id: Id
            },
            select: {
                Id: true,
                Id_Medico: true,
                Hora_Inicio: true,
                Hora_Fin: true,
                Dia_Nombre: true,
                Estado: true
            }
        });
    }

    export const selectByDoctor = async (Id_Medico: number) => {
        return await prisma.horarios.findMany({
            where: {
                Id_Medico: Id_Medico
            },
            select: {
                Id: true,
                Id_Medico: true,
                Hora_Inicio: true,
                Hora_Fin: true,
                Dia_Nombre: true,
                Estado: true
            }
        });
    }

    export const selectBySpecialty = async (Id_Especialidad: number[], day: string) => {
        return await prisma.horarios.findMany({
            where: {
                AND: {
                    Medicos: {
                        Id_Especialidad: {
                            in: Id_Especialidad
                        }
                    },
                    Dia_Nombre: day
                }
            },
            select: {
                Id: true,
                Id_Medico: true,
                Hora_Inicio: true,
                Hora_Fin: true,
                Dia_Nombre: true,
                Estado: true
            }
        });
    }

//#endregion

//#region [ SAVE ]

    export const insertRow = async (Items: any) => {
        try {
            //USANDO TRANSACCIONES: ELIMINAR HORARIO EXISTENTE Y CREAR UNO NUEVO, TODO EN UNA SOLA TRANSACCION
            return await prisma.$transaction(
                async () => {
                    //ELIMINACION DEL HORARIO EXISTENTE
                    const result_delete = await prisma.horarios.deleteMany({
                        where: {
                            Id_Medico: Items[0].Id_Medico
                        }
                    })
                    //CREACION DEL HORARIO EXISTENTE
                    const result_insert = await Items.map(async (item: any) => {
                        console.log('inserting')
                        const result = await prisma.horarios.create({
                            data: {
                                Id_Medico: (item.Id_Medico),
                                Hora_Inicio: (item.Hora_Inicio),
                                Hora_Fin: (item.Hora_Fin),
                                Dia_Nombre: (item.Dia_Nombre),
                                Estado: (item.Estado)
                            }
                        })
                        console.log(result)
                        return result
                    }
                    )
                    console.log(result_insert)
                    return result_insert
                },
                {
                    maxWait: 10000,
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
            return await prisma.horarios.update({
                where: {
                    Id: parseInt(item.Id)
                },
                data: {
                    Id_Medico: (item.Id_Medico),
                    Hora_Inicio: (item.Hora_Inicio),
                    Hora_Fin: (item.Hora_Fin),
                    Dia_Nombre: (item.Dia_Nombre),
                    Estado: (item.Estado)
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

    export const deleteRow = async (Id: number) => {
        try {
            return await prisma.horarios.delete({
                where: {
                    Id: Id
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

//#endregion