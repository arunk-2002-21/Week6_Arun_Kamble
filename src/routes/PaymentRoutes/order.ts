import  { Router, Request, Response } from 'express'
import { getOrderData } from '../../controller/paymentController/Order'

const orderRoute = Router();

orderRoute.post('/', async (req: Request, res: Response) => {
    try {
        const order: any = await getOrderData(req, res);
        return order
    } catch (error) {
        res.status(500).send('Error in placing order' + error);
    }
})


export {
    orderRoute
}