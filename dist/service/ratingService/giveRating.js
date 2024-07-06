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
exports.newRating = void 0;
const rating_1 = require("../../models/rating");
const book_1 = require("../../models/book");
const authenticate_1 = require("../../common/authenticate");
const uuid_1 = require("uuid");
function newRating(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authenticate_1.authentication)(data);
            if (islogin) {
                const isBookExist = yield book_1.Book.findByPk(id);
                if (isBookExist) {
                    const rating = yield rating_1.Rating.create({
                        id: (0, uuid_1.v4)(),
                        userId: islogin.id,
                        bookId: id,
                        rating: data.rating,
                    });
                    return rating;
                }
            }
            else {
                return "You are not logged In.";
            }
        }
        catch (error) {
            return `Error in assiging rating:- ${error}`;
        }
    });
}
exports.newRating = newRating;
//# sourceMappingURL=giveRating.js.map