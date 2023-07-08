import { Express, Request, Response } from 'express'
import { GetAll, GetOne, FindUser, Insert, Update, UpdatePassword } from '../business/user'

export const User = (app: Express) => {
    app.post('/user/getAll/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetAll()
        res.send(response)
    })

    app.post('/user/getOne/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await GetOne(req.body.Id)
        res.send(response)
    })

    app.post('/user/Find/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await FindUser(req.body.Options)
        res.send(response)
    })

    app.post('/user/save/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Insert(req.body.Item)
        res.send(response)
    })

    app.post('/user/update/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await Update(req.body.Item)
        res.send(response)
    })

    app.post('/user/changePass/', async (req: Request, res: Response) => {
        //Validate permisions!!!
        const response = await UpdatePassword(req.body.Item)
        res.send(response)
    })
}

export default User


/**
    Replace :: //Validate permisions!!!

import { isAuthorized } from '../core/authorized'

if(!!!isAuthorized(req.body.token, '')){
            res.sendStatus(404)
            return
        }

 */