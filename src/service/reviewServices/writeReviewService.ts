import {Review} from "../../models/review";
import { authentication } from "../../common/authenticate";
import {v4 as uuidv4 } from 'uuid';

export async function newReview(data:any, id: any){
    try{
        const islogin: any = await authentication(data);
        if(islogin){
            const newReview: any = await Review.create({
                id: uuidv4(),
                userId: islogin.id,
                bookId: id,
                content: data.content,
            })
            return newReview;
        } else{
            return "You are not logged in.";
        }
    }
    catch(error){
        return `Error in writing review:- ${error}`;
    }
}