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
exports.getAllReview = void 0;
const getReviewService_1 = require("../../service/reviewServices/getReviewService");
const getAllReview = (req, res, id) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield (0, getReviewService_1.allReviews)(id);
    res.send(review);
});
exports.getAllReview = getAllReview;
//# sourceMappingURL=getReview.js.map