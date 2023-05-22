import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectAll = async () => {
        return await prisma.roles.findMany({
            select: {
                Id: true,
                Nombre: true,
                Nivel: true,
            }
        });
    }

    export const selectOne = async (Id: number) => {
        return await prisma.roles.findFirst({
            where: {
                Id: Id
            },
            select: {
                Id: true,
                Nombre: true,
                Nivel: true,
            }
        });
    }

//#endregion