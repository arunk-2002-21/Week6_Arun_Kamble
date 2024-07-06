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
exports.getBooks = void 0;
const book_1 = require("../../models/book");
const author_1 = require("../../models/author");
const review_1 = require("../../models/review");
const rating_1 = require("../../models/rating");
const authenticate_1 = require("../../common/authenticate");
function getBooks(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authenticate_1.authentication)(data);
            if (islogin) {
                if (id) {
                    const book = yield book_1.Book.findOne({
                        where: {
                            bookCode: id
                        }
                    });
                    const authorDetails = [];
                    const bookAuthor = book.authors;
                    bookAuthor.forEach((author) => __awaiter(this, void 0, void 0, function* () {
                        const authorDetail = yield author_1.Author.findOne({
                            where: {
                                name: author
                            }
                        });
                        authorDetails.push(authorDetail);
                    }));
                    const reviews = yield review_1.Review.findAll({
                        where: {
                            bookId: book.id
                        }
                    });
                    const allRating = yield rating_1.Rating.findAll({
                        where: {
                            bookId: book.id
                        }
                    });
                    var sum = 0;
                    allRating.forEach((element) => {
                        sum += element.dataValues.rating;
                    });
                    const avgRating = sum / allRating.length;
                    return { book, authorDetails, reviews, avgRating };
                }
                else {
                    const allBooks = yield book_1.Book.findAll();
                    return allBooks;
                }
            }
            else {
                return "you are not logged in.";
            }
        }
        catch (error) {
            return `Error in getting all books:- ${error}`;
        }
    });
}
exports.getBooks = getBooks;
//# sourceMappingURL=getAllBooks.js.map