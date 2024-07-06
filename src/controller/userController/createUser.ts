import { Request, Response } from 'express'
import { addUser } from '../../service/userServices/createUser'


export const addNewUser = async (req: Request, res: Response)=>{
    const user = await addUser(req.body);
    res.send(user);
}