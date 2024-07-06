import { Author } from "../../models/author";
import { authentication } from "../../common/authenticate";


export async function updateAuthorData(data: any, id: any) {
        try{
            const islogin: any = await authentication(data);
            if(islogin){
                const isAdmin = await islogin.isAdmin;
                if(isAdmin){
                    const author: any = await Author.findOne({
                        where: {
                            name: id
                        }
                    })
                    const updateAuthorData =await author.update({
                        bio: data.bio
                    })
                    return updateAuthorData
                }else{
                    return "Only Admin can update author data"
                }
            }
            else{
                return "You are not logged in."
            }
        }
        catch(error){
            return `Error in updating author data:- ${error}`;
        }
}