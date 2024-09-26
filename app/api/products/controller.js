import ProductModel from "@/app/models/ProductModel";
import {dbConnect} from "@/app/lib/db/dbConnect";

export async function createProduct(productData){
    await dbConnect()
    console.log("request received ",productData)
    const newProduct = new ProductModel(productData);
    await newProduct.save();
  return true;

}