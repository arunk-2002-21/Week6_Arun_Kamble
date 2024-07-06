import express, {Request, Response} from 'express'
import {createUserRoute} from './routes/UserRoutes/createUser'
import {loginUserRoute} from './routes/UserRoutes/loginUser'
import {authenticateUserRoute} from './routes/UserRoutes/authUser'
import {createBook} from './routes/BookRoutes/createBook'
import {getAllBooksRoute} from './routes/BookRoutes/getAllBook'
import {updateBookRoute} from './routes/BookRoutes/updateBook'
import {deleteBookRoute} from './routes/BookRoutes/deletebook'
import {cretaAuthorRoute} from './routes/AuthorRoutes/createAuthor'
import {getAllAuthorRoute} from './routes/AuthorRoutes/getAllAuthor'
import {updateAuthorRoute} from './routes/AuthorRoutes/updateAuthor'
import {deleteAuthorRoute} from './routes/AuthorRoutes/deleteAuthor'
import {writeReviewRoute} from './routes/ReviewRoutes/createReview'
import {getBookReview} from './routes/ReviewRoutes/getReview'
import {deleteReview} from './routes/ReviewRoutes/deleteReview'
import {ratingRoute} from './routes/RatingRoutes/giveRating'
import {getAllRatingRoute} from './routes/RatingRoutes/getRating'
import {orderRoute} from './routes/PaymentRoutes/order'
import {getOrderRoute} from './routes/PaymentRoutes/getOrder'
import {merchantRoutes} from './routes/MerchantRoutes/merchant'


const app = express();
const port = 8080;


app.use(express.json())


//  MiddelWare to create new user
app.use('/register', createUserRoute)

//  MiddelWare to login user
app.use('/login', loginUserRoute)

// Middleware to authenticate user
app.use('/users/me', authenticateUserRoute)

// Middleware to create a book
app.use('/books', createBook)

// Middleware to get all books and using id 
app.use('/allBooks', getAllBooksRoute)

// Middleware to update an book by id
app.use('/updateBook', updateBookRoute)

// Middleware to delete a book by id
app.use('/deleteBook', deleteBookRoute)

// Middleware to create an author
app.use('/createAuthor', cretaAuthorRoute)

// Middleware to retirve all authors
app.use('/allAuthors', getAllAuthorRoute)

// Middleware to update an author
app.use('/updateAuthor', updateAuthorRoute)

// Middleware to delete an author
app.use('/deleteAuthor', deleteAuthorRoute)

// Midellware to write a reviws
app.use('/writeReview', writeReviewRoute)

// Middelware to get review of a book
app.use('/getReview', getBookReview);

// Middleware to delete review
app.use('/deleteReview', deleteReview)

// Middleware to give rating
app.use('/books/rating', ratingRoute)

// Middleware to get all rating
app.use('/getAllRating', getAllRatingRoute)

// Middlerware to place order 
app.use('/order', orderRoute)

// Middleware to get order data with id 
app.use('/orders', getOrderRoute)

// Middleware for merchent 
app.use('/merchent', merchantRoutes)

app.listen(port, ()=>{
    console.log(`server is running  ${port}`)
})