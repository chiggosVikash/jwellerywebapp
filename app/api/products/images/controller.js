import ProductModel from "@/app/models/ProductModel";
import {dbConnect} from "@/app/lib/db/dbConnect";
import {deleteImage} from "@/app/services/firebase_storage_service";

export async function createProductAndUploadImage(productId,productImages){
    const product = {
        productId,
        productImages
    }
    try{
        await dbConnect();
        const result = await ProductModel.create(product);
        return result._id;
    }catch(e){
        const message = e.errorResponse.errmsg || e.message;
        throw new Error(message);
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

