// This is the route file for the products API
// It contains the route handlers for the products API

import { createProduct, getProducts, searchProducts } from './controller.js'
import { NextResponse } from 'next/server';




export async function GET(req) {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    const query = searchParams.get("query") || "";

    // if query is present, search for products
    if (query) {
      const products = await searchProducts(query);
      return Response.json({ data: products }, { status: 200 });
    }

    // if query is not present, get products
    const reqCount = parseInt(searchParams.get("reqCount") || 0);
    const limit = parseInt(searchParams.get("limit") || 10);
    const category = searchParams.get("category") || "";
    const subCategory = searchParams.get("subCategory") || "";
    const sortBy = searchParams.get("sortBy") || "";

    const products = await getProducts(reqCount, limit, category, subCategory, sortBy);
    return Response.json({ data: products }, { status: 200 });


  } catch (e) {
    console.error("Error in GET request:", e);
    return Response.json({ error: "Error fetching products", message: e.message }, { status: 500 });
  }
}


/// save product 
export async function POST(req) {
  try {
    const body = await req.json()
    const product = await createProduct(body)
    console.log("product created", product)
    if (!product) {
      throw new Error("Failed to create product")
    }
    return NextResponse.json({ message: "Product Created" }, { status: 201 })
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.error(`Failed ${error}`, { status: 500 })
  }
}



