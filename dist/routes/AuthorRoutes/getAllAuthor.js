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
exports.getAllAuthorRoute = void 0;
const express_1 = require("express");
const getAllAuthor_1 = require("../../controller/authorController/getAllAuthor");
const getAllAuthorRoute = (0, express_1.Router)();
exports.getAllAuthorRoute = getAllAuthorRoute;
getAllAuthorRoute.get('/:id?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const allAuthor = yield (0, getAllAuthor_1.getAllAuthor)(req, res, id);
        return allAuthor;
    }
    catch (error) {
        res.status(500).send('Error in getting all authors' + error);
    }
}));
//# sourceMappingURL=getAllAuthor.js.map