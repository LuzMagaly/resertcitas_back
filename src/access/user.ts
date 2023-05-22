import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectAll = async () => {
        return await prisma.usuarios.findMany({
            select: {
                Id: true,
                DNI: true,
                Nombres: true,
                Apellido_Paterno: true,
                Apellido_Materno: true,
                Fecha_Nacimiento: true,
                Direccion: true,
                Telefono: true,
                Correo: true,
                Estado:true,
                Sexo:true,
                Foto:true,
                Roles: {
                    select: {
                        Nombre: true
                    }
                },
                Creado_Por: true,
                Actualizado_Por: true,
                Creado_En: true,
                Actualizado_En: true
            }
        });
    }

    export const selectById = async (Id: number) => {
        return await prisma.usuarios.findFirst({
            where: {
                Id: Id
            },
            select: {
                Id: true,
                DNI: true,
                Nombres: true,
                Apellido_Paterno: true,
                Apellido_Materno: true,
                Fecha_Nacimiento: true,
                Direccion: true,
                Telefono: true,
                Correo: true,
                Estado:true,
                Sexo:true,
                Foto:true,
                Roles: {
                    select: {
                        Nombre: true
                    }
                },
                Creado_Por: true,
                Actualizado_Por: true,
                Creado_En: true,
                Actualizado_En: true
            }
        });
    }

    export const selectByFilters = async (filters: any) => {
        return await prisma.usuarios.findMany({
            where: {
                OR: [
                    {
                        DNI: (filters.DNI)
                    },
                    {
                        Nombres: (filters.Nombres)
                    },
                    {
                        Apellido_Paterno: (filters.Apellido_Paterno)
                    },
                    {
                        Apellido_Materno: (filters.Apellido_Materno)
                    },
                    {
                        Sexo: (filters.Sexo)
                    }
                ]
            },
            select: {
                Id: true,
                DNI: true,
                Nombres: true,
                Apellido_Paterno: true,
                Apellido_Materno: true,
                Fecha_Nacimiento: true,
                Direccion: true,
                Telefono: true,
                Correo: true,
                Estado:true,
                Sexo:true,
                Foto:true,
                Roles: {
                    select: {
                        Nombre: true
                    }
                },
                Creado_Por: true,
                Actualizado_Por: true,
                Creado_En: true,
                Actualizado_En: true
            }
        });
    }

    export const selectByCredentials = async (Email: string, Password: string) => {
        return await prisma.usuarios.findFirst({
            where: {
                AND: [
                    {
                        Correo: Email,
                    },
                    {
                        Contrasenia: Password,
                    }
                ]
            },
            select: {
                Id: true,
                Id_Rol: true,
                DNI: true,
                Nombres: true,
                Apellido_Paterno: true,
                Apellido_Materno: true,
                Fecha_Nacimiento: true,
                Direccion: true,
                Telefono: true,
                Correo: true,
                Estado: true,
                Contrasenia: true,
                Sexo: true,
                Foto: true,
                Creado_Por: true,
                Actualizado_Por: true,
                Creado_En: true,
                Actualizado_En: true,
                Roles: {
                    select: {
                        Nombre: true,
                        Nivel: true
                    }
                },
                RolPermiso_RolPermiso_Creado_PorToUsuarios: {
                    select: {
                        Permisos: {
                            select: {
                                Id: true,
                                Nombre: true,
                                Descripcion: true,
                                Nivel: true,
                                Objetivo: true,
                                Estado: true
                            }
                        }
                    }
                },
                UsuarioPermiso_UsuarioPermiso_Id_UsuarioToUsuarios: {
                    select: {
                        Permisos: {
                            select: {
                                Id: true,
                                Nombre: true,
                                Descripcion: true,
                                Nivel: true,
                                Objetivo: true,
                                Estado: true
                            }
                        }
                    }
                },
                Sesiones: {
                    select: {
                        Token: true,
                        Duracion: true,
                        Creado_En: true,
                        Actualizado_En: true
                    }
                }
            }
        });
    }

    export const selectByEmail = async (Email: string) => {
        return await prisma.usuarios.findMany({
            where: {
                Correo: Email
            },
            select: {
                Id: true
            }
        });
    }

//#endregion

//#region [ SAVE ]

    export const insertRow = async (item: any) => {
        try {
            return await prisma.usuarios.create({
                data: {
                    Id_Rol: parseInt(item.Id_Rol),
                    DNI: (item.DNI),
                    Nombres: (item.Nombres),
                    Apellido_Paterno: (item.Apellido_Paterno),
                    Apellido_Materno: (item.Apellido_Materno),
                    Fecha_Nacimiento: new Date(item.Fecha_Nacimiento).toDateString(),
                    Direccion: (item.Direccion),
                    Telefono: (item.Telefono),
                    Correo: (item.Correo),
                    Estado: (item.Estado),
                    Contrasenia: (item.Contrasenia),
                    Sexo: (item.Sexo),
                    Foto: (item.Foto),
                    Creado_Por: (item.Creado_Por)
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
                    Id_Rol: parseInt(item.Id_Rol),
                    DNI: (item.DNI),
                    Nombres: (item.Nombres),
                    Apellido_Paterno: (item.Apellido_Paterno),
                    Apellido_Materno: (item.Apellido_Materno),
                    Fecha_Nacimiento: new Date(item.Fecha_Nacimiento).toDateString(),
                    Direccion: (item.Direccion),
                    Telefono: (item.Telefono),
                    Correo: (item.Correo),
                    Estado: (item.Estado),
                    Sexo: (item.Sexo),
                    Foto: (item.Foto),
                    Actualizado_Por: (item.Actualizado_Por),
                    Actualizado_En: new Date().toISOString()
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

    export const updateRowPass = async (item: any) => {
        try {
            return await prisma.usuarios.update({
                where: {
                    Id: parseInt(item.Id)
                },
                data: {
                    Contrasenia: (item.Contrasenia),
                    Actualizado_Por: (item.Actualizado_Por),
                    Actualizado_En: new Date().toISOString()
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

//#endregion