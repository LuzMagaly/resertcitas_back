import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectByUser = async (Id_Usuario: number) => {
        return await prisma.usuarioPermiso.findMany({
            where: {
                Id_Usuario: Id_Usuario
            },
            select: {
                Id: true,
                Id_Usuario: true,
                Id_Permiso: true,
                Estado: true,
                Creado_Por: true,
                Creado_En: true
            }
        });
    }

//#endregion

//#region [ SAVE ]

export const insertRow = async (item: any) => {
    try {
        return await prisma.usuarioPermiso.create({
            data: {
                Id_Usuario: (item.Id_Usuario),
                Id_Permiso: (item.Id_Permiso),
                Estado: (item.Estado),
                Creado_Por: (item.Creado_Por)
            }
        });
    }
    catch (err: any) {
        return err.message;
    }
}

export const deleteRow = async (Id: number) => {
    try {
        return await prisma.usuarioPermiso.delete({
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
