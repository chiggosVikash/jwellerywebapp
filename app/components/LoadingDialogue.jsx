'use client'

import React from 'react';

const LoadingDialogue = ({ isLoading, loadingMessage }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex items-center justify-center mb-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500">
            <div className="h-10 w-10 rounded-full bg-blue-500"></div>
          </div>
        </div>
        <p className="text-center text-gray-700">{loadingMessage || 'Loading...'}</p>
      </div>
    </div>
  );
};

export default LoadingDialogue;

