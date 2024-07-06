import  { Router, Request, Response } from 'express'
import { getOrders } from '../../controller/paymentController/getOrder'

const getOrderRoute = Router();

getOrderRoute.get('/:id', async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const orders: any = await getOrders(req, res, id);
        return orders
    } catch (error) {
        res.status(500).send('Error during getting order deatils' + error);
    }
})


export {
    getOrderRoute
}