"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ratingController_1 = require("../controller/ratingController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get('/books/:bookId/ratings', ratingController_1.getRatings);
router.post('/books/:bookId/ratings', authMiddleware_1.authMiddleware, ratingController_1.addRating);
exports.default = router;
//# sourceMappingURL=ratingRoutes.js.map