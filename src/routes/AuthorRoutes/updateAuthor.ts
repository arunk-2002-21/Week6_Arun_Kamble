import e, { Router, Request, Response } from 'express'
import { updateAuthor } from '../../controller/authorController/updateAuthor'

const updateAuthorRoute = Router();

updateAuthorRoute.post('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedAuthor: any = await updateAuthor(req, res, id);
        return updatedAuthor
    } catch (error) {
        res.status(500).send('Error in updating author'+ error);
    }
})

export {
    updateAuthorRoute
}