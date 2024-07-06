import { Rating } from '../../models/rating'

    export async function allRating(id: any) {
    try {
        const reviews: any = await Rating.findAll({
            where: {
                bookId: id
            }
        })
        return reviews;
    } catch (error) {
        return `Error in getting all reviews:- ${error}`
    }
}