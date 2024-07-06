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
exports.reviewsDeleteUpdate = void 0;
const authenticate_1 = require("../../common/authenticate");
const review_1 = require("../../models/review");
function reviewsDeleteUpdate(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authenticate_1.authentication)(data);
            if (islogin) {
                const isAdmin = yield islogin.isAdmin;
                if (isAdmin || islogin.id == id) {
                    const isReviewExist = yield review_1.Review.findByPk(id);
                    if (isReviewExist) {
                        const review = yield review_1.Review.destroy({
                            where: {
                                id: id
                            }
                        });
                        return " Review deleted successfully";
                    }
                }
            }
            else {
                return "You are not logged in.";
            }
        }
        catch (error) {
            return `Error in updating the review: ${error}`;
        }
    });
}
exports.reviewsDeleteUpdate = reviewsDeleteUpdate;
//# sourceMappingURL=deleteReviewService.js.map