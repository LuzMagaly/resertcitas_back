import { selectAll } from "../access/permision"
import { selectAllWithPermisions } from "../access/rol"
import { insertRow } from "../access/rolPermision"

export const getAllPermisions = async () => {
    return await selectAll()
}

export const getAllRoles = async () => {
    return await selectAllWithPermisions()
}

export const insertPermisionsRol = async (Items: any[]) => {
    return await insertRow(Items)
}