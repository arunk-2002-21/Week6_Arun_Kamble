import { Request, Response } from "express";
import { addBook } from '../../service/bookService/createBook';


export const createNewBook = async (req: Request, res: Response) => {
    const book = await addBook(req.body);
    res.send(book);
}
