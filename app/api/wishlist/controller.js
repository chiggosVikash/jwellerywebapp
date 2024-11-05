import ProductModel from "@/app/models/ProductModel";
import WishlistModel from "@/app/models/WishlistModel";
import { dbConnect } from "@/app/lib/db/dbConnect";

export async function addToWishlist(data){
    await dbConnect();
    const product = await ProductModel.findById(data.productId)
    if(!product){
        throw new Error("Product not found");
    }
    const sellingPrice = product.sellingPrice;
    const totalPrice = sellingPrice * data.quantity;
    const wishlistRecord = await WishlistModel.updateOne({user:data.email,product:product._id},{
        user:data.email,
        product:product._id,
        quantity:data.quantity,
        price:data.price,
        totalPrice:totalPrice
    },{upsert:true})
    return wishlistRecord;

    
}

export async function getWishlistOfUser(email){
    console.log("Email",email) 
    await dbConnect();
    const userWishlist = await WishlistModel.aggregate([
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
            "price":1,
            "product._id":1

        }}
    ])
    // console.log("User Wishlist",userWishlist)
    return userWishlist;
}

export async function removeWishlistItem(email,id){
    await dbConnect();
    const wishlistItem = await WishlistModel.findOneAndDelete({"user":email,"_id":id})
    return wishlistItem;

}