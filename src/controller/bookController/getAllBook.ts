import { Request, Response } from "express";
import { getBooks } from '../../service/bookService/getAllBooks';


export const getAllBooks = async(req: Request, res: Response, id: any) => {
    const book = await getBooks(req.body, id);
    res.send(book)
}