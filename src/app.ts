import express from 'express';
import authorRouter from "../src/router/authorRoutes";
import bookRouter from '../src/router/bookRoutes';
import userRouter from '../src/router/userRoutes';
import reviewRouter from '../src/router/reviewRoutes';
import ratingRouter from '../src/router/ratingRoutes';

const app = express();
const port = 8080;

app.use(express.json());

app.use('/auth', authorRouter);
app.use('/book', bookRouter);
app.use('/user', userRouter);
app.use('/review', reviewRouter);
app.use('/rating', ratingRouter);


app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})