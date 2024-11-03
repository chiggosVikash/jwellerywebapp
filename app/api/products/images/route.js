import {createProductAndUploadImage,getImages,updateProductImages} from "@/app/api/products/images/controller"
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

export async function GET(req){
    try{
        const url = new URL(req.url)
        const productId = url.searchParams.get("id")
        checkId(productId)
        const images = await getImages(productId)
        return NextResponse.json(images,{status:200})

    }catch(e){
        if(e.message === "Product ID is required"){
            return NextResponse.json({error:e.message},{status:400})
        }
        return Response.error(e.message,{status:500})
    }
}


export async function PUT(req){
    try{
        const {id,productImages} = await req.json()
        checkIdAndImages(id,productImages)
        const product = await updateProductImages(id,productImages)
        if(!product){
            throw new Error("Failed to update images")
        }
        return NextResponse.json({success:true},{status:200})
    }catch(e){
        return NextResponse.error(e.message,{status:500})
    }
}


function checkIdAndImages(id,images){
    if(!id){
        throw new Error("Product ID is required")
    }
    if(!images){
        throw new Error("Product Images are required")
    }
}

function checkId(id){
    if(!id){
        throw new Error("Product ID is required")
    }
}

