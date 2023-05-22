import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectById = async (Id: number) => {
        return await prisma.sesiones.findFirst({
            where: {
                Id_Usuario: (Id)
            },
            select: {
                Id: true,
                Id_Usuario: true,
                Token: true,
                Duracion: true,
                Creado_En: true,
                Actualizado_En: true
            }
        });
    }

//#endregion

//#region [ SAVE ]

    export const insertRow = async (item: any) => {
        try {
            return await prisma.sesiones.create({
                data: {
                    Id_Usuario: (item.Id_Usuario),
                    Token: (item.Token),
                    Duracion: (item.Duracion)
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

    export const updateRow = async (item: any) => {
        try {
            return await prisma.sesiones.update({
                where: {
                    Id: parseInt(item.Id)
                },
                data: {
                    Token: (item.Token),
                    Duracion: (item.Duracion),
                    Actualizado_En: new Date().toISOString()
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

//#endregion