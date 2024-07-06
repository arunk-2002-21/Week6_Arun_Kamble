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
exports.getOrderRoute = void 0;
const express_1 = require("express");
const getOrder_1 = require("../../controller/paymentController/getOrder");
const getOrderRoute = (0, express_1.Router)();
exports.getOrderRoute = getOrderRoute;
getOrderRoute.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const orders = yield (0, getOrder_1.getOrders)(req, res, id);
        return orders;
    }
    catch (error) {
        res.status(500).send('Error during getting order deatils' + error);
    }
}));
//# sourceMappingURL=getOrder.js.map