import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectAllWithPermisions = async () => {
        return await prisma.roles.findMany({
            select: {
                Id: true,
                Nombre: true,
                Nivel: true,
                RolPermiso:{
                    select:{
                        Id: true,
                        Id_Rol: true,
                        Id_Permiso: true,
                        Creado_Por: true,
                        Creado_En: true
                    }
                }
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