import { Request, Response } from 'express';
import { authUser } from '../../service/userServices/authUser';


export const authenticateUser = async (req: Request, res: Response)=>{
    const userData = await authUser(req.body);
    res.send(userData)
}