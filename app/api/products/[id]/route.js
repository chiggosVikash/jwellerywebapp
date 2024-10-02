import { getProductById } from "../controller";
import {NextResponse} from "next/server"

/**
 * GET handler for fetching a single product by ID
 * 
 * @param {Object} req - The request object
 * @param {Object} params - The route parameters
 * @param {string} params.id - The ID of the product to fetch
 * 
 * @returns {Response} JSON response containing the product data or an error message
 * 
 * @throws {Error} If there's an error fetching the product
 * 
 * @description
 * This function handles GET requests to fetch a single product by its ID.
 * It uses the getProductById function from the controller to retrieve the product.
 * If the product is found, it returns a 200 status with the product data.
 * If the product is not found, it returns a 404 status with an error message.
 * If there's an error during the process, it returns a 500 status with an error message.
 */
export async function GET(req, { params }) {
    try {
        const { id } = params
        const product = await getProductById(id)
        if (!product) {
            return Response.json({ data: "Product not found" }, { "status": 404 })
        }
        return Response.json({ data: product }, { "status": 200 })
    } catch (e) {
        console.log(e)
        return Response.json({ data: "Error fetching product", error: e }, { "status": 500 })
    }
}

export async function PUT(req){
    try{
        const reqData = req.json()
    }catch(e){
        NextResponse.status(500).json({data:"Error updating product",error:e})
    }
}