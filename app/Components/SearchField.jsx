import React from 'react';

const SearchField = () => {
  return (
    <div className="flex items-center bg-white border rounded-full shadow-md px-4 py-2 w-full ">
      <input
        type="text"
        className="w-full outline-none text-gray-700 placeholder-gray-500"
        placeholder="Search..."
      />
      <button className="ml-2 text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.42-1.42l4.56 4.56a1 1 0 01-1.42 1.42l-4.56-4.56zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchField;
