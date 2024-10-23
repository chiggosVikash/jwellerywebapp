import { dbConnect } from "@/app/lib/db/dbConnect";


export async function GET(req) {
    try{
        await dbConnect();
        return Response.json({message:"Connected to database"},{status:200});
    }catch(e){
        return Response.json({error:e.message},{status:500});
    
    }
    
}