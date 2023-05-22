import { selectAll, selectById } from "../access/office"

export const GetAll = async () => {
    return await selectAll()
}

export const GetOne = async (Id: number) => {
    return await selectById(Id)
}