import ProductModel from "@/app/models/ProductModel";
import {dbConnect} from "@/app/lib/db/dbConnect";



export async function createProduct(productData){
  try{
    await dbConnect()
    const newProduct = new ProductModel(productData);
    await newProduct.save();
  return true;
  }catch(e){
    console.log(e);
    return false;
  }
  
}

export async function getProducts(reqCount,limit,category,subCategory,sortBy){
  try {
    await dbConnect();
    
    let query = {};
    if (category && category.trim() !== '') {
      query.category = category;
    }
    if (subCategory && subCategory.trim() !== '') {
      query.subCategory = subCategory;
    }

    let sortOption = {};
    if (sortBy === 'Price-LTH') {
      sortOption = { price: 1 };
    } else if (sortBy === 'Price-HTL') {
      sortOption = { price: -1 };
    } else {
      // Default sort by popularity (assuming there's a 'popularity' field)
      sortOption = { popularity: -1 };
    }

    const products = await ProductModel.find(query)
      .sort(sortOption)
      .skip(reqCount * limit)
      .limit(limit);
      

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}


export async function getProductById(id){
  try{
    await dbConnect()
    const product = await ProductModel.findOne({"productId":id})
    return product
  }catch(e){
    console.log(e)
    return null
  }
}

export async function updateProduct(id,productData){
  try{
    await dbConnect()
    const product = await ProductModel.findOneAndUpdate({"productId":id},productData)
    return product
  }catch(e){
    console.log(e)
    return null
  }
}

export async function searchProducts(query) {
  try {
    await dbConnect();
    const searchRegex = new RegExp(query, 'i');
    const products = await ProductModel.find({
      $or: [
        { productName: searchRegex },
        { description: searchRegex },
        { category: searchRegex },
        { subCategory: searchRegex },
        {sku: searchRegex},

        // Add more fields as needed
      ]
    }).limit(10);
    return products;
  } catch (e) {
    console.log(e);
    return [];
  }
}