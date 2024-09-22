'use client';
import {React, useState } from 'react';
import Header from '../Components/Header';
import SearchField from '../Components/SearchField';
import SortingField from '../Components/SortingField';
import OrderStatusFilter from '../Components/OrderStatusFIlter';


const OrdersView = () => {

  const [sortCriteria, setSortCriteria] = useState('');
  const [activeStatus, setActiveStatus] = useState('All');

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
    console.log('Selected sort criteria:', criteria);
  };
  const statuses = [
    { status: 'All', count: 30 },
    { status: 'Pending', count: 12 },
    { status: 'Completed', count: 8 },
    { status: 'Cancelled', count: 4 },
    { status: 'Processing', count: 6 },
  ];

  const handleFilterChange = (status) => {
    setActiveStatus(status);
    console.log('Selected status:', status);
  };

  const orders = [
    {
      id: 'ORD1234',
      customer: 'John Doe',
      date: '21 Sep ,2024',
      total: '$250.00',
      status: 'Shipped',
    },
    {
      id: 'ORD5678',
      customer: 'Jane Smith',
      date: '19 Sep ,2024',
      total: '$150.00',
      status: 'Processing',
    },
    // Add more orders as needed
  ];
  

  return (
    <div className='py-navBarPadding'>
      <Header header={'Orders'}/>
      <div className='flex mx-8 my-4 gap-4'>
         <SearchField/>
          <div className='w-1/2'>
          <SortingField onSortChange={handleSortChange} />
          </div>
      </div>
      <div className='mx-8'>
        <OrderStatusFilter statuses={statuses} activeStatus={activeStatus} onFilterChange={handleFilterChange} />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Customer</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Total</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="py-2 px-4 border-b text-[.85rem]">{order.id}</td>
                <td className="py-2 px-4 border-b text-[.85rem]">{order.customer}</td>
                <td className="py-2 px-4 border-b text-[.85rem]">{order.date}</td>
                <td className="py-2 px-4 border-b text-[.85rem]">{order.total}</td>
                <td className={`py-2 px-4 border-b text-[.85rem] ${order.status === 'Shipped' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {order.status}
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-accent text-xs px-4 py-1 rounded hover:bg-purple-400">
                    View
                  </button>
                  <button className="bg-red-400 text-xs  text-white px-4 py-1 rounded ml-2 hover:bg-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     </div>
    </div>
    // <div className="p-4">
      // <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      // <div className="overflow-x-auto">
      //   <table className="min-w-full bg-white border border-gray-200">
      //     <thead>
      //       <tr className="bg-gray-100">
      //         <th className="py-2 px-4 border-b">Order ID</th>
      //         <th className="py-2 px-4 border-b">Customer</th>
      //         <th className="py-2 px-4 border-b">Date</th>
      //         <th className="py-2 px-4 border-b">Total</th>
      //         <th className="py-2 px-4 border-b">Status</th>
      //         <th className="py-2 px-4 border-b">Actions</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {orders.map((order) => (
      //         <tr key={order.id} className="text-center">
      //           <td className="py-2 px-4 border-b">{order.id}</td>
      //           <td className="py-2 px-4 border-b">{order.customer}</td>
      //           <td className="py-2 px-4 border-b">{order.date}</td>
      //           <td className="py-2 px-4 border-b">{order.total}</td>
      //           <td className={`py-2 px-4 border-b ${order.status === 'Shipped' ? 'text-green-500' : 'text-yellow-500'}`}>
      //             {order.status}
      //           </td>
      //           <td className="py-2 px-4 border-b">
      //             <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
      //               View
      //             </button>
      //             <button className="bg-red-500 text-white px-4 py-1 rounded ml-2 hover:bg-red-600">
      //               Delete
      //             </button>
      //           </td>
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
      // </div>
    // </div>
  );
};

export default OrdersView;
