import { Router, Request, Response } from 'express'
import {createNewBook} from '../../controller/bookController/createBook'

const createBook = Router();

createBook.post('/',async (req: Request, res: Response) => {
    try {
        const newBook: any = await createNewBook(req, res);
        return newBook
        }catch(error){
            res.status(500).send('Error in creating new book' + error);
        }
})


export {
    createBook
}