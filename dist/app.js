"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUser_1 = require("./routes/UserRoutes/createUser");
const loginUser_1 = require("./routes/UserRoutes/loginUser");
const authUser_1 = require("./routes/UserRoutes/authUser");
const createBook_1 = require("./routes/BookRoutes/createBook");
const getAllBook_1 = require("./routes/BookRoutes/getAllBook");
const updateBook_1 = require("./routes/BookRoutes/updateBook");
const deletebook_1 = require("./routes/BookRoutes/deletebook");
const createAuthor_1 = require("./routes/AuthorRoutes/createAuthor");
const getAllAuthor_1 = require("./routes/AuthorRoutes/getAllAuthor");
const updateAuthor_1 = require("./routes/AuthorRoutes/updateAuthor");
const deleteAuthor_1 = require("./routes/AuthorRoutes/deleteAuthor");
const createReview_1 = require("./routes/ReviewRoutes/createReview");
const getReview_1 = require("./routes/ReviewRoutes/getReview");
const deleteReview_1 = require("./routes/ReviewRoutes/deleteReview");
const giveRating_1 = require("./routes/RatingRoutes/giveRating");
const getRating_1 = require("./routes/RatingRoutes/getRating");
const order_1 = require("./routes/PaymentRoutes/order");
const getOrder_1 = require("./routes/PaymentRoutes/getOrder");
const merchant_1 = require("./routes/MerchantRoutes/merchant");
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
//  MiddelWare to create new user
app.use('/register', createUser_1.createUserRoute);
//  MiddelWare to login user
app.use('/login', loginUser_1.loginUserRoute);
// Middleware to authenticate user
app.use('/users/me', authUser_1.authenticateUserRoute);
// Middleware to create a book
app.use('/books', createBook_1.createBook);
// Middleware to get all books and using id 
app.use('/allBooks', getAllBook_1.getAllBooksRoute);
// Middleware to update an book by id
app.use('/updateBook', updateBook_1.updateBookRoute);
// Middleware to delete a book by id
app.use('/deleteBook', deletebook_1.deleteBookRoute);
// Middleware to create an author
app.use('/createAuthor', createAuthor_1.cretaAuthorRoute);
// Middleware to retirve all authors
app.use('/allAuthors', getAllAuthor_1.getAllAuthorRoute);
// Middleware to update an author
app.use('/updateAuthor', updateAuthor_1.updateAuthorRoute);
// Middleware to delete an author
app.use('/deleteAuthor', deleteAuthor_1.deleteAuthorRoute);
// Midellware to write a reviws
app.use('/writeReview', createReview_1.writeReviewRoute);
// Middelware to get review of a book
app.use('/getReview', getReview_1.getBookReview);
// Middleware to delete review
app.use('/deleteReview', deleteReview_1.deleteReview);
// Middleware to give rating
app.use('/books/rating', giveRating_1.ratingRoute);
// Middleware to get all rating
app.use('/getAllRating', getRating_1.getAllRatingRoute);
// Middlerware to place order 
app.use('/order', order_1.orderRoute);
// Middleware to get order data with id 
app.use('/orders', getOrder_1.getOrderRoute);
// Middleware for merchent 
app.use('/merchent', merchant_1.merchantRoutes);
app.listen(port, () => {
    console.log(`server is running  ${port}`);
});
//# sourceMappingURL=app.js.map