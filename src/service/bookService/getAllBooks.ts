import { Book } from "../../models/book";
import { Author } from "../../models/author";
import { Review } from "../../models/review";
import { Rating } from "../../models/rating";
import { authentication } from "../../common/authenticate";
import { v4 as uuidv4 } from "uuid";


export async function getBooks(data: any, id: any) {
    try{
        const islogin = await authentication(data);
        if(islogin){
            if(id){
                const book: any = await Book.findOne({
                    where: {
                        bookCode: id
                    }
                })
                const authorDetails: any = []
                const bookAuthor: [] = book.authors;
                bookAuthor.forEach(async author =>{
                    const authorDetail = await Author.findOne({
                        where: {
                            name: author
                        }
                    })
                authorDetails.push(authorDetail)
            });
            const reviews = await Review.findAll({
                where:{
                    bookId: book.id
                }
            })
            const allRating: any = await Rating.findAll({
                where: {
                    bookId: book.id
                }
            })
            var sum: any = 0;
            allRating.forEach((element: any) => {
                sum+= element.dataValues.rating
            })
            const avgRating: any = sum/allRating.length
            return { book, authorDetails, reviews, avgRating }
            }else{
                const allBooks: any = await Book.findAll();
                return allBooks;
            }
        }else{
            return "you are not logged in."
        }
    }catch(error){
        return `Error in getting all books:- ${error}`
    }
}