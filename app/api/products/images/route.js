import {createProductAndUploadImage} from "@/app/api/products/images/controller"
import {NextResponse} from "next/server"

export async function POST(req){
    try{
        const {productId,productImages} = await req.json()
        const product = await createProductAndUploadImage(productId,productImages)
        if(!product){
            throw new Error("Failed to create product")
        }
        return NextResponse.json({message:"Product Created","id":product},{status:201})
    }catch(error){
        return NextResponse.error(`Failed ${error.message}`,{status:500})
    }
}