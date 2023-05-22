import { Express, Request, Response } from 'express'
import { GetAll, GetOne, GetByUser, Insert, Update, Delete } from '../business/patient'

export const Patient = (app: Express) => {
    app.post('/patient/getAll/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetAll()
        res.send(response)
    })

    app.post('/patient/getOne/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetOne(req.body.Id)
        res.send(response)
    })

    app.post('/patient/getByUser/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetByUser(req.body.Id)
        res.send(response)
    })

    app.post('/patient/save/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Insert(req.body.Item)
        res.send(response)
    })

    app.post('/patient/update/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Update(req.body.Item)
        res.send(response)
    })

    app.post('/patient/delete/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Delete(req.body.Id)
        res.send(response)
    })
}

export default Patient