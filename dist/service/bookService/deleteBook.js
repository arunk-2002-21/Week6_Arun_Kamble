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
exports.deleteBookData = void 0;
const book_1 = require("../../models/book");
const authenticate_1 = require("../../common/authenticate");
function deleteBookData(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authenticate_1.authentication)(data);
            if (islogin) {
                const isAdmin = yield islogin.isAdmin;
                if (isAdmin && id) {
                    const book = yield book_1.Book.findOne({
                        where: {
                            bookCode: id
                        }
                    });
                    const updatedbookData = yield book_1.Book.destroy({
                        where: {
                            id: book.id
                        }
                    });
                    return "Book deleted successfully";
                }
                else {
                    return "Only admin can delete a book.";
                }
            }
            else {
                return " you are not Logged in.";
            }
        }
        catch (error) {
            return `Error is deleting Book:- ${error}`;
        }
    });
}
exports.deleteBookData = deleteBookData;
//# sourceMappingURL=deleteBook.js.map