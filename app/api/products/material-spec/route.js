import { NextResponse } from "next/server";
import { updateMaterialSpec,getMaterialSpecs } from "./controller";
export async function PUT(req){
    try{    
      
        const spec = await req.json()
        if(spec.productId === undefined || spec.productId === null || spec.productId === ""){
            throw new Error("Product ID is required")
        }
        // for(let i=0;i<spec.materialSpecs.length;i++){
        //     const materialSpec = spec.materialSpecs[i]
        //     const price = parseInt(materialSpec.price ?? "0")
        //     materialSpec.price = price
        //     spec.materialSpecs[i] = materialSpec
        // }
        const response = await updateMaterialSpec(spec.productId,spec.materialSpecs)
        if(!response){
            throw new Error("Material Spec not updated")
        }

        return NextResponse.json({success:true}, {status:200})
    }catch(e){
        if(e.message === "Product ID is required"){
            return NextResponse.json({error:e.message},{status:400})
        }
        console.log(e.message)
        return NextResponse.json({error:e.message},{status:500})
    }
}


export async function GET(req){
    try{
        const url = new URL(req.url)
        const productId = url.searchParams.get("id")
        if(!productId){
            throw new Error("Product ID is required")
        }
        const materialSpecs = await getMaterialSpecs(productId)
        return Response.json({materialSpecs},{status:200})
    }catch(e){
        return Response.error(e.message,{status:500})
    }
}