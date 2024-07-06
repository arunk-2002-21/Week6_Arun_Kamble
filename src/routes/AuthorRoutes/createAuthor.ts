import e, { Router, Request, Response } from 'express'
import {createAuthor} from '../../controller/authorController/createAuthor'

const cretaAuthorRoute = Router();

cretaAuthorRoute.post('/',async (req: Request, res: Response) => {
    try {
        const newAuthor: any = await createAuthor(req, res);
        return newAuthor
        }catch(error){
            res.status(500).send('Error in creating new author' + error);
        }
})


export {
    cretaAuthorRoute
}