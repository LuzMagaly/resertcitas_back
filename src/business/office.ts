import { selectAll, selectById, selectBySpecialty } from "../access/office"

export const GetAll = async () => {
    return await selectAll()
}

export const GetOne = async (Id: number) => {
    return await selectById(Id)
}

export const GetOneBySpecialty = async (Id: string) => {
    return await selectBySpecialty(Id)
}