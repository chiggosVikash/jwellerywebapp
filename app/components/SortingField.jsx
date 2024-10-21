'use client'
import React, { useState } from 'react';

const SortingField = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSortChange(value); // Notify parent component about the sort change
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sortOrders" className="text-sm font-medium text-gray-700">
        Sort by:
      </label>
      <select
        id="sortOrders"
        value={selectedOption}
        onChange={handleSortChange}
        className=" text-[.9rem] px-4 py-2 border border-gray-300 shadow-sm bg-white rounded-md text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
      >
        <option 
            className='text-[.9rem] py-1'
            value="">Select...</option>
        <option 
            className='text-[.9rem] py-1'
            value="date-asc">Date (Oldest First)</option>
        <option 
            className='text-[.9rem] py-1'
            value="date-desc">Date (Newest First)</option>
        <option 
            className='text-[.9rem] py-1'
            value="price-asc">Price (Low to High)</option>
        <option 
            className='text-[.9rem] py-1'
            value="price-desc">Price (High to Low)</option>
        {/* <option value="status">Status</option> */}
      </select>
    </div>
  );
};

export default SortingField;
