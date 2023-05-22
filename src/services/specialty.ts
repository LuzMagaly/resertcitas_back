import { Express, Request, Response } from 'express'
import { GetAll, GetOne } from '../business/specialty'

export const Specialty = (app: Express) => {
    app.post('/specialty/getAll/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetAll()
        res.send(response)
    })

    app.post('/specialty/getOne/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetOne(req.body.Id)
        res.send(response)
    })
}

export default Specialty