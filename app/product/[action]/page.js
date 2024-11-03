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
// import { usePathname } from 'next/navigation';
import { authStore } from '../../stores/authStore'
import { useRouter } from 'next/navigation';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'

const steps = ['Upload Images', 'Product Details', 'Material Specifications', 'Care Instructions']

const NewAddProductPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { isLoading } = useImageStore();

  const router = useRouter()
  const {cookiesStatus} = authStore()

  useEffect(()=>{
    const isValid = cookiesStatus()
    if(!isValid){
      router.push("/signin")
    }
  },[cookiesStatus,router]
  )



  const handleNext = async () => {
    if(activeStep === steps.length - 1){
      // push to products page 
      router.push("/products-list")
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

      {/* <ShowDialog 
      isOpen = {isSuccess || error || isLoading}
      closeDialog = {closeDialog}
      status = {isSuccess ? "success" : error ? "error" : isLoading ? "loading" : null}
      title={activeStep === 0 ? "Image Upload" : activeStep === 1 ? "Product Details" : activeStep === 2 ? "Material Specifications" : "Care Instructions"} /> */}

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
              <Button
                variant='outline'
                onClick={isLoading ? null : handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              <Button
                type='submit'
                onClick={isLoading ? null : handleNext}

              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}


export default NewAddProductPage


export function ShowDialog({ isOpen, closeDialog, status, title,errorMessage }) {



  return (
    <Dialog open={isOpen}>
      {/* <DialogTrigger asChild>
        <button type="button">Open dialog</button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {status === "loading" ? <Spinner /> : status === "error" ? errorMessage ?? "Process Failed please try again" : `${title} process completed successfully`}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              onClick={() => {
                closeDialog()
              }
              }
              type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
