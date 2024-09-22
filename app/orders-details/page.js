import React from 'react';
import Header from '../Components/Header';

const orderDetails = {
  id: 'ORD1234',
  customer: {
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St, Springfield, USA',
  },
  date: '21 Sep, 2024',
  status: 'Shipped',
  items: [
    { name: 'Product 1', quantity: 2, price: '\u20b950.00' },
    { name: 'Product 2', quantity: 1, price: '\u20b9150.00' },
  ],
  subtotal: '\u20b9250.00',
  shipping: '\u20b910.00',
  total: '\u20b9260.00',
};

const OrderDetails = () => {
  return (
    <div className="py-navBarPadding">
      <Header header={'Order Details'} />
      <div className='mx-8 my-4'>
        <div className='grid grid-cols-2 gap-4'>
            {/* Order Summary */}
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <h1 className='text-lg font-semibold mb-2'>
                Order Summary
              </h1>
              <h2 className="text-gray-600 text-sm mb-1">Order Id: #{orderDetails.id}</h2>
              <p className="text-gray-600 text-sm mb-1">Date: {orderDetails.date}</p>
              <p className="text-gray-600 text-sm mb-1">Status: <span className={`font-bold ${orderDetails.status === 'Shipped' ? 'text-green-500' : 'text-yellow-500'}`}>{orderDetails.status}</span></p>
            </div>

            {/* Customer Information */}
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <h2 className="text-lg font-semibold mb-2">Customer Information</h2>
              <p className="text-gray-600 text-sm mb-1">Name: {orderDetails.customer.name}</p>
              <p className="text-gray-600 text-sm mb-1">Email: {orderDetails.customer.email}</p>
              <p className="text-gray-600 text-sm mb-1">Address: {orderDetails.customer.address}</p>
            </div>

        </div>
       <div className='flex md:flex-row flex-col gap-4'>
            {/* Order Items */}
      <div className="md:w-[60%] w-full bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-lg font-semibold mb-2">Order Items</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b  text-sm text-left">Product</th>
              <th className="py-2 px-1 border-b text-sm">Quantity</th>
              <th className="py-2 px-4 border-b text-sm">Price</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.items.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-sm">{item.name}</td>
                <td className="py-2 px-4 border-b text-sm text-center">{item.quantity}</td>
                <td className="py-2 px-4 border-b  text-sm text-center">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pricing Summary */}
      <div className="md:w-[40%] w-full bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-lg font-semibold mb-2">Pricing Summary</h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600 text-sm">Subtotal:</span>
          <span>{orderDetails.subtotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600 text-sm">Shipping:</span>
          <span>{orderDetails.shipping}</span>
        </div>
        <div className='h-[1px] w-full bg-accent my-2'></div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total:</span>
          <span>{orderDetails.total}</span>
        </div>
      </div>
      
       </div>
      </div>
      
    </div>
  );
};

export default OrderDetails;
