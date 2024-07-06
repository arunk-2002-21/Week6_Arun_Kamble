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
exports.writeReviewRoute = void 0;
const express_1 = require("express");
const writeReview_1 = require("../../controller/reviewController/writeReview");
const writeReviewRoute = (0, express_1.Router)();
exports.writeReviewRoute = writeReviewRoute;
writeReviewRoute.post('/book/:id?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const newReview = yield (0, writeReview_1.createNewReview)(req, res, id);
        return newReview;
    }
    catch (error) {
        res.status(500).send('Error in creating new review' + error);
    }
}));
//# sourceMappingURL=createReview.js.map