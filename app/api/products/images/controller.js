import ProductModel from "@/app/models/ProductModel";
import {dbConnect} from "@/app/lib/db/dbConnect";
import {deleteImage} from "@/app/services/firebase_storage_service";

export async function createProductAndUploadImage(productId,images){
    try{
        await dbConnect();
        const product = await ProductModel.create({productId,productImages:images})
        return product._id;
    }catch(e){
        console.log(e)
        return null;
    }
}

export async function deleteImageByUrl(imageUrl,productId){
    try{
        await dbConnect();

        const product = await ProductModel.findOneAndUpdate({"productId":productId},{$pull:{productImages:imageUrl}})
        const deleted = await deleteImage(imageUrl);
        if(!deleted){
            throw new Error("Failed to delete image")
        }   
        return product;
    }catch(e){
        console.log(e)
        return null;
    }
}
