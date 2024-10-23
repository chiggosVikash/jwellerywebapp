'use client'

import React, { useState } from 'react';
import Stepper from '../../components/Stepper';

const Product = ({action}) => {
  const steps = ['Upload image', 'Product details', 'Pricing', 'Review'];
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center pt-32">
      <Stepper steps={steps} currentStep={currentStep} />
      <div className="mt-4">
        {currentStep === 0 && <div>Upload Image Form</div>}
        {currentStep === 1 && <div>Product Details Form</div>}
        {currentStep === 2 && <div>Pricing Form</div>}
        {currentStep === 3 && <div>Review Section</div>}
      </div>
      <div className="mt-4 flex justify-between w-full max-w-sm">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          disabled={currentStep === 0}
          className="bg-gray-300 px-4 py-2 rounded text-gray-800 hover:bg-gray-400 transition duration-300"
        >
          Back
        </button>
        <button
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
          disabled={currentStep === steps.length - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;