import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Input from './Input'
import Select from './Select'

const ProductDetailsForm = () => {
  const methods = useForm()

  const onSubmit = (data) => {
    console.log(data)
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
    <div className='max-w-7xl flex flex-col  p-4 bg-surface rounded-lg mx-8 my-10'>
      <h2 className="text-lg font-bold mb-4">Product Details</h2>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <Input name="productName" label="Product Name" placeholder='Enter Product Name' rules={{ required: 'Product Name is required' }} />
            <Select name="collection" label="Collection" options={collections} rules={{ required: 'Collection is required' }} />
            <Select name="categories" label="Categories" options={categories} rules={{ required: 'Categories is required' }} />
            <Select name="gender" label="Gender" options={genders} rules={{ required: 'Gender is required' }} />
            <Select name="subCategory" label="Sub-Category" options={subCategories} rules={{ required: 'Sub-Category is required' }} />
            <Input name="availableQty" label="Available qty" type="number" placeholder='Enter Available qty' rules={{ required: 'Available qty is required' }} />
            <Input name="skuId" label="SKU-ID" placeholder='Enter SKU-ID' rules={{ required: 'SKU-ID is required' }} />
            <Input name="availableStatus" label="Available Status" placeholder='Enter Available Status' rules={{ required: 'Available Status is required' }} />
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default ProductDetailsForm
