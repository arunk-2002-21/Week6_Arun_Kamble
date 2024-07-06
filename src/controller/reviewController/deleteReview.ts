import { Request, Response } from "express";
import { reviewsDeleteUpdate } from '../../service/reviewServices/deleteReviewService'


export const reviewDelete = async (req: Request, res: Response, id: any) => {
    const review = await reviewsDeleteUpdate(req.body, id);
    res.send(review)
}