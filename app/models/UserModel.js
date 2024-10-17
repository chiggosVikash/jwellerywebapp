
import mongoose from "mongoose";
import {v4 as uuid} from "uuid";

const UserSchema = new mongoose.Schema({
    userId: { type: String, default: uuid(), required: true },
    name: { type: String, required: true },
    email: {type:String,required:true,unique:true},
    phone: {type:String,default:""},
    password: {type:String,default:""},
}
, { timestamps: true });

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);
export default UserModel;