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
exports.orderRoute = void 0;
const express_1 = require("express");
const Order_1 = require("../../controller/paymentController/Order");
const orderRoute = (0, express_1.Router)();
exports.orderRoute = orderRoute;
orderRoute.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield (0, Order_1.getOrderData)(req, res);
        return order;
    }
    catch (error) {
        res.status(500).send('Error in placing order' + error);
    }
}));
//# sourceMappingURL=order.js.map