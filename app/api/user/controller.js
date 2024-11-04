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

export async function getUserByEmail(email){
    try{
        await dbConnect()
        const user = await UserModel.findOne({email:email});
        return user;
    
    }catch(e){
        throw new Error(e.message);
    }
}

export async function updateUser(userData){
    try{
        await dbConnect()
        const user = await UserModel.updateOne({email:userData.email},userData,{upsert:true});
        if(user.modifiedCount === 0 && user.upsertedCount === 0){
            throw new Error("User not found");
        }
        return true;;
    }catch(e){
        throw new Error(e.message);
    
    }
}