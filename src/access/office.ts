import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectAll = async () => {
        return await prisma.consultorios.findMany({
            select: {
                Id: true,
                Nombre: true,
                Ubicacion: true,
                Estado: true
            }
        });
    }

    export const selectById = async (Id: number) => {
        return await prisma.consultorios.findMany({
            where: {
                Id: (Id)
            },
            select: {
                Id: true,
                Nombre: true,
                Ubicacion: true,
                Estado: true
            }
        });
    }

//#endregion