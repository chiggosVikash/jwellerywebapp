import AddressModel from "@/app/models/AddressModel";
import { dbConnect } from "@/app/lib/db/dbConnect";

export async function getDefaultAddress(email) {
  try {
    await dbConnect();
    const address = await AddressModel.findOne({ userId: email, isDefault: true });
    return address;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getAllAddresses(email) {
  try {
    await dbConnect();
    const addresses = await AddressModel.find({ userId: email });
    return addresses;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function addAddress(address){
    try{
        await dbConnect();
        const newAddress = await AddressModel.create(address);
        return newAddress;
    }catch(e){
        throw new Error(e.message);
    }   
}

export async function changeDefaultAddress(email, addressId){
  try{
    await dbConnect();
    const updatedAddress = await AddressModel.updateMany({userId: email}, {isDefault: false});
    if(updatedAddress.modifiedCount <= 0){
      throw new Error("No address found to update");
    }
    const address = await AddressModel.updateOne({_id: addressId}, {isDefault: true});
    if(address.modifiedCount <= 0){
      throw new Error("Address not found");
    }
    return true;
  }catch(e){
    throw new Error(e.message);
  }
}

export async function deleteAddress(addressId){
  try{
    await dbConnect();
    const address = await AddressModel.findByIdAndDelete(addressId);
    return address;
  }catch(e){
    throw new Error(e.message);
  }
}