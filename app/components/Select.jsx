import React from 'react';
import { useFormContext } from 'react-hook-form';

const Select = ({
  options,
  name,
  label,
  placeholder = 'Select an option',
  className = '',
  rules = {},
}) => {
  const { register, formState: { errors }, watch } = useFormContext();
  const selectedValue = watch(name);

  return (
    <div className='mb-4 '>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        {...register(name, rules)}
        style={{
          color: selectedValue ? 'black' : 'gray', 
        }}
        className={`w-full  bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
      >
        <option value="" className='text-gray-400' style={{color:'gray'}} >
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className='text-base pr-3'>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default Select;
