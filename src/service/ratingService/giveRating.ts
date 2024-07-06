import { Rating } from '../../models/rating'
import { Book } from '../../models/book'
import { authentication } from '../../common/authenticate';
import { v4 as uuidv4 } from 'uuid';



export async function newRating(data: any, id: any) {
    try {
        const islogin: any = await authentication(data);
        if (islogin) {
            const isBookExist: any = await Book.findByPk(id);
            if (isBookExist) {
                const rating: any = await Rating.create({
                    id: uuidv4(),
                    userId: islogin.id,
                    bookId: id,
                    rating: data.rating,
                })
                return rating;
            }
        } else {
            return "You are not logged In."
        }
    } catch (error) {
        return `Error in assiging rating:- ${error}`
    }
}