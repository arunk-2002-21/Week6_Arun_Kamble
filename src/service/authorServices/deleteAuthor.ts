import { Author } from "../../models/author";
import { authentication } from "../../common/authenticate";


export async function deleteAuthorData(data : any, id: any) {
    try{
        const islogin: any = await authentication(data);
        if(islogin){
            const isAdmin = await islogin.isAdmin;
            if(isAdmin && id){
                const book: any = await Author.findOne({
                    where: {
                        name: id
                    }
                })
                const updatebookData = await Author.destroy({
                    where: {
                        id: book.id
                    }
                })
                return "Author deleted successfully";
            }else{
                return "Only Admin can delete a book";
            }
        }else{
            return "You are not Logged in";
        }
    } catch(error){
        return `Author deleted succssfully:- ${error}`;
    }
}