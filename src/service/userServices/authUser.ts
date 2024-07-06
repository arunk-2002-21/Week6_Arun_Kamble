import { User } from '../../models/user'
import bcrypt from 'bcryptjs'
import credentials from '../../common/credentails';
import {authentication} from '../../common/authenticate';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';



export async function authUser(data: any) {
    try {
        const dataOfUser = await authentication(data);
        return dataOfUser;
    } catch (error) {
        console.log('Error in authenticate user')
        return `Error in authenticate user:- ${error}`
    }
}