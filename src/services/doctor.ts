import { Express, Request, Response } from 'express'
import { GetAll, GetOne, GetByUser, GetBySpecialty, Insert, Update } from '../business/doctor'

export const Doctor = (app: Express) => {
    app.post('/doctor/getAll/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetAll()
        res.send(response)
    })

    app.post('/doctor/getOne/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetOne(req.body.Id)
        res.send(response)
    })

    app.post('/doctor/getByUser/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetByUser(req.body.Options)
        res.send(response)
    })

    app.post('/doctor/getBySpecialty/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetBySpecialty(req.body.Id)
        res.send(response)
    })

    app.post('/doctor/save/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Insert(req.body.Item)
        res.send(response)
    })

    app.post('/doctor/update/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Update(req.body.Item)
        res.send(response)
    })
}

export default Doctor