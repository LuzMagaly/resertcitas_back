import { prisma } from '../core/database'
import Doctor from '../services/doctor';

//#region [ SELECT ]

    export const selectAll = async () => {
        return await prisma.medicos.findMany({
            select: {
                Id: true,
                Usuarios_Medicos_Id_UsuarioToUsuarios: {
                    select: {
                        Nombres: true,
                        Apellido_Paterno: true,
                        Apellido_Materno: true,
                        Foto: true
                    }
                },
                Especialidades: {
                    select: {
                        Nombre: true,
                        Descripcion: true,
                        Id: true
                    }
                },
                Codigo: true,
                Grado_Instruccion: true
            }
        });
    }

    export const selectById = async (Id: number) => {
        return await prisma.medicos.findFirst({
            where: {
                Id: Id
            },
            select: {
                Id: true,
                Usuarios_Medicos_Id_UsuarioToUsuarios: {
                    select: {
                        Nombres: true,
                        Apellido_Paterno: true,
                        Apellido_Materno: true,
                        Foto: true
                    }
                },
                Especialidades: {
                    select: {
                        Nombre: true,
                        Descripcion: true,
                        Id: true
                    }
                },
                Codigo: true,
                Grado_Instruccion: true
            }
        });
    }

    export const selectByUser = async (filters: any) => {
        return await prisma.medicos.findMany({
            where: {
                OR: [
                    {
                        Usuarios_Medicos_Id_UsuarioToUsuarios: {
                            Nombres: (filters.Nombres)
                        }
                    },
                    {
                        Usuarios_Medicos_Id_UsuarioToUsuarios: {
                            Apellido_Paterno: (filters.Apellido_Paterno)
                        }
                    },
                    {
                        Usuarios_Medicos_Id_UsuarioToUsuarios: {
                            Apellido_Materno: (filters.Apellido_Materno)
                        }
                    },
                    {
                        Usuarios_Medicos_Id_UsuarioToUsuarios: {
                            DNI: (filters.DNI)
                        }
                    }
                ]
            },
            select: {
                Id: true,
                Usuarios_Medicos_Id_UsuarioToUsuarios: {
                    select: {
                        Nombres: true,
                        Apellido_Paterno: true,
                        Apellido_Materno: true,
                        Foto: true
                    }
                },
                Especialidades: {
                    select: {
                        Nombre: true,
                        Descripcion: true,
                        Id: true
                    }
                },
                Codigo: true,
                Grado_Instruccion: true
            }
        });
    }

    export const selectBySpecialty = async (Id_Especialidad: number) => {
        return await prisma.medicos.findFirst({
            where: {
                Id_Especialidad: Id_Especialidad
            },
            select: {
                Id: true,
                Usuarios_Medicos_Id_UsuarioToUsuarios: {
                    select: {
                        Nombres: true,
                        Apellido_Paterno: true,
                        Apellido_Materno: true,
                        Foto: true
                    }
                },
                Especialidades: {
                    select: {
                        Nombre: true,
                        Descripcion: true,
                        Id: true
                    }
                },
                Codigo: true,
                Grado_Instruccion: true
            }
        });
    }

//#endregion

//#region [ SAVE ]

    export const insertRow = async (item: any) => {
        try {
            return prisma.medicos.create({
                data: {
                    Id_Usuario: parseInt(item.Id_Usuario),
                    Codigo: (item.Codigo),
                    Id_Especialidad: parseInt(item.Id_Especialidad),
                    Grado_Instruccion: (item.Grado_Instruccion),
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
            return await prisma.medicos.update({
                where: {
                    Id: parseInt(item.Id)
                },
                data: {
                    Codigo: (item.Codigo),
                    Id_Especialidad: parseInt(item.Id_Especialidad),
                    Grado_Instruccion: (item.Grado_Instruccion),
                    Actualizado_Por: (item.Creado_Por),
                    Actualizado_En: new Date().toISOString()
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

//#endregion