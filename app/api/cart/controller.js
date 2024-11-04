import ProductModel from "@/app/models/ProductModel";
import CartModel from "@/app/models/CartModel";
import { dbConnect } from "@/app/lib/db/dbConnect";

export async function addToCart(data){
    await dbConnect();
    const product = await ProductModel.findById(data.productId)
    if(!product){
        throw new Error("Product not found");
    }
    const sellingPrice = product.sellingPrice;
    const totalPrice = sellingPrice * data.quantity;
    const cart = await CartModel.updateOne({user:data.email,product:product._id},{
        user:data.email,
        product:product._id,
        quantity:data.quantity,
        price:data.price,
        totalPrice:totalPrice
    },{upsert:true})
    return cart;

    
}

export async function getCartOfUser(email){
    await dbConnect();
    const carts = await CartModel.aggregate([
        {$match:{user:email}},
        {$lookup:{
            from:"products",
            localField:"product",
            foreignField:"_id",
            as:"product"
        }},
        {$unwind:"$product"},
        {$project:{
            "product.productName":1,
            "product.sellingPrice":1,
            "product.costPrice":1,
            "product.productImages":1,
            "product.category":1,
            "product.discount":1,
            "quantity":1,
            "totalPrice":1,
            "user":1,
            "price":1

        }}
    ])
    return carts;
}

export async function removeCartItem(email,id){
    await dbConnect();
    const cart = await CartModel.findOneAndDelete({"user":email,"_id":id})
    return cart;

}