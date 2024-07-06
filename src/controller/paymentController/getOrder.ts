import { Request, Response } from 'express'
import { orderData } from '../../service/paymentService/getOrder'


export const getOrders = async (req: Request, res: Response, id: any)=>{
    const orderDetails = await orderData(req.body, id);
    res.send(orderDetails);
}