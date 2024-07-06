import { Book } from "../../models/book";
import { authentication } from "../../common/authenticate";


export async function deleteBookData(data : any, id: any) {
    try{
        const islogin: any = await authentication(data);
        if(islogin){
            const isAdmin = await islogin.isAdmin;
            if(isAdmin && id){
                const book: any = await Book.findOne({
                    where: {
                        bookCode: id
                    }
                })
                const updatedbookData = await Book.destroy({
                    where: {
                        id:book.id
                    }
                })
                return "Book deleted successfully";
            }else{
                return "Only admin can delete a book.";
            }
        }else{
            return " you are not Logged in.";
        }
    }catch(error){
        return `Error is deleting Book:- ${error}`;
    }
}