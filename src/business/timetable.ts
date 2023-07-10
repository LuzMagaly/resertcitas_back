import { selectById, selectByDoctor, selectBySpecialty, insertRow, updateRow, selectBySpecialtyWithDoctor } from "../access/timetable"

export const GetOne = async (Id: number) => {
    return await selectById(Id)
}

export const GetByDoctor = async (Id: number) => {
    return await selectByDoctor(Id)
}

export const GetBySpecialty = async (Id: number[], Day: string) => {
    return await selectBySpecialty(Id, Day)
}

export const GetBySpecialtyWidthDoctor = async (Id: number[], Day: string) => {
    return await selectBySpecialtyWithDoctor(Id, Day)
}

export const Insert = async (Items: any) => {
    return await insertRow(Items)
}

export const Update = async (Item: any) => {
    return await updateRow(Item)
}