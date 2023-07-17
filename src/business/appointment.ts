import { selectById, selectByPatient, insertRow, updateRow, selectByDate } from "../access/appointment"

export const GetOne = async (Id: number) => {
    return await selectById(Id)
}

export const GetByPatient = async (Options: any) => {
    return await selectByPatient(Options)
}

export const GetByDate = async (Options: any) => {
    return await selectByDate(Options)
}

export const Insert = async (Item: any) => {
    return await insertRow(Item)
}

export const Update = async (Item: any) => {
    return await updateRow(Item)
}