import { Book } from '../../models/book'
import { Author } from '../../models/author'
import { Review } from '../../models/review'
import { Rating } from '../../models/rating'
import { Payment } from '../../models/payment'
import { authentication } from '../../common/authenticate';
import { v4 as uuidv4 } from 'uuid';



export async function orderData(data: any, id: any) {
    try {
        const islogin: any = await authentication(data);
        if(islogin){
            const isAdmin = await islogin.isAdmin;
            // to do make it false
            if(isAdmin){
                const orderDetails: any = await Payment.findByPk(id)
                return orderDetails
            }else{
                return "Error during getting order deatils"
            }
        }
    } catch (error) {
        return `Error during getting order deatils:- ${error}`
    }
}