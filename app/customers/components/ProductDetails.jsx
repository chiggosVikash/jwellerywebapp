import Image from 'next/image';
import DeliveryAddress from './DeliveryAddress';
export default function ProductDetails() {
    return (
       <>
       {/* Left side - Product details */}
       <div className="w-full lg:w-3/5 bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 bg-gray-100 rounded-lg mb-4 sm:mb-0 sm:mr-4">
              <Image
                src="/path-to-ring-image.jpg"
                alt="Pihtara Jewels Himalayan"
                width={300}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="w-full sm:w-2/3">
              <h2 className="text-2xl font-semibold text-primary">Pihtara Jewels Himalayan</h2>
              <p className="text-gray-600 mb-2">From Veliciae Woman collection</p>
              <p className="text-2xl font-bold text-primary mb-1">Rs 47,579</p>
              <p className="text-sm text-gray-500">Includes all taxes</p>
              
              <div className="mt-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Metal</span>
                  <span>18Kt White Gold, 7.91 gram</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Stone</span>
                  <span>26 Diamond, 0.5200 Carat, SI IJ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Quantity</span>
                  <select className="border rounded px-2 py-1 bg-white">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <DeliveryAddress />
        </div>
      </>
    )
}

