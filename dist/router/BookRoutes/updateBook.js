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
exports.updateBookRoute = void 0;
const express_1 = require("express");
const updateBook_1 = require("../../controller/bookController/updateBook");
const updateBookRoute = (0, express_1.Router)();
exports.updateBookRoute = updateBookRoute;
updateBookRoute.post('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedBook = yield (0, updateBook_1.updateBook)(req, res, id);
        return updatedBook;
    }
    catch (error) {
        res.status(500).send('Error in updating book' + error);
    }
}));
//# sourceMappingURL=updateBook.js.map