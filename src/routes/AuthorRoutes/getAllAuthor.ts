import e, { Router, Request, Response } from 'express'
import { getAllAuthor } from '../../controller/authorController/getAllAuthor'

const getAllAuthorRoute = Router();

getAllAuthorRoute.get('/:id?', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const allAuthor: any = await getAllAuthor(req, res, id);
        return allAuthor
    } catch (error) {
        res.status(500).send('Error in getting all authors' + error);
    }
})

export {
    getAllAuthorRoute
}