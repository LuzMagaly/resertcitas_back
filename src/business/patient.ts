import { selectAll, selectById, selectByUser, insertRow, updateRow, deleteRow } from "../access/patient"

export const GetAll = async () => {
    return await selectAll()
}

export const GetOne = async (Id: number) => {
    return await selectById(Id)
}

export const GetByUser = async (Options: any) => {
    return await selectByUser(Options)
}

export const Insert = async (Item: any) => {
    return await insertRow(Item)
}

export const Update = async (Item: any) => {
    return await updateRow(Item)
}

export const Delete = async (Item: any) => {
    return await deleteRow(Item)
}