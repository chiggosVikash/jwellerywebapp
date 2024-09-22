import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='fixed flex w-[82%] px-8  py-2 items-center justify-between bg-primary h-[70px] text-onPrimary'>
      <div className='flex flex-col'>
        <h1 className='text-xl font-semibold uppercase'>Veliciae</h1>
        <h2 className='text-[.8rem] '>The Quest For Luxury Ends Here</h2>
      </div>
      <div className='flex items-center'>
        <p>Vinika Sinha</p>
        <IoPersonCircleSharp className='text-secondary inline text-3xl ml-2'/>

      </div>
    </nav>
  )
}

export default Navbar
