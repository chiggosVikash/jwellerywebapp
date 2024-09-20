import React from 'react';
import Link from 'next/link';

const SidebarMenu = () => {
  return (
    <div className='fixed left-0 z-50  2xl:w-[17%] xl:w-[20%] w-[25%] h-screen bg-primary shadow-lg px-5 py-8 text-onPrimary'>
      THis is SidebarMenu
      <ul >
        <li className='py-2 text-xl '><Link href="/" >Dashboard</Link></li>
        <li className='py-2 text-xl '><Link href="/add-products" >Add Products</Link></li>
        <li className='py-2 text-xl '><Link href="/products-list" >Products</Link></li>  
      </ul>
    </div>
  )
}
export default SidebarMenu
