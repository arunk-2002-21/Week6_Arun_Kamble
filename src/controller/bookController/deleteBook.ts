import { Request, Response } from "express";
import { deleteBookData } from '../../service/bookService/deleteBook';


export const deleteBook = async (req: Request, res: Response, id: any) => {
    const data = await deleteBookData(req.body, id);
    res.send(data);
}