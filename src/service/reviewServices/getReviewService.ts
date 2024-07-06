import {Review} from "../../models/review";

export async function allReviews(id: any){
    try{
        const reviews: any =await Review.findAll({
            where: {
                bookId: id
            }
        })
        return reviews;
    } catch(error){
        return `Error in getting all reviews: ${error}`;
    }
}