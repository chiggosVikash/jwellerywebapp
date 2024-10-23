import {NextResponse} from 'next/server'
import { createUser } from './controller'
export async function POST(req){
    try{
        const user = await req.json()
        
        const newUser = await createUser(user)
        const updatedUser = {
            id:newUser._id,
            name:newUser.name,
            email:newUser.email,
            phone:newUser.phone}
        if(newUser){
            return NextResponse.json({user:updatedUser,message:"User created successfully"},{status:200})
        }else{
            return NextResponse.json({message:"User creation failed"},{status:500})
        }
    }catch(e){
        console.log("Error message")
        if(e.message.includes("User already exists")){
            return NextResponse.json({message:"User already exists"},{status:400})
        }
        return NextResponse.json({message:e.message},{status:500})
    
    }
    

}

