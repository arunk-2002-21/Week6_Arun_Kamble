import express from 'express';
import { getBooks, getBookById, createBook, updateBook, deleteBook } from '../controller/bookController';
import {authMiddleware, adminMiddleware} from '../middleware/authMiddleware';
// import adminMiddleware from '../middleware/adminmiddleware';


const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', authMiddleware, adminMiddleware, createBook);
router.put('/:id', authMiddleware, adminMiddleware, updateBook);
router.delete('/:id', authMiddleware, adminMiddleware, deleteBook);

export default router;