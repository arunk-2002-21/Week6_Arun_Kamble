"use strict";
// import { Request, Response } from 'express';
// import Order from '../models/payment';
// import  Book  from '../models/book';
// import User  from '../models/user';
// // import { GoCardlessClient } from 'gocardless-pro';
// // const client = new GoCardlessClient({ access_token: process.env.GO_CARDLESS_ACCESS_TOKEN! });
// const constants = require('gocardless-nodejs/constants');
// const gocardless = require('gocardless-nodejs');
// const client = gocardless('sandbox_35w_DnIwHt8U_j2yfJvHXQABdWpFtZ122NlX8cQz', constants.Environment.Sandbox);
// export const createOrder = async (req: Request, res: Response) => {
//   try {
//     const book = await Book.findById(req.body.bookId);
//     if (!book) return res.status(404).json({ message: 'Book not found' });
//     const user = await User.findById((req as any).user.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     const payment = await client.payments.create({
//       amount: book.price * 100,
//       currency: 'GBP',
//       links: {
//         mandate: 'MD123' // Example mandate ID
//       },
//       metadata: {
//         order_reference: 'ORDER123'
//       }
//     });
//     const order = new Order({
//       userId: user._id,
//       bookId: book._id,
//       amount: book.price,
//       status: payment.status,
//       createdAt: new Date()
//     });
//     await order.save();
//     res.status(201).json(order);
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// };
// export const getOrderById = async (req: Request, res: Response) => {
//   try {
//     const order = await Order.findById(req.params.id).populate('bookId').populate('userId');
//     if (!order) return res.status(404).json({ message: 'Order not found' });
//     res.json(order);
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };
//# sourceMappingURL=orderController.js.map