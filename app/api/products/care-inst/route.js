import { NextResponse } from "next/server";
import {updateCareInstructions,getCareInstructions} from './controller'
export async function PUT(req){
    try{
        const {id,careInstructions} = await req.json();
        const response = await updateCareInstructions(id,careInstructions);
        if(response){
            return NextResponse.json({message:'Care Instructions updated successfully'},{status:200});
        }
        return NextResponse.error({message:"Care Instructions not added"},{status:500});
    }catch(e){
        return NextResponse.error(e,{status:500});
    }
}

export async function GET(req){
    try{
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        if(!id){
            return Response.error({message:"Product ID not found"},{status:400});
        }
        const careInstructions = await getCareInstructions(id);
        return Response.json({careInstructions},{status:200});
    }catch(e){
        return Response.error(e,{status:500});
    }
}