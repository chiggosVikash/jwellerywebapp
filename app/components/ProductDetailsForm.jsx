import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Input from './Input'
import Select from './Select'
import { Button } from '@/components/ui/button'
import { useProductDetailsStore } from '../stores/productDetailsStore'
import { ShowDialog } from '../product/[action]/page'

const ProductDetailsForm = () => {
  const methods = useForm()
  const { saveProductDetails,saving,error,isSaved,resetProcessStatus } = useProductDetailsStore()


  const onSubmit = (data) => {
    saveProductDetails(data)
  }

  const closeDialog = () => {
    if(!error && !saving){
      methods.reset()
    }
    resetProcessStatus()

  }



  const categories = [
    { value: 'gold', label: 'Gold' },
    { value: 'silver', label: 'Silver' },
    { value: 'platinum', label: 'Platinum' },
    { value: 'diamond', label: 'Diamond' },
    { value: 'gemstone', label: 'Gemstone' },
    { value: 'pearl', label: 'Pearl' },
    { value: 'other', label: 'Other' },
  ];

  const subCategories = [
    { value: 'rings', label: 'Rings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'bracelets', label: 'Bracelets' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'watches', label: 'Watches' },
    { value: 'anklets', label: 'Anklets' },
    { value: 'brooches', label: 'Brooches' },
    { value: 'cufflinks', label: 'Cufflinks' },
    { value: 'pendants', label: 'Pendants' },
    { value: 'charms', label: 'Charms' },
  ];

  const collections = [
    { value: 'bridal', label: 'Bridal' },
    { value: 'vintage', label: 'Vintage' },
    { value: 'modern', label: 'Modern' },
    { value: 'classic', label: 'Classic' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'casual', label: 'Casual' },
    { value: 'statement', label: 'Statement' },
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'bohemian', label: 'Bohemian' },
    { value: 'ethnic', label: 'Ethnic' },
  ];

  const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'unisex', label: 'Unisex' },
    { value: 'kids', label: 'Kids' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className='max-w-7xl flex flex-col  p-4 bg-gray-50 rounded-lg mx-8 my-10'>
      <h2 className="text-lg font-bold mb-4">Product Details</h2>
      <ShowDialog isOpen={(saving || error || isSaved)} closeDialog={closeDialog} status={saving ? "loading" : error ? "error" : "success"} title={"Product Details"} />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <Input name="productName" label="Product Name" placeholder='Enter Product Name' rules={{ required: 'Product Name is required' }} />
            <Select name="productCollection" label="Collection" options={collections} rules={{ required: 'Collection is required' }} />
            <Select name="category" label="Categories" options={categories} rules={{ required: 'Categories is required' }} />
            <Select name="gender" label="Gender" options={genders} rules={{ required: 'Gender is required' }} />
            <Select name="subCategory" label="Sub-Category" options={subCategories} rules={{ required: 'Sub-Category is required' }} />
            <Input name="quantityAvailable" label="Available qty" type="number" placeholder='Enter Available qty' rules={{ required: 'Available qty is required' }} />
            <Input name="sku" label="SKU-ID" placeholder='Enter SKU-ID' rules={{ required: 'SKU-ID is required' }} />
            <Input name="availabilityStatus" label="Available Status" placeholder='Enter Available Status' rules={{ required: 'Available Status is required' }} />

          
          </div>
          <div className="flex  mt-4">
            <Button type="submit"  className="w-32">Save</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default ProductDetailsForm
