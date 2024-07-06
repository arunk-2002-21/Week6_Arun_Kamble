import { Request, Response } from "express";
import { updateBookData } from '../../service/bookService/updateBook';


export const updateBook = async (req: Request, res: Response, id: any) => {
    const book = await updateBookData(req.body, id);
    res.send(book);
}