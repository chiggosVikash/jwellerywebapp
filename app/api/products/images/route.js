import {createProductAndUploadImage} from "@/app/api/products/images/controller"
import {NextResponse} from "next/server"

export async function POST(req){
    try{
        const {productId,images} = await req.json()
        const product = await createProductAndUploadImage(productId,images)
        if(!product){
            throw new Error("Failed to create product")
        }
        return NextResponse.json({message:"Product Created"},{status:201})
    }catch(error){
        console.error("Error in POST request:",error);
        return NextResponse.error(`Failed ${error}`,{status:500})
    }
}