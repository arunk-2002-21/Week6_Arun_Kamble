import express from 'express';
import { getRatings, addRating } from '../controller/ratingController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/books/:bookId/ratings', getRatings);
router.post('/books/:bookId/ratings', authMiddleware, addRating);

export default router;
