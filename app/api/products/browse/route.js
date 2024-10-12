import { NextResponse } from "next/server";
import {browseProducts,countProductsBasedOnFilters} from "../controller"

export async function POST(req){
    try{
        const body = await req.json()
        const {filters,reqCount,limit} = body
        console.log(body);
        const products = await browseProducts(reqCount,limit,filters)
        console.log(products.length)
        return NextResponse.json({products:products,status:200})
    }catch(e){
        return NextResponse.json({products:[],status:500,message:e.message})
    }
}

export async function PUT(req){
    try{
        const body = await req.json()
        const {filters} = body
        const count = await countProductsBasedOnFilters(filters)
        return NextResponse.json({status:200,count:count})
    }catch(e){
        console.log(e);
        return NextResponse.json({status:500,message:e.message,count:0})
    }

}

