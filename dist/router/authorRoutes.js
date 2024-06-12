"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorController_1 = require("../controller/authorController");
const authMiddleware_1 = require("../middleware/authMiddleware");
// import adminMiddleware from '../middleware/adminMiddleware'
const router = express_1.default.Router();
router.get('/', authorController_1.getAuthors);
router.get('/:id', authorController_1.getAuthorById);
router.post('/', authMiddleware_1.authMiddleware, authMiddleware_1.adminMiddleware, authorController_1.createAuthor);
router.put('/:id', authMiddleware_1.authMiddleware, authMiddleware_1.adminMiddleware, authorController_1.updateAuthor);
router.delete('/:id', authMiddleware_1.authMiddleware, authMiddleware_1.adminMiddleware, authorController_1.deleteAuthor);
exports.default = router;
//# sourceMappingURL=authorRoutes.js.map