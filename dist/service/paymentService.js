"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const constants = require('gocardless-nodejs/constants');
const gocardless = require('gocardless-nodejs');
const client = gocardless('sandbox_35w_DnIwHt8U_j2yfJvHXQABdWpFtZ122NlX8cQz', constants.Environment.Sandbox);
class PaymentService {
    constructor() {
        this.payments = [];
    }
    getPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.payments;
        });
    }
    getPayment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.payments.find((payment) => payment.id === id);
        });
    }
    createPayment(payment) {
        return __awaiter(this, void 0, void 0, function* () {
            this.payments.push(payment);
            return payment;
        });
    }
    updatePayment(id, payment) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.payments.findIndex((p) => p.id === id);
            if (index >= 0) {
                this.payments[index] = payment;
                return payment;
            }
            return undefined;
        });
    }
    deletePayment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.payments.findIndex((p) => p.id === id);
            if (index >= 0) {
                this.payments.splice(index, 1);
            }
        });
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=paymentService.js.map