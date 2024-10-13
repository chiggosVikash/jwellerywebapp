import Image from 'next/image';

export default function OrderDetails() {
    return (
      <div className="max-w-5xl mx-auto p-8 bg-rose-50">
        
        
        <div className="flex justify-between items-center mb-8">
          <p className="text-rose-700 italic">
            Ordered on <span className="font-semibold">30 September 2024</span> | Order# <span className="font-semibold">171-5787672-8744364</span>
          </p>
          <button className="text-rose-600 font-semibold hover:text-rose-800 transition-colors duration-300 hover:underline">
            Invoice <span className="ml-1">▼</span>
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300 border-2 border-rose-200">
          <div className="grid grid-cols-3 gap-8">
            <div className="border-r border-gray-200 pr-6">
              <h2 className="font-semibold mb-3 text-lg text-gray-800">Shipping Address</h2>
              <p className="text-sm text-gray-600">Joydeep Das</p>
              <p className="text-sm text-gray-600">Amity University, Kolkata, Major</p>
              <p className="text-sm text-gray-600">Arterial Road</p>
              <p className="text-sm text-gray-600">Action Area II, Rajarhat, New Town</p>
              <p className="text-sm text-gray-600">NEW TOWN, WEST BENGAL 700135</p>
              <p className="text-sm text-gray-600">India</p>
            </div>
            <div className="border-r border-gray-200 pr-6">
              <h2 className="font-semibold mb-3 text-lg text-gray-800">Payment Method</h2>
              <p className="text-sm text-gray-600">Pay on Delivery</p>
            </div>
            <div>
              <h2 className="font-semibold mb-3 text-lg text-gray-800">Order Summary</h2>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Item(s) Subtotal:</span>
                <span>₹45,786</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Shipping:</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Cash/Pay on Delivery fee:</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Total:</span>
                <span>₹45,786</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Promotion Applied:</span>
                <span>-₹0</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-gray-800 mt-2 pt-2 border-t border-gray-200">
                <span>Grand Total:</span>
                <span>₹45,786</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-6 border-b border-rose-200 pb-4">
            <div>
              <h2 className="font-bold text-2xl text-rose-800">Your Exquisite Selection</h2>
            </div>
            <div>
              <button className="bg-rose-400 text-white font-semibold py-2 px-6 rounded-full mr-4 hover:bg-rose-500 transition-all duration-300 hover:shadow-md">
                Track your treasure
              </button>
              <button className="border border-rose-300 text-rose-700 font-semibold py-2 px-6 rounded-full hover:bg-rose-100 transition-all duration-300 hover:shadow-md">
                View or edit order
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/3 mr-8 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/path-to-your-image.jpg"
                alt="Pihtora Jewels Himalayan"
                width={300}
                height={300}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <div className="w-2/3">
              <h3 className="font-bold text-2xl text-rose-800 mb-2 hover:text-rose-600 transition-colors duration-300">Pihtora Jewels Himalayan</h3>
              <p className="text-rose-600 mb-2 italic">From the Veliciae Woman collection</p>
              <p className="font-bold text-3xl text-rose-800 mb-3 hover:text-rose-600 transition-colors duration-300">₹45,786</p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                Embrace the ethereal beauty of the Himalayas with this exquisite piece. Handcrafted with love and precision, 
                this stunning jewelry captures the essence of nature&apos;s grandeur, adding a touch of elegance to your style.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
