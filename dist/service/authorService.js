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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorService = void 0;
class AuthorService {
    constructor() {
        this.authors = [];
    }
    getAuthors() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.authors;
        });
    }
    getAuthor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.authors.find((author) => author.id === id);
        });
    }
    createAuthor(author) {
        return __awaiter(this, void 0, void 0, function* () {
            this.authors.push(author);
            return author;
        });
    }
    updateAuthor(id, author) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.authors.findIndex((a) => a.id === id);
            if (index >= 0) {
                this.authors[index] = author;
                return author;
            }
            return undefined;
        });
    }
    deleteAuthor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.authors.findIndex((a) => a.id === id);
            if (index >= 0) {
                this.authors.splice(index, 1);
            }
        });
    }
}
exports.AuthorService = AuthorService;
//# sourceMappingURL=authorService.js.map