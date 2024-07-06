import { Book } from "../../models/book";
import { authentication } from "../../common/authenticate";
import { v4 as uuidv4 } from "uuid";

export async function addBook(data : any) {
    try{
        const islogin : any = await authentication(data);
        if(islogin){
            const isAdmin = await islogin.isAdmin;
            if(isAdmin){
                const newBook = await Book.create({
                    id: uuidv4(),
                    bookCode: data.bookCode,
                    title: data.title,
                    description: data.description,
                    publishedYear: data.publishedYear,
                    price: data.price,
                    authors: data.authors,
                    externalId: islogin.id
                })
                return newBook;
            }else{
                return "Only Admin can create Book."
            }
        }else{
            return "You are not logged in.";
        }
    }catch(error){
        return ` Error in creating new book: ${error}`;
    }
}