import { Router, Request, Response } from 'express'
import {authenticateUser} from '../../controller/userController/authenticateUser'


const authenticateUserRoute = Router();

authenticateUserRoute.get('/', async (req: Request, res: Response) => {
    try {
        const authUser: any = await authenticateUser(req, res);
        res.send(authUser)
        }catch(error){
            res.status(500).send('Error in authenticate user' + error);
        }
})

export {
    authenticateUserRoute
}