import { Request, Response } from 'express';
import Book from '../models/book';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByPk(req.params.id);
    res.json(book);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { bookCode, title, description, publishedYear, price, externalId } = req.body;
    const book = await Book.create({ bookCode, title, description, publishedYear, price, externalId, authors });
    res.status(201).json(book);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { bookCode, title, description, publishedYear, price, externalId } = req.body;
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    book.bookCode = bookCode;
    book.title = title;
    book.description = description;
    book.publishedYear = publishedYear;
    book.price = price;
    book.externalId = externalId;
    await book.save();
    res.json(book);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    await book.destroy();
    res.json({ message: 'Book deleted' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
