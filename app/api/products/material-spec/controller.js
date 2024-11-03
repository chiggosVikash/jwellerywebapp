import ProductModel from "@/app/models/ProductModel";
import {dbConnect} from "@/app/lib/db/dbConnect";

export async function updateMaterialSpec(id,materialSpec){
    try{

        console.log("material spec update request",id,materialSpec)
        await dbConnect()
        const spec = await ProductModel.updateOne({_id:id},{materialSpecs:materialSpec})
        console.log("material spec update response",spec)
        if(spec.modifiedCount === 0 || spec.modifiedCount === null){
            throw new Error("Material Spec not updated")
        }
        return true;

    }catch(e){
        console.log(e)
        throw new Error(e.message)
    }
}