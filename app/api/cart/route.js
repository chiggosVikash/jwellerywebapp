import {NextResponse} from 'next/server'
import {addToCart,getCartOfUser} from './controller.js'

export async function POST(req){
    try{
        const product = await req.json()
        const cart = await addToCart(product)
        return NextResponse.json({cart},{status:200})

    }catch(e){
        if(e.message.includes("User not found")){
            return NextResponse.json({message:"User not found"},{status:400})
        }
        if(e.message.includes("Product not found")){
            return NextResponse.json({message:"Product not found"},{status:400})
        }

        return NextResponse.json({message:e.message},{status:500})
    }

}

export async function GET(req){
    try{
        const url = new URL(req.url)
        const email = url.searchParams.get('email')
        if(email === null){
            return Response.json({message:"Email not found"},{status:400})
        }
        const cart = await getCartOfUser(email)
        return Response.json({cart},{status:200})
    }catch(e){
        if(e.message.includes("User not found")){
            return Response.json({message:"User not found"},{status:400})
        }
        return Response.json({message:e.message},{status:500})
    }
}

export async function DELETE(req){
    try{
        const url = new URL(req.url)
        const email = url.searchParams.get('email')
        const id = url.searchParams.get('id')
        if(email === null){
            return Response.json({message:"Email not found"},{status:400})
        }
        if(id === null){
            return Response.json({message:"Product id not found"},{status:400})
        }
        const cart = await removeCartItem(email,id)
        return Response.json({cart},{status:200})
    }catch(e){
        if(e.message.includes("User not found")){
            return Response.json({message:"User not found"},{status:400})
        }
        return Response.json({message:e.message},{status:500})
    }
}