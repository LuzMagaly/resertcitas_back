import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectAll = async () => {
        return await prisma.especialidades.findMany({
            select: {
                Id: true,
                Nombre: true,
                Descripcion: true,
                Estado: true
            }
        });
    }

    export const selectById = async (Id: number) => {
        return await prisma.especialidades.findMany({
            where: {
                Id: (Id)
            },
            select: {
                Id: true,
                Nombre: true,
                Descripcion: true,
                Estado: true
            }
        });
    }

//#endregion