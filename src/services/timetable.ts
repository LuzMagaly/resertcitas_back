import { Express, Request, Response } from 'express'
import { GetOne, GetByDoctor, GetBySpecialty, Insert, Update, GetBySpecialtyWidthDoctor } from '../business/timetable'

export const Timetable = (app: Express) => {
    app.post('/timetable/getOne/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetOne(req.body.Id)
        res.send(response)
    })

    app.post('/timetable/getByDoctor/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetByDoctor(req.body.Id)
        res.send(response)
    })

    app.post('/timetable/getBySpecialty/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetBySpecialty(req.body.Id, req.body.Day)
        res.send(response)
    })

    app.post('/timetable/getBySpecialtyWidthDoctor/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetBySpecialtyWidthDoctor(req.body.Id, req.body.Day)
        res.send(response)
    })

    app.post('/timetable/save/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Insert(req.body.Items)
        res.send(response)
    })

    app.post('/timetable/update/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Update(req.body.Item)
        res.send(response)
    })
}

export default Timetable