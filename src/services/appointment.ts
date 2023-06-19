import { Express, Request, Response } from 'express'
import { GetOne, GetByPatient, Insert, Update } from '../business/appointment'

export const Appointment = (app: Express) => {
    app.post('/appointment/getOne/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetOne(req.body.Id)
        res.send(response)
    })

    app.post('/appointment/getByPatient/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetByPatient(req.body.Id)
        res.send(response)
    })

    app.post('/appointment/save/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        //Use transactions to massive inserts :)
        const response = await Insert(req.body.Item)
        res.send(response)
    })

    app.post('/appointment/update/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Update(req.body.Item)
        res.send(response)
    })
}

export default Appointment