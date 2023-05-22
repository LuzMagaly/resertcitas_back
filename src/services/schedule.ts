import { Express, Request, Response } from 'express'
import { GetOne, GetByDoctor, GetBySpecialty, Insert, Update } from '../business/schedule'

export const Schedule = (app: Express) => {

    app.post('/schedule/getOne/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetOne(req.body.Id)
        res.send(response)
    })

    app.post('/schedule/getByDoctor/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetByDoctor(req.body.Id)
        res.send(response)
    })

    app.post('/schedule/getBySpecialty/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetBySpecialty(req.body.Id)
        res.send(response)
    })

    app.post('/schedule/save/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Insert(req.body.Item)
        res.send(response)
    })

    app.post('/schedule/update/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Update(req.body.Item)
        res.send(response)
    })
}

export default Schedule