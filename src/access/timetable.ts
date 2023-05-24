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

    export const selectBySpecialty = async (Id_Especialidad: number) => {
        return await prisma.horarios.findMany({
            where: {
                Medicos: {
                    Id_Especialidad: Id_Especialidad
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

    export const insertRow = async (item: any) => {
        try {
            return await prisma.horarios.create({
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