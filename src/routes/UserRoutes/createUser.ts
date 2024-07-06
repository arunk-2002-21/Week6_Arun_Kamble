import { Router, Request, Response } from 'express'
import {addNewUser} from '../../controller/userController/createUser'


const createUserRoute = Router();

createUserRoute.post('/',async (req: Request, res: Response) => {
    try {
        const newUser: any = await addNewUser(req, res);
        }catch(error){
            res.status(500).send('Error in creating new user' + error);
        }
})

export {
    createUserRoute
}