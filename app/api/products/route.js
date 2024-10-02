// This is the route file for the products API
// It contains the route handlers for the products API

import {createProduct,getProducts,searchProducts} from './controller.js'
import { NextResponse } from 'next/server';




export async function GET(req) {
  // Your existing code to fetch or prepare data
try{
  const url = new URL(req.url)
  const searchParams = url.searchParams
  const query = searchParams.get("query") || "" 
  console.log("Searching for products with query:", query)
  // search products if query is present
  if(query){
    const products = await searchProducts(query)
    return NextResponse.json({data:products},{status:200})
  }

  // get products if query is not present
  const reqCount = parseInt(searchParams.get("reqCount") || 0)
  const limit = parseInt(searchParams.get("limit") || 10)
  const category = searchParams.get("category") || ""
  const subCategory = searchParams.get("subCategory") || ""
  const sortBy = searchParams.get("sortBy") || ""

  const products = await getProducts(reqCount,limit,category,subCategory,sortBy)

  // Instead of NextResponse.json(data), use:
  return Response.json({data:products},{"status":200});
}catch(e){
    return Response.json({data:"Error fetching products",error:e},{"status":500})
}
}


/// save product 
export async function POST(req){
    try{
        const body = await req.json()
        const product = await createProduct(body)
        console.log("product created",product)
        if(!product){
            throw new Error("Failed to create product")
        }
        return NextResponse.json({message:"Product Created"},{status:201})
    }catch(error){
        return NextResponse.error(`Failed ${error}`,{status:500})
    }
}


