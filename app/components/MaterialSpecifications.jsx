import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Input from './Input';
import Select from './Select';
import { FaTimes } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useMaterialSpecStore } from '../stores/materialSpecStore';
import { ShowDialog } from '../product/[action]/page';

const MaterialSpecifications = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const { 
    getMaterialSpecs
    ,materialSpecs, addMaterialSpec, removeMaterialSpec, isLoading,error,isSuccessful,resetProcessStatus, saveMaterialSpecs } = useMaterialSpecStore()

  useEffect(() => {
    getMaterialSpecs();
  },[getMaterialSpecs]);
  // const materialOptions = [
  //   { value: 'rajasthani_kohinoor', label: 'Rajasthani Kohinoor' },
  //   { value: 'himawari_gold', label: 'Himawari Gold' },
  //   // Add more options as needed
  // ];

  const onSubmit = (data) => {
    addMaterialSpec(data);
    // Reset the form after submission
    methods.reset();
  };

  return (
    <div className='max-w-7xl flex flex-col  p-4 bg-gray-50 rounded-lg mx-8 my-10'>
      <h2 className='text-lg font-bold mb-4'>Material Specifications</h2>
      <ShowDialog 
      closeDialog={resetProcessStatus}
      title={"Material Specifications"}
      errorMessage={error}
      status={isSuccessful ? "success" : error ? "error" : isLoading ? "loading" : null}
      isOpen={(isLoading || isSuccessful || error)} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} >
          {/* Left Section */}
          <div className="col-span-1 space-y-4 border border-gray-200 rounded-lg p-4">
            <Input
              name="materialType"
              label="Material Type"
              placeholder="e.g. Diamond"
            />
            <Input
              type='number'
              name="quantity"
              label="Quantity"
              placeholder="e.g. 10"
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="materialWeight"
                label="Material Weight"
                placeholder="e.g. 183 mg"
              />
              <Select
                name="quality"
                label="Quality"
                options={[
                  { value: '24k_gold', label: '24K Gold' },  // Gold quality options
                  { value: '18k_gold', label: '18K Gold' },
                  { value: '14k_gold', label: '14K Gold' },
                  { value: 'vvs_diamond', label: 'VVS Diamond' },  // Diamond quality options
                  { value: 'vs_diamond', label: 'VS Diamond' },
                  { value: 'si_diamond', label: 'SI Diamond' },
                ]}
              />

            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="price"
                label="Price"
                placeholder="Enter price"
              />
              <Input
                name="discount"
                label="Discount"
                placeholder="Enter discount"
              />
            </div>
            <Button type="submit">
              Add Material
            </Button>
          </div>
          </form>
      </FormProvider>
        
          {/* Right Section */}
          <div className="col-span-1 ml-4">
            <h2 className="text-lg font-semibold mb-2">Materials List</h2>
            <div className="space-y-4 grid grid-cols-2 ">
              {materialSpecs.map((material, index) => (
                <div key={index} className="relative border p-6 m-2 bg-white rounded shadow">
                  <h3 className="font-bold">{material.materialType}</h3>
                  <p>Weight: {material.materialWeight}</p>
                  <p>Quantity: {material.quantity}</p>
                  <p>Quality: {material.quality}</p>
                  <p>Price: {material.price}</p>
                  <p>Discount: {material.discount}</p>
                  <FaTimes
                    onClick={() => removeMaterialSpec(material)}
                    className='absolute top-2 right-2 cursor-pointer text-xl text-red-700' />

                </div>
              ))}
            </div>
            {materialSpecs.length > 0 && <Button
             onClick={()=>{
                saveMaterialSpecs()
             }}
            >Save MaterialSpecs</Button>}
          </div>
        
    </div>
  );
}

export default MaterialSpecifications;
