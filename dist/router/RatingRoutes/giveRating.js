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
exports.ratingRoute = void 0;
const express_1 = require("express");
const assignRating_1 = require("../../controller/ratingController/assignRating");
const ratingRoute = (0, express_1.Router)();
exports.ratingRoute = ratingRoute;
ratingRoute.post('/:id?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const rating = yield (0, assignRating_1.assignNewRating)(req, res, id);
        return rating;
    }
    catch (error) {
        res.status(500).send('Error in assigning rating' + error);
    }
}));
//# sourceMappingURL=giveRating.js.map