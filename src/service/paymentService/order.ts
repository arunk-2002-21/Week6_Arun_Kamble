import { Book } from '../../models/book'
import { Author } from '../../models/author'
import { Review } from '../../models/review'
import { Rating } from '../../models/rating'
import { Payment } from '../../models/payment'
import { authentication }  from '../../common/authenticate';
import { v4 as uuidv4 } from 'uuid';



export async function getOrder(data: any) {
    try {
        const islogin: any = await authentication(data);
        if(islogin){
            const isAdmin = await islogin.isAdmin;
            // to do to make it false
            if(isAdmin){
                const bookDeatils: any = await Book.findByPk(data.bookId)
                const newOrder: any = await Payment.create({
                    id: uuidv4(),
                    userId: islogin.id,
                    bookId: data.bookId,
                    amount: bookDeatils.price,
                    status: "Pending"
                })
                return newOrder
            }else{
                return "Error during placing order"
            }
        }
    } catch (error) {
        return `Error in placing order:- ${error}`
    }
}