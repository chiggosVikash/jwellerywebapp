import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    streetLocality: {
        type: String,
        required: true
    },
    flatNumber: String,
    landmark:String,
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },

    addressType: {
        type: String,
        default: "home"
    },
    isDefault: {
        type: Boolean,
        default: false
    }


}, { timestamps: true });

const AddressModel = mongoose.models?.Address || mongoose.model('Address', AddressSchema);
export default AddressModel;