import {dbConnect} from '@/app/lib/db/dbConnect'
import ProductModel from '@/app/models/ProductModel'

export async function updateProductDetails(id,details){
    try{
        await dbConnect();
        const updateResponse = await ProductModel.findByIdAndUpdate(id,details);
        if(updateResponse){
            return true;
        }
        return false;
    }catch(e){
        console.log(e);
        return e;
    }
}