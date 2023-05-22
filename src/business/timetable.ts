import { selectById, selectByDoctor, selectBySpecialty, insertRow, updateRow } from "../access/timetable"

export const GetOne = async (Id: number) => {
    return await selectById(Id)
}

export const GetByDoctor = async (Id: number) => {
    return await selectByDoctor(Id)
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