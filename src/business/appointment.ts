import { selectById, selectByPatient, insertRow, updateRow } from "../access/appointment"

export const GetOne = async (Id: number) => {
    return await selectById(Id)
}

export const GetByPatient = async (Options: any) => {
    return await selectByPatient(Options)
}

export const Insert = async (Item: any) => {
    return await insertRow(Item)
}

export const Update = async (Item: any) => {
    return await updateRow(Item)
}