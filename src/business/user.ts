import { selectAll, selectById, selectByFilters, insertRow, updateRow } from "../access/user"

export const GetAll = async () => {
    return await selectAll()
}

export const GetOne = async (Id: number) => {
    return await selectById(Id)
}

export const FindUser = async (Options: any) => {
    return await selectByFilters(Options)
}

export const Insert = async (Item: any) => {
    return await insertRow(Item)
}

export const Update = async (Item: any) => {
    return await updateRow(Item)
}

export const UpdatePassword = async (Item: any) => {
    return await updateRow(Item)
}