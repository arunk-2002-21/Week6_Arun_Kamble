import e, { Router, Request, Response } from 'express'
import { getAllReview } from '../../controller/reviewController/getReview'

const getBookReview = Router();

getBookReview.get('/:id?', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const allReview: any = await getAllReview(req, res, id);
        return allReview;
    } catch (error) {
        res.status(500).send('Error in getting all review' + error);
    }
})


export {
    getBookReview
}