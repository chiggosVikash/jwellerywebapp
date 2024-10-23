import jwt from 'jsonwebtoken'
import { signInWithUserEmailAndPassword } from './options'

/// this route is responsible for login 
export async function GET(req){
    try{
        const url = new URL(req.url);
        const email = url.searchParams.get("email");
        const password = url.searchParams.get("password");
        const user = await signInWithUserEmailAndPassword(email,password);
        if(!user){
            return Response.json({message:"Sign In failed please check credentials"},{status:404});
        }
        const AUTH_SECRET = process.env.AUTH_SECRET
        const token = jwt.sign(user,AUTH_SECRET,{expiresIn:'21h'})
        
        return Response.json({message:"Sign In successful",token:token},{status:200});
        
    }catch(e){
        return Response.json({message:`Error: ${e.message}`},{status:500});
    }
    

    
}