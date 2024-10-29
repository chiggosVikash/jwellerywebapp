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
      materialQuality:String,
      materialPrice:Number,
      materialDiscount:{type:Number,default:0},
    }],
    default:{}
  },
  careInstructions:{
    type:[String],
    default:[]
  },
  productId: { type: String, unique: [true,"Product ID must be unique"], required: true },
  productName: { type: String,},
  category: { type: String,  },
  subCategory: String,
  sku: { type: String, unique: [true,"SKU must be unique"] },
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
