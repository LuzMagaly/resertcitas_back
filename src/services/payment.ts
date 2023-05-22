import { Express, Request, Response } from 'express'
import { GetAll, Insert, Delete } from '../business/payment'

export const Payment = (app: Express) => {
    app.post('/payment/getAll/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetAll()
        res.send(response)
    })

    app.post('/payment/save/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Insert(req.body.Item)
        res.send(response)
    })

    app.post('/payment/delete/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Delete(req.body.Item)
        res.send(response)
    })
}

export default Payment