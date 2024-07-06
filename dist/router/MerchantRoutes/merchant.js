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
exports.merchantRoutes = void 0;
const express_1 = require("express");
const merchant_1 = require("../../controller/merchantController/merchant");
const merchantRoutes = (0, express_1.Router)();
exports.merchantRoutes = merchantRoutes;
merchantRoutes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountAdded = yield (0, merchant_1.addAccount)(req, res);
    res.send(accountAdded);
}));
merchantRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountAdded = yield (0, merchant_1.getAccount)(req, res);
    res.send(accountAdded);
}));
merchantRoutes.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountAdded = yield (0, merchant_1.updateAccount)(req, res);
    res.send(accountAdded);
}));
merchantRoutes.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountAdded = yield (0, merchant_1.removeAccount)(req, res);
    res.send(accountAdded);
}));
merchantRoutes.post('/contract', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountAdded = yield (0, merchant_1.addContract)(req, res);
    res.send(accountAdded);
}));
merchantRoutes.get('/contract', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountAdded = yield (0, merchant_1.getContract)(req, res);
    res.send(accountAdded);
}));
merchantRoutes.get('/mandate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountAdded = yield (0, merchant_1.createMandateFlowForAllContracts)(req, res);
    res.send(accountAdded);
}));
merchantRoutes.post('/payment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentstatus = yield (0, merchant_1.createPayment)(req, res);
    res.send(paymentstatus);
}));
//# sourceMappingURL=merchant.js.map