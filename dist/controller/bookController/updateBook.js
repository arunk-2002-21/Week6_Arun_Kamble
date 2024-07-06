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
exports.updateBook = void 0;
const updateBook_1 = require("../../service/bookService/updateBook");
const updateBook = (req, res, id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield (0, updateBook_1.updateBookData)(req.body, id);
    res.send(book);
});
exports.updateBook = updateBook;
//# sourceMappingURL=updateBook.js.map