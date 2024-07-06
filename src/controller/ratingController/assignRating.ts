import { Request, Response } from 'express'
import { newRating } from '../../service/ratingService/giveRating'


export const assignNewRating = async (req: Request, res: Response, id: any)=>{
    const giveRating = await newRating(req.body, id);
    res.send(giveRating);
}