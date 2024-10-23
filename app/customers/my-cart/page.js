'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function Cart() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Progress Bar */}
      <div className="flex justify-center items-center mb-8">
        <span className="font-bold">Cart</span>
        <span className="mx-2 text-gray-300">- - - - - - -</span>
        <span className="text-gray-400">Address</span>
        <span className="mx-2 text-gray-300">- - - - - - -</span>
        <span className="text-gray-400">Payment</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Delivery Check */}
          <div className="bg-indigo-200 rounded-lg p-4 flex justify-between items-center mb-6">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="text-indigo-800">Check delivery time & services</span>
            </div>
            <button className="bg-indigo-300 text-indigo-800 px-4 py-2 rounded-lg">Enter pincode</button>
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row">
              <Image src="/path-to-ring-image.jpg" alt="Pihtara Jewels Himalayan" width={150} height={150} className="rounded-lg mr-6 mb-4 md:mb-0" />
              <div>
                <h2 className="text-2xl font-bold text-red-800">Pihtara Jewels Himalayan</h2>
                <p className="text-gray-600 mb-2">From Veliciae Woman collection</p>
                <p className="text-2xl font-bold text-red-800 mb-4">Rs 47579</p>
                
                {/* Quantity Selector */}
                <div className="flex items-center mb-4">
                  <span className="mr-3 text-gray-600">Quantity:</span>
                  <button 
                    onClick={decreaseQuantity}
                    className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="bg-gray-100 px-4 py-1">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
                
                <div className="flex space-x-4">
                  <button className="text-gray-600 hover:text-red-600 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    Remove from cart
                  </button>
                  <button className="text-gray-600 hover:text-red-600 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    Move to Wishlist
                  </button>
                </div>
                <div className="mt-4">
                  <label className="flex items-center text-gray-600">
                    <input type="checkbox" className="mr-2" />
                    Add Gift Message
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4">
            {['Purity Guaranteed', 'Exchange across all stores', 'Free Shipping'].map((feature, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 flex items-center justify-center text-center">
                <span className="font-semibold text-red-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Available Offers */}
          <div className="bg-pink-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold mb-2">Available Offers</h3>
            <p className="text-sm">10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA</p>
            <a href="#" className="text-sm text-blue-600 hover:underline">More offers</a>
          </div>

          {/* Discount Banner */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg p-4 mb-6">
            <p className="text-lg font-bold">Shop for ₹ 100,000</p>
            <p className="text-3xl font-bold">or more get 3% OFF*</p>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-4">ORDER SUMMARY</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Sub total</span>
                <span>Rs. 47579</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-Rs. 3500</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>TOTAL (Incl of all Taxes.)</span>
                <span>Rs 44079</span>
              </div>
              <div className="flex justify-between text-green-600 font-bold">
                <span>YOU SAVE</span>
                <span>Rs. 4000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-indigo-100 p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-800">Total amount : Rs {47579 * quantity}</div>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}