import { Request, Response } from 'express'
import { userLogin } from '../../service/userServices/LoginUser'


export const loginUser = async (req: Request, res: Response)=>{
    const userData = await userLogin(req.body);
    res.send(userData);
}