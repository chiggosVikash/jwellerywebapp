'use client'
import React, { useState,useEffect } from 'react'
import Header from '@/app/components/Header'
import { Stepper, Step, StepLabel } from '@mui/material'
import ImageUpload from '@/app/components/ImageUpload'
import ProductDetailsForm from '@/app/components/ProductDetailsForm'
import MaterialSpecifications from '@/app/components/MaterialSpecifications'
import CareInstructions from '@/app/components/CareInstructions'
import { useImageStore } from '@/app/stores/imageStore'
import Spinner from '@/app/components/Spinner'
 
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const steps = ['Upload Images', 'Product Details', 'Material Specifications', 'Care Instructions']

const NewAddProductPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { saveImages, isLoading, error,isSuccess,resetProcessStatus } = useImageStore();
  // const { setError,setSuccess,setLoading } = useServerResponseStore();


  const closeDialog = () => {

    if(!error && !isLoading){
      setActiveStep((prev) => prev + 1)
    }
    resetProcessStatus()
  
   
  }


  
  // useEffect(() => {
  //   console.log("useEffect updated")

  //   if(isLoading){
  //     setLoading()
  //   }
  //   else if(error){
  //     setError(error)
  //   }
  //   else if(isSuccess){
  //     setSuccess(true,"images uploaded successfully")
  //   }


    
  // }, [error,setError,setSuccess,isSuccess,isLoading,setLoading])





  const handleNext = async () => {
    if (activeStep === 0) {
      await saveImages();
      return;
    }
    setActiveStep((prev) => prev + 1);
    
  };
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const renderStepComponent = () => {
    const stepContent = [
      <div key="Image Upload"><ImageUpload /></div>,
      <div key="Product Details"><ProductDetailsForm /></div>,
      <div key="Material Specifications"> <MaterialSpecifications /></div>,
      <div key="Care Instructions"><CareInstructions /></div>
    ];
    return <React.Fragment>{stepContent[activeStep]}</React.Fragment>;
  }

  return (
    <div className='h-max py-navBarPadding'>
      <Header header={'Add New Products'} />
     
      <ShowDialog 
      isOpen = {isSuccess || error || isLoading}
      closeDialog = {closeDialog}
      status = {isSuccess ? "success" : error ? "error" : isLoading ? "loading" : null}
      title={activeStep === 0 ? "Image Upload" : activeStep === 1 ? "Product Details" : activeStep === 2 ? "Material Specifications" : "Care Instructions"} />
      
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
                onClick={isLoading ? null : handleBack}
                disabled={activeStep === 0}
                className={`text-base border border-gray-300 uppercase  text-onPrimary py-2 px-6 rounded-lg transition duration-300 disabled:opacity-50`}
              >
                Back
              </button>
              <button
                type='submit'
                onClick= {isLoading ? null : handleNext}
                className={`text-base bg-onPrimary uppercase text-white py-2 px-6 rounded-lg transition duration-300 
                  hover:bg-secondary`}
              >
                {isLoading ? <Spinner /> : activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}


export default NewAddProductPage


export function ShowDialog({isOpen,closeDialog,status,title}) {



  return (
    <Dialog open = {isOpen}>
      {/* <DialogTrigger asChild>
        <button type="button">Open dialog</button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            { status === "loading" ? <Spinner /> : status ==="error" ? error :  `${title} process completed successfully`}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <button
              onClick={() => {
                closeDialog()
              }
            }
            type="button" variant="secondary">
              Next
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
