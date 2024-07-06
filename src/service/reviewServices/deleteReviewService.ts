import { authentication } from "../../common/authenticate";
import {Review} from "../../models/review";

export async function reviewsDeleteUpdate(data: any, id: any) {
    try{
        const islogin: any = await authentication(data);
        if(islogin){
            const isAdmin = await islogin.isAdmin;
            if( isAdmin || islogin.id == id){
                const isReviewExist = await Review.findByPk(id)
                if( isReviewExist){
                    const review: any = await Review.destroy({
                        where: {
                            id: id
                        }
                    })
                    return " Review deleted successfully"
                }    
            }
        }else{
            return "You are not logged in."
        }
    }
    catch(error){
        return `Error in updating the review: ${error}`;
    }
}