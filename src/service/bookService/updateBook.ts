import { Book } from "../../models/book";
import { authentication } from "../../common/authenticate";


export async function updateBookData(data : any, id: any) {
    try{
        const islogin : any = await authentication(data);
        if(islogin){
            const isAdmin = await islogin.isAdmin;
            if(isAdmin && id) {
                const book: any = await Book.findOne({
                    where: {
                        bookCode: id
                    }
                })
                const updateBook = await book.update({
                    authors: data.newAuthors
                })
                return updateBook
            }else{
                return "Only Admin can update book data";
            }
        }else{
            return " You are not logged in";
        }
    }catch( error ){
        return `Error in updating the book data : ${error}`;
    }
}