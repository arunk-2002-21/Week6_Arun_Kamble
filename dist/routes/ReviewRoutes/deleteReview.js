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
exports.deleteReview = void 0;
const express_1 = require("express");
const deleteReview_1 = require("../../controller/reviewController/deleteReview");
const deleteReview = (0, express_1.Router)();
exports.deleteReview = deleteReview;
deleteReview.delete('/:id?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const reviewUpdate = yield (0, deleteReview_1.reviewDelete)(req, res, id);
        return reviewUpdate;
    }
    catch (error) {
        res.status(500).send('Error in deleting review' + error);
    }
}));
//# sourceMappingURL=deleteReview.js.map