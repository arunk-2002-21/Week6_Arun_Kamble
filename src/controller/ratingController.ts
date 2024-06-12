import { Request, Response } from 'express';
import Rating from '../models/rating';

export const getRatings = async (req: Request, res: Response) => {
  try {
    const ratings = await Rating.findAll({ where: { bookId: req.params.bookId } });
    res.json(ratings);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const addRating = async (req: Request, res: Response) => {
  try {
    const { rating } = req.body;
    const newRating = await Rating.create({ userId: req.user.id, bookId: req.params.bookId, rating });
    res.status(201).json(newRating);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};