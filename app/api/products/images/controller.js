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

export async function deleteImageByUrl(imageUrl,id){
    try{
        await dbConnect();

        const product = await ProductModel.findOneAndUpdate({_id:id},{$pull:{productImages:imageUrl}})
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

export async function getImages(id){
    try{
        await dbConnect();
        const product = await ProductModel.findById(id).select("productImages");
        return product.productImages;
    }catch(e){
        return e.message || "Failed to get images";
    }
}

export async function updateProductImages(id,productImages){
    try{
        await dbConnect();
        const product = await ProductModel.updateOne({_id:id},{productImages});
        if(product.modifiedCount === 0 || product.modifiedCount === null){
            throw new Error("Failed to update images")
        }
        return true;
    }catch(e){
        return e.message || "Failed to update images";
    }
}

