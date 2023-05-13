import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectAll = async () => {
        return await prisma.usuarios.findMany({
            select: {
                Id: true,
                Nombres: true,
                Apellidos: true,
                Username:true,
                Email:true,
                Foto:true,
                Direccion:true,
                Telefono:true,
                FechaNacimiento:true,
                Celular:true,
                Sexo:true,
                Created:true,
            }
        });
    }

    export const selectById = async (Id: any) => {
        return await prisma.usuarios.findMany({
            where: {
                Id: parseInt(Id)
            },
            select: {
                Id: true,
                Nombres: true,
                Apellidos: true,
                Username:true,
                Email:true,
                Foto:true,
                Direccion:true,
                Telefono:true,
                FechaNacimiento:true,
                Celular:true,
                Sexo:true,
                Created:true,
            }
        });
    }

    export const selectByUsername = async (Username: string, Password: string) => {
        return await prisma.usuarios.findMany({
            where: {
                OR: [
                    {
                        Username: Username,
                    },
                    {
                        Email: Username,
                    },
                    {
                        Celular: Username,
                    }
                ],
                Pasword: Password
            },
            select: {
                Id: true,
                Nombres: true,
                Apellidos: true,
                Username:true,
                Email:true,
                Foto:true,
                Direccion:true,
                Telefono:true,
                FechaNacimiento:true,
                Celular:true,
                Sexo:true,
                Created:true
            }
        });
    }

//#endregion


//#region [ SAVE ]

    export const insertRow = async (item: any) => {
        try {
            return await prisma.usuarios.create({
                data: {
                Nombres: (item.Nombres),
                Apellidos: (item.Apellidos),
                Username:(item.Username),
                Pasword:(item.Pasword),
                Email:(item.Email),
                Foto:(item.Foto),
                Direccion:(item.Direccion),
                Telefono:(item.Telefono),
                FechaNacimiento:new Date(item.FechaNacimiento).toDateString(),
                Celular:(item.Celular),
                Sexo:parseInt(item.Sexo),
                Created:new Date().toISOString(),
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

    export const updateRow = async (item: any) => {
        try {
            return await prisma.usuarios.update({
                where: {
                    Id: parseInt(item.Id)
                },
                data: {
                    Nombres: (item.Nombres),
                    Apellidos: (item.Apellidos),
                    Username:(item.Username),
                    Pasword:(item.Pasword),
                    Email:(item.Email),
                    Foto:(item.Foto),
                    Direccion:(item.Direccion),
                    Telefono:(item.Telefono),
                    FechaNacimiento:new Date(item.FechaNacimiento).toDateString(),
                    Celular:(item.Celular),
                    Sexo:parseInt(item.Sexo),
                    Created:new Date().toISOString(),
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

    export const deleteRow = async (item: any) => {
        try {
            return await prisma.usuarios.delete({
                where: {
                    Id: parseInt(item.Id)
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

//#endregion

