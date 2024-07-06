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
exports.getAllRatingRoute = void 0;
const express_1 = require("express");
const getRating_1 = require("../../controller/ratingController/getRating");
const getAllRatingRoute = (0, express_1.Router)();
exports.getAllRatingRoute = getAllRatingRoute;
getAllRatingRoute.get('/:id?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const allReview = yield (0, getRating_1.getAllRating)(req, res, id);
        return allReview;
    }
    catch (error) {
        res.status(500).send('Error in getting all rating' + error);
    }
}));
//# sourceMappingURL=getRating.js.map