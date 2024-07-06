import { Router, Request, Response } from 'express'
import {addAccount, getAccount, updateAccount, removeAccount, addContract, getContract, createMandateFlowForAllContracts, createPayment} from '../../controller/merchantController/merchant'

const merchantRoutes = Router();


merchantRoutes.post('/', async (req: Request, res: Response)=>{
    const accountAdded = await addAccount(req, res);
    res.send(accountAdded)
})
merchantRoutes.get('/', async (req: Request, res: Response)=>{
    const accountAdded = await getAccount(req, res);
    res.send(accountAdded)
})
merchantRoutes.put('/', async (req: Request, res: Response)=>{
    const accountAdded = await updateAccount(req, res);
    res.send(accountAdded)
})
merchantRoutes.delete('/', async (req: Request, res: Response)=>{
    const accountAdded = await removeAccount(req, res);
    res.send(accountAdded)
})

merchantRoutes.post('/contract', async (req: Request, res: Response)=>{
    const accountAdded = await addContract(req, res);
    res.send(accountAdded)
})

merchantRoutes.get('/contract', async (req: Request, res: Response)=>{
    const accountAdded = await getContract(req, res);
    res.send(accountAdded)
})

merchantRoutes.get('/mandate', async (req: Request, res: Response)=>{
    const accountAdded = await createMandateFlowForAllContracts(req, res);
    res.send(accountAdded)
})

merchantRoutes.post('/payment', async(req: Request, res: Response)=>{
    const paymentstatus = await createPayment(req, res);
    res.send(paymentstatus);
})
export {merchantRoutes};