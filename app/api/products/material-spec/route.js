import { NextResponse } from "next/server";
export async function PUT(req){
    try{    
        const spec = await req.json()
        //TODO: Add logic to update the material spec in database
        return NextResponse.json({success:true}, {status:200})
    }catch(e){
        return NextResponse.json({error:e.message},{status:500})
    }
}