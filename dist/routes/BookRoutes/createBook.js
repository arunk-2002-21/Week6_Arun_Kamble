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
exports.createBook = void 0;
const express_1 = require("express");
const createBook_1 = require("../../controller/bookController/createBook");
const createBook = (0, express_1.Router)();
exports.createBook = createBook;
createBook.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = yield (0, createBook_1.createNewBook)(req, res);
        return newBook;
    }
    catch (error) {
        res.status(500).send('Error in creating new book' + error);
    }
}));
//# sourceMappingURL=createBook.js.map