import { Request, Response } from 'express'
import { getOrder } from '../../service/paymentService/order'


export const getOrderData = async (req: Request, res: Response)=>{
    const palcedOrder = await getOrder(req.body);
    res.send(palcedOrder);
}