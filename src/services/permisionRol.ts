import { Express, Request, Response } from 'express'
import { getAllPermisions, getAllRoles, insertPermisionsRol } from '../business/permisionRol'

export const PermisionRol = (app: Express) => {
    app.post('/permisions/getAll', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await getAllPermisions()
        res.send(response)
    })

    app.post('/roles/getAll', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await getAllRoles()
        res.send(response)
    })

    app.post('/permisionRol/insert', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await insertPermisionsRol(req.body.Items)
        res.send(response)
    })
}

export default PermisionRol