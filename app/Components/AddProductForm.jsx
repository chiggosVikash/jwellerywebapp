'use client'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {usePictures} from '@/context/Pictures';
import {uploadImages} from '../services/firebase_storage_service.js'
import ErrorDialogue from './ErrorDialogue.jsx';
import SuccessDialogue from './SuccessDialogue.jsx';
import LoadingDialogue from './LoadingDialogue.jsx';
import productSchema from '@/schemas/ProductSchema.js'
import { useSaveProduct } from '@/context/SaveProduct';

const AddProduct = () => {

  const defaultProductValues = {
    productId: uuidv4(),
    productImges: [],
    quantityAvailable: "1",
    availabilityStatus: 'In Stock',
    makingCharges: "0",
    
  }

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues:defaultProductValues
  });

  const usePictureState = usePictures();
  const { saveProduct, saveStatus, resetSaveStatus,setErrorState,setSavingStatus } = useSaveProduct();

  const resetForm = ()=>{
    // reload the page
    window.location.reload()
  } 

  const savePictures = async ()=>{
    if(usePictureState.pictures.length === 0){
      throw new Error("Please upload at least one image")
    }
    const images = usePictureState.pictures.map((image)=>{
      return {productId:setValue('productId'),file:image}
    })
    const urls = await uploadImages(images);
    return urls;
  }

  const onSubmit = async (data) => {
      try {
        setSavingStatus("Saving product...")
        const urls = await savePictures();
        data.productImages = urls;

        data.productId = uuidv4()
        await saveProduct(data);

        // resetForm()
      } catch (error) {
        setErrorState(error.message || "An error occurred while saving the product");
      }
  };


 


  

  return (
    <div className=" mx-auto p-6 bg-white/70 shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">Add New Product</h2>

     <LoadingDialogue isLoading={saveStatus.isLoading} message={saveStatus.loadingMessage} />
     <ErrorDialogue isError={saveStatus.isError} errorMessage={saveStatus.errorMessage} onReload={resetSaveStatus} />
     <SuccessDialogue open={saveStatus.isSuccess} message={saveStatus.successMessage} onClose= {()=>{resetSaveStatus();resetForm()}} />
    

     {/* {saveStatus.isSuccess && <p>Success {saveStatus.successMessage}</p>}
     {saveStatus.isError && <p>Error {saveStatus.errorMessage}</p>} */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Details */}
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Product Name</label>
            <input
              {...register('productName')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Product Name"
            />
            {errors.productName && <p className="text-red-500 text-sm mt-1">{errors.productName.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              {...register('category')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Category"
            />
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sub-Category</label>
            <input
              {...register('subCategory')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Sub-Category"
            />
            {errors.subCategory && <p className="text-red-500 text-sm mt-1">{errors.subCategory.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">SKU</label>
            <input
              {...register('sku')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="SKU"
            />
            {errors.sku && <p className="text-red-500 text-sm mt-1">{errors.sku.message}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            {...register('description')}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Description"
            rows="4"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        {/* Material Specifications */}
        <h3 className="text-lg font-semibold mb-4">Material Specifications</h3>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Gold Karat</label>
            <input
              {...register('goldKarat')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Gold Karat (e.g., 22K)"
            />
            {errors.goldKarat && <p className="text-red-500 text-sm mt-1">{errors.goldKarat.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Gold Weight (g)</label>
            <input
              {...register('goldWeight')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Gold Weight (grams)"
            />
            {errors.goldWeight && <p className="text-red-500 text-sm mt-1">{errors.goldWeight.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Diamond Carat</label>
            <input
              {...register('diamondCarat')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Diamond Carat"
            />
            {errors.diamondCarat && <p className="text-red-500 text-sm mt-1">{errors.diamondCarat.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Diamond Quality</label>
            <input
              {...register('diamondQuality')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Diamond Quality (e.g., VVS)"
            />
            {errors.diamondQuality && <p className="text-red-500 text-sm mt-1">{errors.diamondQuality.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number of Diamonds</label>
            <input
              {...register('numberOfDiamonds')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Number of Diamonds"
            />
            {errors.numberOfDiamonds && <p className="text-red-500 text-sm mt-1">{errors.numberOfDiamonds.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Metal Type</label>
            <input
              {...register('metalType')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Metal Type (e.g., Platinum)"
            />
            {errors.metalType && <p className="text-red-500 text-sm mt-1">{errors.metalType.message}</p>}
          </div>
        </div>

        {/* Dimensions & Size */}
        <h3 className="text-lg font-semibold mb-4">Dimensions & Size</h3>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Jhumka Height (cm)</label>
            <input
              {...register('jhumkaHeight')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Height (cm)"
            />
            {errors.jhumkaHeight && <p className="text-red-500 text-sm mt-1">{errors.jhumkaHeight.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Jhumka Width (cm)</label>
            <input
              {...register('jhumkaWidth')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Width (cm)"
            />
            {errors.jhumkaWidth && <p className="text-red-500 text-sm mt-1">{errors.jhumkaWidth.message}</p>}
          </div>
        </div>

        {/* Pricing and Availability */}
        <h3 className="text-lg font-semibold mb-4">Pricing and Availability</h3>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Cost Price</label>
            <input
              {...register('costPrice')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Cost Price"
            />
            {errors.costPrice && <p className="text-red-500 text-sm mt-1">{errors.costPrice.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Selling Price</label>
            <input
              {...register('sellingPrice')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Selling Price"
            />
            {errors.sellingPrice && <p className="text-red-500 text-sm mt-1">{errors.sellingPrice.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Making Charges</label>
            <input
              {...register('makingCharges')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Making Charges"
            />
            {errors.makingCharges && <p className="text-red-500 text-sm mt-1">{errors.makingCharges.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Discount (%)</label>
            <input
              {...register('discount')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Discount (%)"
            />
            {errors.discount && <p className="text-red-500 text-sm mt-1">{errors.discount.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Quantity Available</label>
            <input
              {...register('quantityAvailable')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Quantity Available"
            />
            {errors.quantityAvailable && <p className="text-red-500 text-sm mt-1">{errors.quantityAvailable.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tax Details</label>
            <input
              {...register('taxDetails')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Tax Details (e.g., GST)"
            />
            {errors.taxDetails && <p className="text-red-500 text-sm mt-1">{errors.taxDetails.message}</p>}
          </div>
          {/* Availability Status */}
          <div>
            <label className="block text-sm font-medium mb-1">Availability Status</label>
            <select
              {...register('availabilityStatus')}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
            {errors.availabilityStatus && <p className="text-red-500 text-sm mt-1">{errors.availabilityStatus.message}</p>}
          </div>

           {/* Product Belongs to this collection */}
        <div>
            <label className="block text-sm font-medium mb-1">Collection</label>
            <select
              {...register('collection')}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="Engagement Rings">Engagement Rings</option>
              <option value="Wedding Rings">Wedding Rings</option>
              <option value="Necklaces">Necklaces</option>
              <option value="Bracelets">Bracelets</option>
              <option value="Earrings">Earrings</option>
              <option value="Bangles">Bangles</option>
              <option value="Pendants">Pendants</option>
              <option value="Rings">Rings</option>
              <option value="Other">Other</option>
            </select>
              {errors.collection && <p className="text-red-500 text-sm mt-1">{errors.collection.message}</p>}
          </div>
        
        </div>

        {/* Product Belongs to this collection */}
        {/* <div>
            <label className="block text-sm font-medium mb-1">Collection</label>
            <select
              {...register('collection')}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="Engagement Rings">Engagement Rings</option>
              <option value="Wedding Rings">Wedding Rings</option>
              <option value="Necklaces">Necklaces</option>
              <option value="Bracelets">Bracelets</option>
              <option value="Earrings">Earrings</option>
              <option value="Bangles">Bangles</option>
              <option value="Pendants">Pendants</option>
              <option value="Rings">Rings</option>
              <option value="Other">Other</option>
            </select>
              {errors.collection && <p className="text-red-500 text-sm mt-1">{errors.collection.message}</p>}
          </div> */}
        

        {/* Certification & Warranty */}
        <h3 className="text-lg font-semibold mb-4">Certification & Warranty</h3>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Certification Details</label>
            <input
              {...register('certificationDetails')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Certification Details"
            />
            {errors.certificationDetails && <p className="text-red-500 text-sm mt-1">{errors.certificationDetails.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Warranty</label>
            <input
              {...register('warranty')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Warranty (e.g., 1 year)"
            />
            {errors.warranty && <p className="text-red-500 text-sm mt-1">{errors.warranty.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Return Policy</label>
            <input
              {...register('returnPolicy')}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Return Policy (e.g., 30 days)"
            />
            {errors.returnPolicy && <p className="text-red-500 text-sm mt-1">{errors.returnPolicy.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-left">
          <button
            type="submit"
            className="bg-primary text-onPrimary hover:scale-105 px-12 py-3 rounded-md hover:bg-accent transition duration-500"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
