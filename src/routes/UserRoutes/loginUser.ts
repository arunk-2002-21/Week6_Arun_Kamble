import { Router, Request, Response } from 'express'
import {loginUser} from '../../controller/userController/loginUser'


const loginUserRoute = Router();

loginUserRoute.post('/',async (req: Request, res: Response) => {
    try {
        const user: any = await loginUser(req, res);
        res.send(user)
        }catch(error){
            res.status(500).send('Error in login user' + error);
        }
})

export {
    loginUserRoute
}