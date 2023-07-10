import { Express, Request, Response } from 'express'
import { ValidateUser, VerifyEmail, updatePasswordRow } from '../business/auth'

export const Auth = (app: Express) => {
    app.post('/auth/login', async (req: Request, res: Response) => {
        const response = await ValidateUser(req.body.Credentials, req.body.KeepSessionOpen) //receive neverCloseSession
        res.send(response)
    })

    app.post('/auth/verifyEmail', async (req: Request, res: Response) => {
        const response = await VerifyEmail(req.body.Email)
        res.send(response)
    })

    app.post('/auth/updatePassword', async (req: Request, res: Response) => {
        const response = await updatePasswordRow(req.body.Item)
        res.send(response)
    })
}

export default Auth