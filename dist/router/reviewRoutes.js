"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviewController_1 = require("../controller/reviewController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get('/books/:bookId/reviews', reviewController_1.getReviews);
router.post('/books/:bookId/reviews', authMiddleware_1.authMiddleware, reviewController_1.addReview);
router.delete('/reviews/:id', authMiddleware_1.authMiddleware, reviewController_1.deleteReview);
exports.default = router;
//# sourceMappingURL=reviewRoutes.js.map