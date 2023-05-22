import { selectAll, selectById, selectByUser, selectBySpecialty, insertRow, updateRow } from "../access/doctor"

export const GetAll = async () => {
    return await selectAll()
}

export const GetOne = async (Id: number) => {
    return await selectById(Id)
}

export const GetByUser = async (Options: any) => {
    return await selectByUser(Options)
}

export const GetBySpecialty = async (Id: number) => {
    return await selectBySpecialty(Id)
}

export const Insert = async (Item: any) => {
    return await insertRow(Item)
}

export const Update = async (Item: any) => {
    return await updateRow(Item)
}