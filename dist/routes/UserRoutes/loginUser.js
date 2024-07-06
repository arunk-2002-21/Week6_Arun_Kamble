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
exports.loginUserRoute = void 0;
const express_1 = require("express");
const loginUser_1 = require("../../controller/userController/loginUser");
const loginUserRoute = (0, express_1.Router)();
exports.loginUserRoute = loginUserRoute;
loginUserRoute.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, loginUser_1.loginUser)(req, res);
        res.send(user);
    }
    catch (error) {
        res.status(500).send('Error in login user' + error);
    }
}));
//# sourceMappingURL=loginUser.js.map