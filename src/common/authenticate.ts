import jwt from "jsonwebtoken";
import credentails from "./credentails";


export async function authentication(data : any) {
    try{
        const decode = await jwt.verify(data.token, credentails.jwt.SECRET_KEY);
        if(decode){
            return decode;
        }
        else{
            return "Auth token does not match";
        }
    } catch( error ){
        console.log('Error in user authentication');
        return `Error in authenticate user:- ${error}`;
    }
}    