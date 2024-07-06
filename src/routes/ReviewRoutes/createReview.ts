import { Router, Request, Response } from 'express'
import { createNewReview } from '../../controller/reviewController/writeReview'

const writeReviewRoute = Router();

writeReviewRoute.post('/book/:id?', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const newReview: any = await createNewReview(req, res, id);
        return newReview
    } catch (error) {
        res.status(500).send('Error in creating new review' + error);
    }
})


export {
    writeReviewRoute
}