import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productImages:{
    type:[String],
    required:[true,"Please add at least one image"],
    default:[]
  },
  materialSpecs:{
    type:[{
      materialType: String,
      materialWeight: String,
      quality:String,
      materialPrice:Number,
      quantity:Number,
      price:Number,
      discount:String,
    }],
    default:[]
  },
  careInstructions:{
    type:[String],
    default:[]
  },
  productId: { type: String, unique: [true,"Product ID must be unique"], required: true },
  productName: { type: String,},
  category: { type: String,  },
  subCategory: String,
  sku: { type: String, },
  description: String,
  costPrice: { type: Number, },
  sellingPrice: { type: Number, },
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
  },
  isPublished:{
    type:Boolean,
    default:false
  }
}, { timestamps: true });

const ProductModel = mongoose.models.Product || mongoose.model('Product', ProductSchema);
export default ProductModel;
