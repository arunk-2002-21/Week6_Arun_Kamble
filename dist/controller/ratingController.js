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
exports.addRating = exports.getRatings = void 0;
const rating_1 = __importDefault(require("../models/rating"));
const getRatings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ratings = yield rating_1.default.findAll({ where: { bookId: req.params.bookId } });
        res.json(ratings);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getRatings = getRatings;
const addRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rating } = req.body;
        const newRating = yield rating_1.default.create({ userId: req.user.id, bookId: req.params.bookId, rating });
        res.status(201).json(newRating);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.addRating = addRating;
//# sourceMappingURL=ratingController.js.map