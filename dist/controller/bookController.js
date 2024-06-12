"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getBooks = void 0;
const book_1 = __importDefault(require("../models/book"));
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_1.default.findAll();
        res.json(books);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getBooks = getBooks;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_1.default.findByPk(req.params.id);
        res.json(book);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getBookById = getBookById;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookCode, title, description, publishedYear, price, externalId } = req.body;
        const book = yield book_1.default.create({ bookCode, title, description, publishedYear, price, externalId });
        res.status(201).json(book);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createBook = createBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookCode, title, description, publishedYear, price, externalId } = req.body;
        const book = yield book_1.default.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        book.bookCode = bookCode;
        book.title = title;
        book.description = description;
        book.pusblishedYear = publishedYear;
        book.price = price;
        book.externalId = externalId;
        yield book.save();
        res.json(book);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_1.default.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        yield book.destroy();
        res.json({ message: 'Book deleted' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteBook = deleteBook;
//# sourceMappingURL=bookController.js.map