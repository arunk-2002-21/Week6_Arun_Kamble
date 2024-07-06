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
exports.updateAuthorData = void 0;
const author_1 = require("../../models/author");
const authenticate_1 = require("../../common/authenticate");
function updateAuthorData(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authenticate_1.authentication)(data);
            if (islogin) {
                const isAdmin = yield islogin.isAdmin;
                if (isAdmin) {
                    const author = yield author_1.Author.findOne({
                        where: {
                            name: id
                        }
                    });
                    const updateAuthorData = yield author.update({
                        bio: data.bio
                    });
                    return updateAuthorData;
                }
                else {
                    return "Only Admin can update author data";
                }
            }
            else {
                return "You are not logged in.";
            }
        }
        catch (error) {
            return `Error in updating author data:- ${error}`;
        }
    });
}
exports.updateAuthorData = updateAuthorData;
//# sourceMappingURL=updateAuthor.js.map