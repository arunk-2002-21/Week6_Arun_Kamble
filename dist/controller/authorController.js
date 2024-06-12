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
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAuthors = void 0;
const author_1 = __importDefault(require("../models/author"));
const getAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield author_1.default.findAll();
        res.json(authors);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getAuthors = getAuthors;
const getAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield author_1.default.findByPk(req.params.id);
        res.json(author);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getAuthorById = getAuthorById;
const createAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, bio, birthdate, isSystemUser } = req.body;
        const author = yield author_1.default.create({ name, bio, birthdate, isSystemUser });
        res.status(201).json(author);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createAuthor = createAuthor;
const updateAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, bio, birthdate, isSystemUser } = req.body;
        const author = yield author_1.default.findByPk(req.params.id);
        if (!author) {
            return res.status(404).json({ error: 'Author not found' });
        }
        author.name = name;
        author.bio = bio;
        author.birthdate = birthdate;
        author.isSystemUser = isSystemUser;
        yield author.save();
        res.json(author);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield author_1.default.findByPk(req.params.id);
        if (!author) {
            return res.status(404).json({ error: 'Author not found' });
        }
        yield author.destroy();
        res.json({ message: 'Author deleted' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteAuthor = deleteAuthor;
//# sourceMappingURL=authorController.js.map