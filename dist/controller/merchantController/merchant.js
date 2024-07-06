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
exports.createPayment = exports.createMandateFlowForAllContracts = exports.getContract = exports.addContract = exports.updateAccount = exports.removeAccount = exports.getAccount = exports.addAccount = void 0;
const merchant_1 = require("../../service/merchantServices/merchant");
const addAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, merchant_1.createAccount)(req.body); // Create one api for calling 
    res.send("Account created successfully");
});
exports.addAccount = addAccount;
const getAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, merchant_1.getAccounts)();
    res.json(users);
});
exports.getAccount = getAccount;
const removeAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, merchant_1.deleteAccount)(req.params.id);
    res.json(users);
});
exports.removeAccount = removeAccount;
const updateAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, merchant_1.ModifyAccount)(req.body);
    res.json(users);
});
exports.updateAccount = updateAccount;
const addContract = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, merchant_1.createContract)(req.body);
    res.send("Account created successfully");
});
exports.addContract = addContract;
const getContract = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, merchant_1.getContracts)();
    res.json(users);
});
exports.getContract = getContract;
const createMandateFlowForAllContracts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, merchant_1.CreateMandate)();
    if (users) {
        res.send("Mandates created for all contracts");
    }
});
exports.createMandateFlowForAllContracts = createMandateFlowForAllContracts;
const createPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentIntiation = yield (0, merchant_1.payment)(req.body);
    return paymentIntiation;
});
exports.createPayment = createPayment;
//# sourceMappingURL=merchant.js.map