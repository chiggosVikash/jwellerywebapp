import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productImages:{
    type:[String],
    required:[true,"Please add at least one image"],
    default:[]
  },
  productId: { type: String, unique: [true,"Product ID must be unique"], required: true },
  productName: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: String,
  sku: { type: String, unique: [true,"SKU must be unique"], required: true },
  description: String,
  goldKarat: String,
  goldWeight: Number,
  diamondCarat: Number,
  diamondQuality: String,
  numberOfDiamonds: Number,
  metalType: String,
  jhumkaHeight: Number,
  jhumkaWidth: Number,
  costPrice: { type: Number, required: true },
  sellingPrice: { type: Number, required: true },
  makingCharges: Number,
  discount: Number,
  quantityAvailable: { type: Number, default: 0 },
  taxDetails: String,
  availabilityStatus: { type: String, default: 'In Stock' },
  certificationDetails: String,
  warranty: String,
  returnPolicy: String,
  productCollection: String,
  gender: {
    type: String,
    enum: ['Male','Female','Child',"Unisex"],
    required: [true,"Gender is required"]
  },
  // supplierName: String,
  // manufacturerDetails: String,
  // countryOfOrigin: String,
  // seoTitle: String,
  // metaDescription: String,
  // keywords: [String],
  // tags: [String],
  // shippingWeight: Number,
  // shippingClass: String,
  // leadTime: String,
  // shippingCharges: Number,
  // specialInstructions: String,
  // notes: String,
}, { timestamps: true });

const ProductModel = mongoose.models.Product || mongoose.model('Product', ProductSchema);
export default ProductModel;
