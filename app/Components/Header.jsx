import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'


const Header = ({header}) => {
  return (
    <div className='py-6 px-8  w-full shadow-sm text-onSurface '>
         <h1 className='text-4xl font-semibold font-[Inter]'>{header}</h1>
         <ul className='flex items-center my-2'>
           <li className='text-[.9rem] text-gray-600'>Dashboard</li>
           <li><MdKeyboardArrowRight className='mx-1 text-xl text-primary'/></li>
           <li className='text-[.9rem] text-gray-600'>{header}</li>
         </ul>
    </div>
  )
}

export default Header
