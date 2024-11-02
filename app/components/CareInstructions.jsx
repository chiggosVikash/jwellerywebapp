import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Input from './Input'
import { FaTrash, FaPlus } from 'react-icons/fa' // Importing the add icon
import { Button } from '@/components/ui/button'

const CareInstructions = () => {
  const methods = useForm()
  const [instructions, setInstructions] = useState([])

  const onSubmit = (data) => {
    setInstructions([...instructions, data.careInstruction])
    methods.reset() // Reset the form after submission
  }

  const handleDelete = (index) => {
    const newInstructions = instructions.filter((_, i) => i !== index)
    setInstructions(newInstructions)
  }
  return (
    <div className='max-w-7xl flex flex-col  p-4 bg-gray-50 rounded-lg mx-8 my-10'>
        <h2 className='text-lg font-bold mb-4'>Care Instructions</h2>
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <Input 
            name="careInstruction" 
            label="Add Care Instruction" 
            placeholder="Enter care instruction" 
            rules={{ required: "This field is required" }} 
          />
          <Button type="submit" variant="outline" className='w-28 my-4' >
            <FaPlus/> Add
          </Button>
        </div>

        <div className="md:w-1/2 p-4">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded">
              <span>{instruction}</span>
              <button onClick={() => handleDelete(index)} className=" cursor-pointer text-red-700">
                <FaTrash />
              </button>
            </div>
          ))}
          {instructions.length >= 1 && <Button type="submit"  className='w-28 my-4' >
            Save
          </Button>}
        </div>
      </form>
    </FormProvider>
    </div>
  )
}

export default CareInstructions
