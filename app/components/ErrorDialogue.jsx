'use client'

import React from 'react';

const ErrorDialogue = ({ isError, errorMessage, onReload }) => {
  if (!isError) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-red-600">Error Occurred</h2>
        <p className="text-gray-700">{errorMessage || 'An unexpected error occurred. Please try again.'}</p>
        <div className="mt-6 flex justify-end">
          <button 
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            onClick={onReload}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorDialogue;

