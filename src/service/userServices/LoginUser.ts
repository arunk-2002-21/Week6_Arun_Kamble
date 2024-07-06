import { User } from '../../models/user'
import bcrypt from 'bcryptjs'
import credentials from '../../common/credentails';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';



export async function userLogin(data: any) {
    try {
        const isUserExist = await User.findOne({
            where : {
                email : data.email
            }
        })
        if(!isUserExist){
            return "User Not exist";
        }
        if(isUserExist){
            const isPasswordMatch = await bcrypt.compare(data.password, isUserExist.password);
            if(isPasswordMatch){
                const token: any = jwt.sign({id: isUserExist.id, username: isUserExist.username,email: isUserExist.email, isAdmin: isUserExist.isAdmin }, credentials.jwt.SECRET_KEY)
                if(token){
                    return token
                }else{
                    return "token is not genrated";
                }
            }
        }
    } catch (error) {
        console.log('Error login  user account')
        return `Error login  user account:- ${error}`
    }
}