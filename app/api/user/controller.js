import UserModel from "@/app/models/UserModel";
import {dbConnect} from "@/app/lib/db/dbConnect";

export async function createUser(data){
    try{
        await dbConnect()
        const user = await UserModel.create(data);
        return user;
    }catch(e){
        if(e.message.includes("duplicate key error")){
            throw new Error("User already exists");
        }
        throw new Error(e.message)
    }
}

export async function isUserExists(email){
    try{
        await dbConnect()
        const user = await UserModel.findOne({email:email});
        if(user){
            return true;
        }
        return false;
    
    }catch(e){
        
        throw new Error(e.message);

    }
}