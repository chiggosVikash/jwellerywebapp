'use client'
import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: '',
    category: '',
    subCategory: '',
    sku: '',
    description: '',
    goldKarat: '',
    goldWeight: '',
    diamondCarat: '',
    diamondQuality: '',
    numberOfDiamonds: '',
    metalType: '',
    jhumkaHeight: '',
    jhumkaWidth: '',
    costPrice: '',
    sellingPrice: '',
    makingCharges: '',
    discount: '',
    quantityAvailable: '',
    taxDetails: '',
    availabilityStatus: 'In Stock',
    certificationDetails: '',
    warranty: '',
    returnPolicy: '',
    supplierName: '',
    manufacturerDetails: '',
    countryOfOrigin: '',
    seoTitle: '',
    metaDescription: '',
    keywords: '',
    tags: '',
    shippingWeight: '',
    shippingClass: '',
    leadTime: '',
    shippingCharges: '',
    specialInstructions: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Product Details:', product);
  };

  return (
    <div className=" mx-auto p-6 bg-white/70 shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit}>

        {/* Product Details */}
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Product Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Category"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sub-Category</label>
            <input
              type="text"
              name="subCategory"
              value={product.subCategory}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Sub-Category"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">SKU</label>
            <input
              type="text"
              name="sku"
              value={product.sku}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="SKU"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Description"
            rows="4"
            required
          />
        </div>

        {/* Material Specifications */}
        <h3 className="text-lg font-semibold mb-4">Material Specifications</h3>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Gold Karat</label>
            <input
              type="text"
              name="goldKarat"
              value={product.goldKarat}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Gold Karat (e.g., 22K)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Gold Weight (g)</label>
            <input
              type="text"
              name="goldWeight"
              value={product.goldWeight}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Gold Weight (grams)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Diamond Carat</label>
            <input
              type="text"
              name="diamondCarat"
              value={product.diamondCarat}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Diamond Carat"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Diamond Quality</label>
            <input
              type="text"
              name="diamondQuality"
              value={product.diamondQuality}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Diamond Quality (e.g., VVS)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number of Diamonds</label>
            <input
              type="text"
              name="numberOfDiamonds"
              value={product.numberOfDiamonds}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Number of Diamonds"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Metal Type</label>
            <input
              type="text"
              name="metalType"
              value={product.metalType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Metal Type (e.g., Platinum)"
            />
          </div>
        </div>

        {/* Dimensions & Size */}
        <h3 className="text-lg font-semibold mb-4">Dimensions & Size</h3>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Jhumka Height (cm)</label>
            <input
              type="text"
              name="jhumkaHeight"
              value={product.jhumkaHeight}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Height (cm)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Jhumka Width (cm)</label>
            <input
              type="text"
              name="jhumkaWidth"
              value={product.jhumkaWidth}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Width (cm)"
            />
          </div>
        </div>

        {/* Pricing and Availability */}
        <h3 className="text-lg font-semibold mb-4">Pricing and Availability</h3>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Cost Price</label>
            <input
              type="text"
              name="costPrice"
              value={product.costPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Cost Price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Selling Price</label>
            <input
              type="text"
              name="sellingPrice"
              value={product.sellingPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Selling Price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Making Charges</label>
            <input
              type="text"
              name="makingCharges"
              value={product.makingCharges}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Making Charges"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Discount (%)</label>
            <input
              type="text"
              name="discount"
              value={product.discount}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Discount (%)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Quantity Available</label>
            <input
              type="text"
              name="quantityAvailable"
              value={product.quantityAvailable}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Quantity Available"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tax Details</label>
            <input
              type="text"
              name="taxDetails"
              value={product.taxDetails}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Tax Details (e.g., GST)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Availability Status</label>
            <select
              name="availabilityStatus"
              value={product.availabilityStatus}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Certification & Warranty */}
        <h3 className="text-lg font-semibold mb-4">Certification & Warranty</h3>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Certification Details</label>
            <input
              type="text"
              name="certificationDetails"
              value={product.certificationDetails}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Certification Details"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Warranty</label>
            <input
              type="text"
              name="warranty"
              value={product.warranty}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Warranty (e.g., 1 year)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Return Policy</label>
            <input
              type="text"
              name="returnPolicy"
              value={product.returnPolicy}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Return Policy (e.g., 30 days)"
            />
          </div>
        </div>

        {/* Supplier & Manufacturer */}
        <h3 className="text-lg font-semibold mb-4">Supplier & Manufacturer</h3>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Supplier Name</label>
            <input
              type="text"
              name="supplierName"
              value={product.supplierName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Supplier Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Manufacturer Details</label>
            <input
              type="text"
              name="manufacturerDetails"
              value={product.manufacturerDetails}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Manufacturer Details"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Country of Origin</label>
            <input
              type="text"
              name="countryOfOrigin"
              value={product.countryOfOrigin}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Country of Origin"
            />
          </div>
        </div>

        {/* SEO & Marketing */}
        <h3 className="text-lg font-semibold mb-4">SEO & Marketing</h3>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">SEO Title</label>
            <input
              type="text"
              name="seoTitle"
              value={product.seoTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="SEO Title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Meta Description</label>
            <input
              type="text"
              name="metaDescription"
              value={product.metaDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Meta Description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Keywords</label>
            <input
              type="text"
              name="keywords"
              value={product.keywords}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Keywords"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tags</label>
            <input
              type="text"
              name="tags"
              value={product.tags}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Tags"
            />
          </div>
        </div>

        {/* Logistics & Shipping */}
        <h3 className="text-lg font-semibold mb-4">Logistics & Shipping</h3>
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Shipping Weight (g)</label>
            <input
              type="text"
              name="shippingWeight"
              value={product.shippingWeight}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Shipping Weight (grams)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Shipping Class</label>
            <input
              type="text"
              name="shippingClass"
              value={product.shippingClass}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Shipping Class"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Lead Time (days)</label>
            <input
              type="text"
              name="leadTime"
              value={product.leadTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Lead Time (days)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Shipping Charges</label>
            <input
              type="text"
              name="shippingCharges"
              value={product.shippingCharges}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Shipping Charges"
            />
          </div>
        </div>

        {/* Additional Information */}
        <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Special Instructions</label>
          <textarea
            name="specialInstructions"
            value={product.specialInstructions}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Special Instructions"
            rows="3"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea
            name="notes"
            value={product.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Notes"
            rows="3"
          />
        </div>

        {/* Submit Button */}
        <div className="text-left">
          <button
            type="submit"
            className="bg-primary text-onPrimary  hover:scale-105 px-12 py-3 rounded-md hover:bg-accent transition  duration-500"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
