import { Express } from 'express'
//import { RegisterUser, ValidateUser } from '../business/user';

export const Auth = (app: Express) => {
    app.post('/auth/login/', async (req: any, res: any) => {
        console.log('Logging method');
        //const response = await ValidateUser(req.body.Credentials);
        res.send('Loged');
    });
}

export default Auth;