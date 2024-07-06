import { Request, Response } from "express";
import { updateAuthorData } from '../../service/authorServices/updateAuthor';


export const updateAuthor = async (req: Request, res: Response, id: any) => {
    const author = await updateAuthorData(req.body, id);
    res.send(author);
}