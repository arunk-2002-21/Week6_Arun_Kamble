import { Request, Response } from "express";
import { newReview } from '../../service/reviewServices/writeReviewService'


export const createNewReview = async (req: Request, res: Response, id: any) => {
    const review = await newReview(req.body, id);
    res.send(review);
}