import ProductModel from "@/app/models/ProductModel";
import {dbConnect} from "@/app/lib/db/dbConnect";

export async function updateMaterialSpec(id,materialSpec){
    try{
        await dbConnect()
        const spec = await ProductModel.findByIdAndUpdate(id,{materialSpecs:materialSpec})
    }catch(e){

    }
}