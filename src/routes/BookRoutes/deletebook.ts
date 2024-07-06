import e, { Router, Request, Response } from 'express'
import { deleteBook } from '../../controller/bookController/deleteBook'

const deleteBookRoute = Router();

deleteBookRoute.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const update: any = await deleteBook(req, res, id);
        return update
    } catch (error) {
        res.status(500).send('Error in deleteing book'+ error);
    }
})


export {
    deleteBookRoute
}