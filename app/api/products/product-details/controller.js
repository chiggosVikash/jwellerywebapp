import { dbConnect } from '@/app/lib/db/dbConnect'
import ProductModel from '@/app/models/ProductModel'

export async function updateProductDetails(id, details) {
    try {
        await dbConnect();
        const updateResponse = await ProductModel.findByIdAndUpdate(id, details);
        if (updateResponse) {
            return true;
        }
        return false;
    } catch (e) {
        console.log(e);
        return e;
    }
}

export async function getProductDetails(id) {

    try {
        await dbConnect();
        const product = await ProductModel.findOne({ _id: id },
            { 
            
                productName: 1, 
                productCollection: 1, 
                subCategory: 1, 
                category: 1,
                gender:1,
                quantityAvailable:1,
                sku:1,
                availabilityStatus:1,
                
            });
            if(product){
                return product;
            }
            throw new Error('Product not found');
    } catch (e) {
        const error = e.errorResponse.errmsg || e.message;
        throw new Error(error);
    }
}