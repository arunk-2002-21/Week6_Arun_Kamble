"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controller/bookController");
const authMiddleware_1 = require("../middleware/authMiddleware");
// import adminMiddleware from '../middleware/adminmiddleware';
const router = express_1.default.Router();
router.get('/', bookController_1.getBooks);
router.get('/:id', bookController_1.getBookById);
router.post('/', authMiddleware_1.authMiddleware, authMiddleware_1.adminMiddleware, bookController_1.createBook);
router.put('/:id', authMiddleware_1.authMiddleware, authMiddleware_1.adminMiddleware, bookController_1.updateBook);
router.delete('/:id', authMiddleware_1.authMiddleware, authMiddleware_1.adminMiddleware, bookController_1.deleteBook);
exports.default = router;
//# sourceMappingURL=bookRoutes.js.map