import { User } from '../../models/user'
import bcrypt from 'bcrypt'
import credentails from '../../common/credentails';
import { v4 as uuidv4 } from 'uuid';



export async function addUser(data: any) {
    try {
        //  Hashing Passowrd
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = await User.create({
            id : uuidv4(),
            username: data.username,
            password: hashedPassword,
            email: data.email,
            isAdmin: data.admin
        })
        return newUser
    } catch (error) {
        console.log('Error creating new user account')
        return `Error in creating new user:- ${error}`
    }
}