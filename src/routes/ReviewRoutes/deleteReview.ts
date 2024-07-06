import e, { Router, Request, Response } from 'express'
import { reviewDelete } from '../../controller/reviewController/deleteReview'

const deleteReview = Router();

deleteReview.delete('/:id?', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const reviewUpdate: any = await reviewDelete(req, res, id);
        return reviewUpdate;
    } catch (error) {
        res.status(500).send('Error in deleting review' + error);
    }
})


export {
    deleteReview
}