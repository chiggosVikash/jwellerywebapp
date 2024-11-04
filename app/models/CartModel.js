import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    user: {
        type:String,
        required:[true,"User Email is required"]
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const CartModel = mongoose.models.Cart || mongoose.model('Cart', CartSchema);
export default CartModel;
