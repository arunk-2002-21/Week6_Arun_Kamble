import express from 'express';
import { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from '../controller/authorController';
import {authMiddleware, adminMiddleware} from '../middleware/authMiddleware';
// import adminMiddleware from '../middleware/adminMiddleware'

const router = express.Router();


router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.post('/', authMiddleware, adminMiddleware, createAuthor);
router.put('/:id', authMiddleware, adminMiddleware, updateAuthor);
router.delete('/:id', authMiddleware, adminMiddleware, deleteAuthor);

export default router;