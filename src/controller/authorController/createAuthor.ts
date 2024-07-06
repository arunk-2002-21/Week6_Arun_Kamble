import { Request, Response } from "express";
import { addAuthor } from '../../service/authorServices/createAuthor';


export const createAuthor = async (req: Request, res: Response) => {
    const author = await addAuthor(req.body);
    res.send(author);
}