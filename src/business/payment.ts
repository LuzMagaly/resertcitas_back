import { selectAll, insertRow, deleteRow } from "../access/payment"

export const GetAll = async () => {
    return await selectAll()
}

export const Insert = async (Item: any) => {
    return await insertRow(Item)
}

export const Delete = async (Item: any) => {
    return await deleteRow(Item)
}