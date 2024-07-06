import e, { Router, Request, Response } from 'express'
import { updateBook } from '../../controller/bookController/updateBook'

const updateBookRoute = Router();

updateBookRoute.post('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedBook: any = await updateBook(req, res, id);
        return updatedBook;
    } catch (error) {
        res.status(500).send('Error in updating book'+ error);
    }
})

export {
    updateBookRoute
}