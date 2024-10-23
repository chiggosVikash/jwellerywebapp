import UserModel from "@/app/models/UserModel";
import ProductModel from "@/app/models/ProductModel";
import CartModel from "@/app/models/CartModel";

export async function addToCart(data){
    const user = await UserModel.findOne({email:data.email})
    if(!user){
        throw new Error("User not found");
    }
    const productId = await ProductModel.findById(data.productId)
    if(!productId){
        throw new Error("Product not found");
    }
    const cart = await CartModel.create({
        user:user._id,
        product:productId._id,
        quantity:data.quantity,
        price:data.price,
        totalPrice:data.totalPrice
    })
    return cart;

    
}

export async function getCartOfUser(email){
    const user = await UserModel.findOne({email:email})
    if(!user){
        throw new Error("User not found");
    }
    const cart = await CartModel.find({user:user._id})
    return cart;
}

export async function removeCartItem(email,id){
    const user = await UserModel.findOne({email:email})
    if(!user){
        throw new Error("User not found");
    }
    const cart = await CartModel.deleteOne({user:user._id,product:id})
    return cart;

}