import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectAll = async () => {
        return await prisma.permisos.findMany({
            select: {
                Id: true,
                Nombre: true,
                Descripcion: true,
                Nivel: true,
                Objetivo: true,
                Estado: true
            }
        });
    }

    export const selectOne = async (Id: number) => {
        return await prisma.permisos.findFirst({
            where: {
                Id: Id
            },
            select: {
                Id: true,
                Nombre: true,
                Descripcion: true,
                Nivel: true,
                Objetivo: true,
                Estado: true
            }
        });
    }

//#endregion