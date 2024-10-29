'use client'
import React, { useState } from 'react'
import Header from '@/app/components/Header'
import { Stepper, Step, StepLabel } from '@mui/material'
import ImageUpload from '@/app/components/ImageUpload'
import ProductDetailsForm from '@/app/components/ProductDetailsForm'
import MaterialSpecifications from '@/app/components/MaterialSpecifications'
import CareInstructions from '@/app/components/CareInstructions'

const steps = ['Upload Images', 'Product Details', 'Material Specifications', 'Care Instructions']

const NewAddProductPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const renderStepComponent = () => {
    const stepContent = [
      <div key="Image Upload"><ImageUpload/></div>,
      <div key="Product Details"><ProductDetailsForm/></div>,
      <div key="Material Specifications"> <MaterialSpecifications/></div>,
      <div key="Care Instructions"><CareInstructions/></div>
    ];
    return <React.Fragment>{stepContent[activeStep]}</React.Fragment>;
  }

  return (
    <div className='h-max py-navBarPadding'>
      <Header header={'Add New Products'} />
      <div className='max-w-7xl bg-white my-5 py-8 rounded-lg mx-10'>
        {/* Stepper  */}
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? null : (
          <React.Fragment>
            {renderStepComponent()}
            <div className='flex items-center justify-between mx-10'>
              <button
                onClick={handleBack}
                disabled={activeStep === 0}
                className={`text-base border border-gray-300 uppercase  text-onPrimary py-2 px-6 rounded-lg transition duration-300 
                             disabled:opacity-50`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className={`text-base bg-onPrimary uppercase text-white py-2 px-6 rounded-lg transition duration-300 
                            hover:bg-secondary`}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default NewAddProductPage
