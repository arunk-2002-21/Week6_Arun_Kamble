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
exports.getAllBooksRoute = void 0;
const express_1 = require("express");
const getAllBook_1 = require("../../controller/bookController/getAllBook");
const getAllBooksRoute = (0, express_1.Router)();
exports.getAllBooksRoute = getAllBooksRoute;
getAllBooksRoute.get('/:id?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const allBook = yield (0, getAllBook_1.getAllBooks)(req, res, id);
        return allBook;
    }
    catch (error) {
        res.status(500).send('Error in getting all books' + error);
    }
}));
//# sourceMappingURL=getAllBook.js.map