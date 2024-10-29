import React from 'react'
import { useFormContext, RegisterOptions } from 'react-hook-form'

const Input = ({ 
  name, 
  label, 
  type = "text", 
  defaultValue = "", 
  placeholder = "", 
  className = "", 
  rules = {} 
}) => {
  const { register, formState: { errors } } = useFormContext()
  
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input 
        id={name}
        type={type} 
        defaultValue={defaultValue}
        placeholder={placeholder} 
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
        {...register(name, rules)} // Using rules with register
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>
      )}
    </div>
  )
}

export default Input
