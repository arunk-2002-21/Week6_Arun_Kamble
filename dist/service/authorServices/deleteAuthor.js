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
exports.deleteAuthorData = void 0;
const author_1 = require("../../models/author");
const authenticate_1 = require("../../common/authenticate");
function deleteAuthorData(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authenticate_1.authentication)(data);
            if (islogin) {
                const isAdmin = yield islogin.isAdmin;
                if (isAdmin && id) {
                    const book = yield author_1.Author.findOne({
                        where: {
                            name: id
                        }
                    });
                    const updatebookData = yield author_1.Author.destroy({
                        where: {
                            id: book.id
                        }
                    });
                    return "Author deleted successfully";
                }
                else {
                    return "Only Admin can delete a book";
                }
            }
            else {
                return "You are not Logged in";
            }
        }
        catch (error) {
            return `Author deleted succssfully:- ${error}`;
        }
    });
}
exports.deleteAuthorData = deleteAuthorData;
//# sourceMappingURL=deleteAuthor.js.map