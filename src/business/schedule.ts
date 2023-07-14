import { selectById, selectByDoctor, selectBySpecialty, insertRow, updateRow, selectBasicBySpecialty } from "../access/schedule"

export const GetOne = async (Id: number) => {
    return await selectById(Id)
}

export const GetByDoctor = async (Id: number) => {
    return await selectByDoctor(Id)
}

export const GetBySpecialty = async (Id: number[], Fecha: Date) => {
    return await selectBySpecialty(Id, Fecha)
}

export const GetBasicBySpecialty = async (Id: number[], Fecha: Date) => {
    return await selectBasicBySpecialty(Id, Fecha)
}

export const Insert = async (Items: any[]) => {
    return await insertRow(Items)
}

export const Update = async (Item: any) => {
    return await updateRow(Item)
}