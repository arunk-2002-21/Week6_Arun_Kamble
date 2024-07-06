import { Router, Request, Response } from 'express'
import { authorDelete } from '../../controller/authorController/deleteAuthor'

const deleteAuthorRoute = Router();

deleteAuthorRoute.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const update: any = await authorDelete(req, res, id);
        return update
    } catch (error) {
        res.status(500).send('Error in deleteing author'+ error);
    }
})


export {
    deleteAuthorRoute
}