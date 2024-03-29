import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectByRol = async (Id_Rol: number) => {
        return await prisma.rolPermiso.findMany({
            where: {
                Id_Rol: Id_Rol
            },
            select: {
                Id: true,
                Id_Rol: true,
                Id_Permiso: true,
                Creado_Por: true,
                Creado_En: true
            }
        });
    }

//#endregion

//#region [ SAVE ]

export const insertRow = async (items: any[]) => {
    try {
        await prisma.rolPermiso.deleteMany({
            where: {
                Id_Rol: (items[0].Id_Rol)
            }
        });
        const result_insert = await items.map(async (item: any) => {
            const result = await prisma.rolPermiso.create({
                data: {
                    Id_Rol: (item.Id_Rol),
                    Id_Permiso: (item.Id_Permiso),
                    Creado_Por: (item.Creado_Por)
                }
            });
            return result
        })
        return result_insert
    }
    catch (err: any) {
        return err.message;
    }
}

export const deleteRow = async (Id: number) => {
    try {
        return await prisma.rolPermiso.delete({
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
