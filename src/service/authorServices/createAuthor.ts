import {Author} from "../../models/author";
import { authentication } from "../../common/authenticate";
import { v4 as uuidv4 } from 'uuid';

export async function addAuthor(data: any) {
    
    try{
        const islogin: any = await authentication(data);
        if(islogin){
            const isAdmin = await islogin.isAdmin;
            if(isAdmin){
                const newBook = await Author.create({
                    id: uuidv4(),
                    name: data.name,
                    bio: data.bio,
                    birthdate: data.birthdate,
                    isSystemUser: data.isSystemUser,
                })
                return newBook;
            }else{
                return "Only Admin can create new Author.";
            }
        }
        else{
            return "You are not Logged In.";
        }
    } catch(error){
        return `Only Admin can create new Author:- ${error}`;
    }
}