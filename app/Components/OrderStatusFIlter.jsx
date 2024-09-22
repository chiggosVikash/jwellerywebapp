import React from 'react';

const FilterChip = ({ status, count, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(status)}
      className={`flex items-center px-4 py-1 m-1 text-sm font-medium rounded-md cursor-pointer ${
        isActive
          ? 'bg-secondary text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      <span>{status}</span>
      <span className="ml-2 bg-white text-gray-700 rounded-sm px-2 py-1">
        {count}
      </span>
    </button>
  );
};

const OrderStatusFilter = ({ statuses, activeStatus, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-start mb-4">
      {statuses.map(({ status, count }) => (
        <FilterChip
          key={status}
          status={status}
          count={count}
          isActive={activeStatus === status}
          onClick={onFilterChange}
        />
      ))}
    </div>
  );
};

export default OrderStatusFilter;
