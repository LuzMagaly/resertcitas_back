import { prisma } from '../core/database'

//#region [ SELECT ]

    export const selectAll = async () => {
        return await prisma.pacientes.findMany({
            select: {
                Id: true,
                Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                    select: {
                        Id: true,
                        DNI: true,
                        Nombres: true,
                        Apellido_Paterno: true,
                        Apellido_Materno: true,
                        Fecha_Nacimiento: true,
                        Direccion: true,
                        Telefono: true,
                        Sexo: true,
                        Foto: true
                    }
                },
                Contacto_Emergencia: true,
                Numero_Emergencia_1: true,
                Numero_Emergencia_2: true,
                Tiene_Alergias: true,
                Alergias: true,
                Tipo_Sangre: true,
                Factor_Sangre: true,
                Donacion_Organos: true
            }
        });
    }

    export const selectById = async (Id: number) => {
        return await prisma.pacientes.findFirst({
            where: {
                Id: Id
            },
            select: {
                Id: true,
                Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                    select: {
                        DNI: true,
                        Nombres: true,
                        Apellido_Paterno: true,
                        Apellido_Materno: true,
                        Fecha_Nacimiento: true,
                        Direccion: true,
                        Telefono: true,
                        Sexo: true,
                        Foto: true
                    }
                },
                Contacto_Emergencia: true,
                Numero_Emergencia_1: true,
                Numero_Emergencia_2: true,
                Tiene_Alergias: true,
                Alergias: true,
                Tipo_Sangre: true,
                Factor_Sangre: true,
                Donacion_Organos: true
            }
        });
    }

    export const selectByUser = async (filters: any) => {
        return await prisma.pacientes.findMany({
            where: {
                OR: [
                    {
                        Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                            Nombres: (filters.Nombres)
                        }
                    },
                    {
                        Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                            Apellido_Paterno: (filters.Apellido_Paterno)
                        }
                    },
                    {
                        Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                            Apellido_Materno: (filters.Apellido_Materno)
                        }
                    },
                    {
                        Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                            DNI: (filters.DNI)
                        }
                    }
                ]
            },
            select: {
                Id: true,
                Usuarios_Pacientes_Id_UsuarioToUsuarios: {
                    select: {
                        DNI: true,
                        Nombres: true,
                        Apellido_Paterno: true,
                        Apellido_Materno: true,
                        Fecha_Nacimiento: true,
                        Direccion: true,
                        Telefono: true,
                        Sexo: true,
                        Foto: true
                    }
                },
                Contacto_Emergencia: true,
                Numero_Emergencia_1: true,
                Numero_Emergencia_2: true,
                Tiene_Alergias: true,
                Alergias: true,
                Tipo_Sangre: true,
                Factor_Sangre: true,
                Donacion_Organos: true
            }
        });
    }


//#endregion

//#region [ SAVE ]

    export const insertRow = async (item: any) => {
        try {
            return await prisma.pacientes.create({
                data: {
                    Id_Usuario: parseInt(item.Id_Usuario),
                    Contacto_Emergencia: (item.Contacto_Emergencia),
                    Numero_Emergencia_1: (item.Numero_Emergencia_1),
                    Numero_Emergencia_2: (item.Numero_Emergencia_2),
                    Tiene_Alergias: parseInt(item.Tiene_Alergias),
                    Alergias: (item.Alergias),
                    Tipo_Sangre: (item.Tipo_Sangre),
                    Factor_Sangre: (item.Factor_Sangre),
                    Donacion_Organos: parseInt(item.Donacion_Organos),
                    Creado_Por: parseInt(item.Creado_Por)
                }
            });
        }
        catch (err: any) {
            return err.message;
        }
    }

    export const updateRow = async (item: any) => {
        try {
            return await prisma.pacientes.update({
                where: {
                    Id: parseInt(item.Id)
                },
                data: {
                    Contacto_Emergencia: (item.Contacto_Emergencia),
                    Numero_Emergencia_1: (item.Numero_Emergencia_1),
                    Numero_Emergencia_2: (item.Numero_Emergencia_2),
                    Tiene_Alergias: parseInt(item.Tiene_Alergias),
                    Alergias: (item.Alergias),
                    Tipo_Sangre: (item.Tipo_Sangre),
                    Factor_Sangre: (item.Factor_Sangre),
                    Donacion_Organos: (item.Donacion_Organos),
                    Actualizado_Por: (item.Actualizado_Por),
                    Actualizado_En: new Date().toISOString()
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