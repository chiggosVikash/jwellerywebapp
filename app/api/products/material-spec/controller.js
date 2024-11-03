import ProductModel from "@/app/models/ProductModel";
import {dbConnect} from "@/app/lib/db/dbConnect";

export async function updateMaterialSpec(id,materialSpec){
    try{

        await dbConnect()
        let costPrice = 0;
        let sellingPrice = 0;
        let discountAmount = 0;

        for(let index = 0 ; index < materialSpec.length;index++){
            const matSpec = materialSpec[index]
            const price = parseInt(matSpec.price ?? "0")
            costPrice += price
            if(matSpec.discount.includes("%")){
                
                const dis = parseInt(matSpec.discount.replace("%",""))
                discountAmount += price * (dis/100)
            }else{
                if(matSpec.discount === "" || matSpec.discount === null){
                    continue;
                }
                discountAmount += parseInt(matSpec.discount ?? "0")
            }
        }
        sellingPrice = costPrice - discountAmount;
        
        const spec = await ProductModel.updateOne({_id:id},{
            costPrice:costPrice,
            sellingPrice:sellingPrice,
            discount:discountAmount,
            isPublished:true,
            materialSpecs:materialSpec})
        if(spec.modifiedCount === 0 || spec.modifiedCount === null){
            throw new Error("Material Spec not updated")
        }
        return true;

    }catch(e){
        throw new Error(e.message)
    }
}

export async function getMaterialSpecs(id){
    try{
        await dbConnect()
        const product = await ProductModel.findOne({_id:id},{materialSpecs:1})
        if(!product){
            throw new Error("Product not found")
        }
        return product.materialSpecs;
    }catch(e){
        throw new Error(e.message)
    }
}