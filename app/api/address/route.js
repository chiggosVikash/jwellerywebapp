import { getAllAddresses,addAddress,changeDefaultAddress,deleteAddress } from "./controller";
import { NextResponse } from "next/server";
export async function GET(req){
    try{
        const url = new URL(req.url);
        const email = url.searchParams.get("email");
        const addresses = await getAllAddresses(email);
        return Response.json(addresses,{status:200});
    }catch(e){
        return Response.json({message:`Error: ${e.message}`},{status:500});
    }
    
    
}

export async function POST(req){
    try{
        
        const {address} = await req.json();
        const adres = await addAddress(address);
        if(adres){
            return NextResponse.json({message:"Address added successfully"},{status:200});
        }
    }catch(e){
        return NextResponse.json({message:`Error: ${e.message}`},{status:500});
    }
}

export async function PATCH(req){
    try{
        const {email,addressId} = await req.json();
        const address = await changeDefaultAddress(email,addressId);
        if(address){
            return NextResponse.json({message:"Address updated successfully"},{status:200});
        }
        throw new Error("Address not found");
    }catch(e){
        return NextResponse.json({message:`Error: ${e.message}`},{status:500});
    }
}

export async function DELETE(req){
    try{
        const url = new URL(req.url);
        const addressId = url.searchParams.get("addressId");
        const address = await deleteAddress(addressId);
        if(address){
            return NextResponse.json({message:"Address deleted successfully"},{status:200});
        }
        throw new Error("Address not found");
    }catch(e){
        return NextResponse.json({message:`Error: ${e.message}`},{status:500});
    }
}