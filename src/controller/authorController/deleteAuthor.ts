import { Request, Response } from "express";
import { deleteAuthorData } from "../../service/authorServices/deleteAuthor";

export const authorDelete = async (req: Request, res: Response, id: any) => {
    const data = await deleteAuthorData(req.body, id);
    res.send(data);
}