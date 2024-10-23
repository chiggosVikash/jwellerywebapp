import { verifyAdmin } from "./controller";

export async function GET(req){
    try{
        const url = new URL(req.url);
        const email = url.searchParams.get("email");
        const password = url.searchParams.get("password");

        console.log("Request received for sigin in admin",email,password);

        const result = await verifyAdmin(email,password);
        if(result){
            return Response.json({message:"Admin verified"},{status:200});
        }else{
            return Response.json({message:"Admin not verified"},{status:401});
        }
    }catch(e){
        return Response.json({message:`Error: ${e.message}`},{status:500});
    }
    

}