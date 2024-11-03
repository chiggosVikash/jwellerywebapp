import {NextResponse} from 'next/server'
import {updateProductDetails,getProductDetails} from './controller'



export async function PATCH(req){
    try{
        const {id,productDetails} = await req.json();
        const response = await updateProductDetails(id,productDetails);
        if(response){
            return NextResponse.json({message:'Product details updated successfully'},{status:200});
        }

        return NextResponse.error({message:"Product Details not added"},{status:500});
    
    }catch(e){
        console.log(e);
        return NextResponse.error(e,{status:500});
    }
}

export async function GET(req){
    try{
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        if(!id){
            return NextResponse.error({message:"Product ID not found"},{status:400});
        }
        const productDetails = await getProductDetails(id);
        return Response.json({productDetails},{status:200});
    }catch(e){
        console.log(e);
        return Response.error(e,{status:500});
    }
}