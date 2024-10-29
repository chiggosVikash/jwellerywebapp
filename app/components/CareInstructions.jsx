import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Input from './Input'
import { FaTrash, FaPlus } from 'react-icons/fa' // Importing the add icon

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
    <div className='max-w-7xl flex flex-col  p-4 bg-surface rounded-lg mx-8 my-10'>
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
          <button type="submit" className="mt-2 px-4 py-2 bg-primary text-onPrimary rounded flex items-center justify-center">
            <FaPlus className="inline mr-2 text-sm" /> Add
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded">
              <span>{instruction}</span>
              <button onClick={() => handleDelete(index)} className="text-red-500">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </form>
    </FormProvider>
    </div>
  )
}

export default CareInstructions
