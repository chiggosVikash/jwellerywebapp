'use client'
import React, { useState } from 'react';

const FilterMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  const categories = [
    {
      name: 'Electronics',
      subCategories: ['Mobiles', 'Laptops', 'Cameras'],
    },
    {
      name: 'Fashion',
      subCategories: ['Men', 'Women', 'Kids'],
    },
    {
      name: 'Home',
      subCategories: ['Furniture', 'Decor', 'Kitchen'],
    },
    // Add more categories as needed
  ];

  const sortOptions = [
    'Popularity',
    'Price -- Low to High',
    'Price -- High to Low',
  ];

  return (
    <div className="w-full sm:w-64 bg-white p-4 border rounded-lg shadow-md">
      {/* Categories */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <button
                className={`w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 ${
                  selectedCategory === category.name ? 'bg-gray-200' : ''
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </button>
              {selectedCategory === category.name && (
                <ul className="ml-4 mt-2">
                  {category.subCategories.map((subCategory, subIndex) => (
                    <li key={subIndex}>
                      <button
                        className={`w-full text-left py-1 px-4 rounded-lg hover:bg-gray-100 ${
                          selectedSubCategory === subCategory
                            ? 'bg-gray-300'
                            : ''
                        }`}
                        onClick={() => setSelectedSubCategory(subCategory)}
                      >
                        {subCategory}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Sort Options */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Sort By</h2>
        <select
          className="w-full border rounded-lg p-2"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Select</option>
          {sortOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterMenu;
