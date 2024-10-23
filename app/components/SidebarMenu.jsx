'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../assets/velciae_logo.png';
import { menuItems } from '../menu-items';

const SidebarMenu = () => {
  const [selectedMenu , setSelectedMenu] = useState('Dashboard');
  return (
    <div className='fixed left-0 z-50 w-[18%] h-screen flex flex-col items-center bg-primary shadow-sm pl-2 py-8 text-onPrimary'>
      <img src={Logo.src} alt="Logo Image" className='w-32 h-34 object-cover' />
      <ul className='w-full'>{
        menuItems.map((item, index) => {
          return (
            <li 
              onClick={()=>setSelectedMenu(item.title)}
              key={index} 
              className={`py-2 my-3 text-[1rem] px-8 hover:bg-accent rounded-l-2xl 
                ${selectedMenu===item.title?'bg-surface':''}`}>
                  <Link href={item.link} >{item.icon}{item.title}</Link></li>
          );
        })}
        {/* <li className='py-2 text-xl '><Link href="/" >Dashboard</Link></li>
        <li className='py-2 text-xl '><Link href="/add-products" >Add Products</Link></li>
        <li className='py-2 text-xl '><Link href="/products-list" >Products</Link></li>  
        <li className='py-2 text-xl '><Link href="/orders" >Orders</Link></li> 
        <li className='py-2 text-xl '><Link href="/orders-details" >Orders Details</Link></li> */}

      </ul>
    </div>
  )
}
export default SidebarMenu
