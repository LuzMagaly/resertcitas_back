import { Express, Request, Response } from 'express'
import { GetOne, GetByPatient, Insert, Update } from '../business/appointment'
import { Socket } from 'socket.io'
import { GetBasicBySpecialty } from '../business/schedule'

export const Appointment = (app: Express, socket: Socket) => {
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
        console.log(req.body)
        const response = await Insert(req.body.Item)
        const result = await GetBasicBySpecialty([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], req.body.Select.Fecha) //req.body.Select.Id
        console.log(response)
        console.log(result)
        socket.broadcast.emit('CallBackAfterInsertAppointment', result) 
        console.log('Emmited to broadcast')
        res.send(response)
        console.log('Finished')
    })

    app.post('/appointment/update/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Update(req.body.Item)
        res.send(response)
    })
}

export default Appointment