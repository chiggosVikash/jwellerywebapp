import {NextResponse} from 'next/server'
import {addToWishlist,getWishlistOfUser,removeWishlistItem} from './controller.js'

export async function POST(req){
    try{
        const product = await req.json()
        const wishlist = await addToWishlist(product)
        return NextResponse.json({wishlist: wishlist},{status:200})

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
    
        const userWishlist = await getWishlistOfUser(email)
        return Response.json({wishlist: userWishlist},{status:200})
    }catch(e){
        console.log(e)
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
        const item = await removeWishlistItem(email,id)
        if(!item){
            throw new Error("Cart item not found")
        }
        return Response.json({message:"Cart item removed successfully"},{status:200})
    }catch(e){
        if(e.message.includes("User not found")){
            return Response.json({message:"User not found"},{status:400})
        }
        return Response.json({message:e.message},{status:500})
    }
}