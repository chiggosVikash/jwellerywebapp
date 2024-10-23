import AdminModel from "@/app/models/AdminModel";
import { dbConnect } from "@/app/lib/db/dbConnect";

export async function verifyAdmin(email,password){
    try{
        await dbConnect();
        const admin = await AdminModel.findOne({email:email,password:password});
        if(admin){
            return true;
        }else{
            return false;
        }
    }catch(e){
        console.log(e.message)
    }
}


