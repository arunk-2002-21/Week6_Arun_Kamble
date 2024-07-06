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
exports.newReview = void 0;
const review_1 = require("../../models/review");
const authenticate_1 = require("../../common/authenticate");
const uuid_1 = require("uuid");
function newReview(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authenticate_1.authentication)(data);
            if (islogin) {
                const newReview = yield review_1.Review.create({
                    id: (0, uuid_1.v4)(),
                    userId: islogin.id,
                    bookId: id,
                    content: data.content,
                });
                return newReview;
            }
            else {
                return "You are not logged in.";
            }
        }
        catch (error) {
            return `Error in writing review:- ${error}`;
        }
    });
}
exports.newReview = newReview;
//# sourceMappingURL=writeReviewService.js.map