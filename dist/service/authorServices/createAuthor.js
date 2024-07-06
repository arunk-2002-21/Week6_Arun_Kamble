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
exports.addAuthor = void 0;
const author_1 = require("../../models/author");
const authenticate_1 = require("../../common/authenticate");
const uuid_1 = require("uuid");
function addAuthor(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authenticate_1.authentication)(data);
            if (islogin) {
                const isAdmin = yield islogin.isAdmin;
                if (isAdmin) {
                    const newBook = yield author_1.Author.create({
                        id: (0, uuid_1.v4)(),
                        name: data.name,
                        bio: data.bio,
                        birthdate: data.birthdate,
                        isSystemUser: data.isSystemUser,
                    });
                    return newBook;
                }
                else {
                    return "Only Admin can create new Author.";
                }
            }
            else {
                return "You are not Logged In.";
            }
        }
        catch (error) {
            return `Only Admin can create new Author:- ${error}`;
        }
    });
}
exports.addAuthor = addAuthor;
//# sourceMappingURL=createAuthor.js.map