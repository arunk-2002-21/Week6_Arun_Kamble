import express from 'express';
import {getReviews, addReview, deleteReview } from '../controller/reviewController'
import {authMiddleware} from '../middleware/authMiddleware'

const router = express.Router();

router.get('/books/:bookId/reviews', getReviews);
router.post('/books/:bookId/reviews', authMiddleware, addReview);
router.delete('/reviews/:id', authMiddleware, deleteReview);

export default router;