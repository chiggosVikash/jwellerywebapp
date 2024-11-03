import ProductModel from "@/app/models/ProductModel";
import {dbConnect} from "@/app/lib/db/dbConnect";

export async function updateCareInstructions(id,careInstructions){
    try{
        await dbConnect()
        const product = await ProductModel.updateOne({_id:id},{careInstructions:careInstructions})
        if(product.modifiedCount === 0 || product.modifiedCount === null){
            throw new Error("Care Instructions not updated")
        }
        return true;
    }catch(e){
        throw new Error(e.message)
    }
}

export async function getCareInstructions(id){
    try{
        await dbConnect()
        const product = await ProductModel.findOne({_id:id},{careInstructions:1})
        if(!product){
            throw new Error("Product not found")
        }
        return product.careInstructions;
    }catch(e){
        throw new Error(e.message)
    }
}
