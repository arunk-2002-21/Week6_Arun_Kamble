import { Request, Response } from 'express';
import Review from '../models/review';

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.findAll({ where: { bookId: req.params.bookId } });
    res.json(reviews);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const addReview = async (req: Request, res: Response) => {
  try {
    const { content } = req.body;
    const review = await Review.create({ userId: req.user.id, bookId: req.params.bookId, content });
    res.status(201).json(review);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (!review || (review.userId !== req.user.id && !req.user.isAdmin)) {
      return res.status(404).json({ error: 'Review not found or unauthorized' });
    }
    await review.destroy();
    res.json({ message: 'Review deleted' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
