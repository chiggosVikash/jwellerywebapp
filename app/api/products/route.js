// This is the route file for the products API
// It contains the route handlers for the products API

import {createProduct} from './controller.js'
import { NextResponse } from 'next/server';


export async function GET(req) {
  // Your existing code to fetch or prepare data

  const url = new URL(req.url)
  const searchParams = url.searchParams
  console.log(searchParams)
  const data = {message:"Hello World"};

  // Instead of NextResponse.json(data), use:
  return Response.json(data);
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