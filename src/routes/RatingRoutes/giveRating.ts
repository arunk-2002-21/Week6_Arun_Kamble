import  { Router, Request, Response } from 'express'
import { assignNewRating } from '../../controller/ratingController/assignRating'

const ratingRoute = Router();

ratingRoute.post('/:id?', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const rating: any = await assignNewRating(req, res, id);
        return rating;
    } catch (error) {
        res.status(500).send('Error in assigning rating' + error);
    }
})

export {
    ratingRoute
}