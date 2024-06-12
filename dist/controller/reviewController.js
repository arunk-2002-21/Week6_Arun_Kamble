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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.addReview = exports.getReviews = void 0;
const review_1 = __importDefault(require("../models/review"));
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield review_1.default.findAll({ where: { bookId: req.params.bookId } });
        res.json(reviews);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getReviews = getReviews;
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { content } = req.body;
        const review = yield review_1.default.create({ userId: req.user.id, bookId: req.params.bookId, content });
        res.status(201).json(review);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.addReview = addReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield review_1.default.findByPk(req.params.id);
        if (!review || (review.userId !== req.user.id && !req.user.isAdmin)) {
            return res.status(404).json({ error: 'Review not found or unauthorized' });
        }
        yield review.destroy();
        res.json({ message: 'Review deleted' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteReview = deleteReview;
//# sourceMappingURL=reviewController.js.map