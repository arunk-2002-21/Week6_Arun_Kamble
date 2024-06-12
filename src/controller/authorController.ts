import { Request, Response } from 'express';
import Author from '../models/author';

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByPk(req.params.id);
    res.json(author);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const { name, bio, birthdate, isSystemUser } = req.body;
    const author = await Author.create({ name, bio, birthdate, isSystemUser });
    res.status(201).json(author);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const { name, bio, birthdate, isSystemUser } = req.body;
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    author.name = name;
    author.bio = bio;
    author.birthdate = birthdate;
    author.isSystemUser = isSystemUser;
    await author.save();
    res.json(author);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    await author.destroy();
    res.json({ message: 'Author deleted' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
