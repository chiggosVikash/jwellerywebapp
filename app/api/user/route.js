import {NextResponse} from 'next/server'
import { createUser,getUserByEmail,updateUser } from './controller'
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

export async function GET(req){
    try{
        const url = new URL(req.url)
        const email = url.searchParams.get("email")
        const name = url.searchParams.get("name")
        const user = await getUserByEmail(email)
        if(!user){
            return Response.json({email:email,name:name,phone:"",gender:""},{status:200})
        }
        return Response.json({email:user.email,name:user.name,phone:user.phone,gender:user.gender},{status:200})
    
    }catch(e){  
        console.log("Error message",e);
        return Response.error(e.message,{status:500})

    }
}

export async function PUT(req){
    try{
        const user = await req.json()
        console.log("User",user.email)
        const updatedUser = await updateUser(user)
        if(updatedUser){
            return NextResponse.json({message:"User updated successfully"},{status:200})
        }
        throw new Error("User not found")
    }catch(e){
        if(e.message.includes("User not found")){
            return NextResponse.json({message:"User not found"},{status:404})
        }
        return NextResponse.error(e.message,{status:500})
    }
}

