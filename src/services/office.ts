import { Express, Request, Response } from 'express'
import { GetAll, GetOne, GetOneBySpecialty } from '../business/office'

export const Office = (app: Express) => {
    app.post('/office/getAll/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetAll()
        res.send(response)
    })

    app.post('/office/getOne/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetOne(req.body.Id)
        res.send(response)
    })

    app.post('/office/getBySpecialty/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetOneBySpecialty(req.body.Id)
        res.send(response)
    })
}

export default Office