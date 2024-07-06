import { Router, Request, Response } from 'express'
import { getAllRating } from '../../controller/ratingController/getRating'

const getAllRatingRoute = Router();

getAllRatingRoute.get('/:id?', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const allReview: any = await getAllRating(req, res, id);
        return allReview;
    } catch (error) {
        res.status(500).send('Error in getting all rating' + error);
    }
})


export {
    getAllRatingRoute
}