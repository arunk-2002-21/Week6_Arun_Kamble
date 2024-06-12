import Book from "../models/book";
import Author from "../models/author";
import Rating from "../models/rating";
import Review from "../models/review";
import User from "../models/user";
import Payment from "../models/payment";


const constants = require('gocardless-nodejs/constants');
const gocardless = require('gocardless-nodejs');
const client = gocardless('sandbox_35w_DnIwHt8U_j2yfJvHXQABdWpFtZ122NlX8cQz', constants.Environment.Sandbox);



export class PaymentService {
    private payments: Payment[];
  
    constructor() {
      this.payments = [];
    }
  
    async getPayments(): Promise<Payment[]> {
      return this.payments;
    }
  
    async getPayment(id: string): Promise<Payment | undefined> {
      return this.payments.find((payment) => payment.id === id);
    }
  
    async createPayment(payment: Payment): Promise<Payment> {
      this.payments.push(payment);
      return payment;
    }
  
    async updatePayment(id: string, payment: Payment): Promise<Payment | undefined> {
      const index = this.payments.findIndex((p) => p.id === id);
      if (index >= 0) {
        this.payments[index] = payment;
        return payment;
      }
      return undefined;
    }
  
    async deletePayment(id: string): Promise<void> {
      const index = this.payments.findIndex((p) => p.id === id);
      if (index >= 0) {
        this.payments.splice(index, 1);
      }
    }
}