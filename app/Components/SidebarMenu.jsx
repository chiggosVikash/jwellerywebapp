import React from 'react';
import Link from 'next/link';

const SidebarMenu = () => {
  return (
    <div className='w-[25%] h-screen bg-background shadow-lg'>
      THis is SidebarMenu
      <ul>
        <li><Link href="/">Dashboard</Link></li>
        <li><Link href="/add-products">Add Products</Link></li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}
export default SidebarMenu
