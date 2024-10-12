import ProductModel from "@/app/models/ProductModel";
import {dbConnect} from "@/app/lib/db/dbConnect";

/**
 * Create a new product in the database.
 * 
 * This function connects to the database and creates a new product
 * using the provided product data.
 *
 * @param {Object} productData - An object containing the product information.
 * @returns {Promise<boolean>} A promise that resolves to true if the product
 *                             is successfully created, false otherwise.
 *
 * @throws {Error} If there's an issue connecting to the database or saving the product.
 *
 * @example
 * const result = await createProduct({
 *   name: 'New Product',
 *   price: 29.99,
 *   category: 'Electronics'
 * });
 */
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

/**
 * Retrieve products from the database based on specified criteria.
 * 
 * This function fetches products from the database, applying filters, sorting,
 * and pagination as specified by the input parameters.
 *
 * @param {number} reqCount - The number of pages to skip (for pagination).
 * @param {number} limit - The maximum number of products to return.
 * @param {string} [category] - The category to filter products by (optional).
 * @param {string} [subCategory] - The subcategory to filter products by (optional).
 * @param {string} [sortBy] - The sorting criteria ('Price-LTH', 'Price-HTL', or default).
 * @returns {Promise<Array>} A promise that resolves to an array of product objects.
 *                           Returns an empty array if an error occurs.
 *
 * @throws {Error} If there's an issue connecting to the database or querying products.
 *
 * @example
 * const products = await getProducts(0, 10, 'Electronics', 'Smartphones', 'Price-LTH');
 */
export async function getProducts(reqCount, limit, category, subCategory, sortBy) {
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


/**
 * Retrieve a product from the database by its ID.
 * 
 * This function connects to the database and searches for a product
 * with the specified productId.
 *
 * @param {string} id - The unique identifier of the product to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves to the product object if found,
 *                                 or null if the product is not found or an error occurs.
 *
 * @throws {Error} If there's an issue connecting to the database or querying the product.
 *
 * @example
 * const product = await getProductById('123');
 */
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
/**
 * Update a product in the database.
 * 
 * This function updates a product's information in the database based on its ID.
 *
 * @param {string} id - The unique identifier of the product to update.
 * @param {Object} productData - An object containing the updated product information.
 * @returns {Promise<Object|null>} A promise that resolves to the updated product object,
 *                                 or null if the update fails or the product is not found.
 *
 * @throws {Error} If there's an issue connecting to the database or performing the update.
 *
 * @example
 * const updatedProduct = await updateProduct('123', { name: 'New Name', price: 19.99 });
 */
export async function updateProduct(id, productData) {
  try {
    await dbConnect()
    const product = await ProductModel.findOneAndUpdate({"productId": id}, productData)
    return product
  } catch (e) {
    console.error('Error updating product:', e)
    return null
  }
}

/**
 * Search for products based on a query string.
 * 
 * This function searches for products in the database using a case-insensitive
 * regular expression match on multiple fields.
 *
 * @param {string} query - The search query string.
 * @returns {Promise<Array>} A promise that resolves to an array of matching products.
 *                           Returns an empty array if an error occurs.
 *
 * @throws {Error} If there's an issue connecting to the database or performing the search.
 *
 * @example
 * const results = await searchProducts('blue shirt');
 */
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
        { sku: searchRegex },
        // Add more fields as needed
      ]
    }).limit(10);
    return products;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function browseProducts(reqCount, limit, filters) {
  try {
    let query = [];

    if (filters.length > 0) {
      query.push({ category: filters });
      query.push({ subCategory: filters });
      query.push({ metalType: filters });
      query.push({ gender: filters });
      query.push({ collection: filters });
      query.push({ availabilityStatus: filters });
    }

    await dbConnect();
    const skip = reqCount * limit;
    

    const products = await ProductModel.find(query.length > 0 ? { $or: query } : {})
      .skip(skip)
      .limit(limit);
    console.log("===================")
    return products;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function countProductsBasedOnFilters(filters) {
  try {
    let query = [];
    if (filters.length > 0) {
      query.push({ category: filters });
      query.push({ subCategory: filters });
      query.push({ metalType: filters });
      query.push({ gender: filters });
      query.push({ collection: filters });
      query.push({ availabilityStatus: filters });
    }
    await dbConnect();
    const counts = await ProductModel.countDocuments(query.length > 0 ? { $or: query } : {})
    return counts;
  } catch (e) {
    console.log(e);
    return 0;
  }
}


