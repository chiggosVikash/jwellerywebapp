import Image from 'next/image';

export default function MyOrder() {
  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Order Header */}
        <div className="flex justify-between items-start mb-6 bg-gray-100 rounded-lg p-4">
          <div>
            <div className="text-sm text-gray-600">ORDER PLACED</div>
            <div className="font-semibold">30 September 2024</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">TOTAL</div>
            <div className="font-semibold">₹47579</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">SHIP TO</div>
            <div className="font-semibold text-blue-600 cursor-pointer">Jaydeep Das ▼</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">ORDER # 171-9789752-6782475</div>
            <div className="flex space-x-2">
              <span className="text-blue-600 cursor-pointer">View order details</span>
              <span className="text-blue-600 cursor-pointer">Invoice ▼</span>
            </div>
          </div>
        </div>

        {/* Order Status */}
        <div className="mb-4">
          <div className="text-lg font-semibold text-green-600">Arriving Thu, 10 Oct</div>
          <div className="text-sm text-gray-600">Preparing for Dispatch</div>
        </div>

        {/* Product Details */}
        <div className="flex items-start space-x-4">
          <Image
            src="/path-to-product-image.jpg"
            alt="Pihtara Jewels Himalayan"
            width={100}
            height={100}
            className="rounded-md"
          />
          <div>
            <h3 className="font-semibold">Pihtara Jewels Himalayan from veliciae woman collection</h3>
            <p className="text-sm text-gray-600">Pihtara Jewels Himalayan offers a stunning collection of handcrafted jewelry inspired by the majestic Himalayas.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-x-4">
          <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
            Track package
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            View or edit order
          </button>
        </div>

        {/* Archive Order */}
        <div className="mt-6 text-blue-600 cursor-pointer hover:underline">
          Archive Order
        </div>
      </div>
    </div>
  );
}
