import React from 'react'
import Header from '../Components/Header'
import { FaIndianRupeeSign } from "react-icons/fa6";
import SearchField from '../Components/SearchField';
import FilterMenu from '../Components/FilterMenu';



const ProductsListPage = () => {
  const products = [
    {
      id: "GOL_EAR_001",
      name: 'Product 1',
      category: 'Earrings',
      subCategory: 'Gold Earrings',
      price: 100,
      description: 'This is product 1'
    },
    {
      id: "SIL_EAR_002",
      name: 'Product 2',
      price: 200.0,
      category: 'Earrings',
      subCategory: 'Silver Earrings',
      description: 'This is product 2'
    },
    {
      id: "PLA_EAR_003",
      name: 'Product 3',
      price: 300.0,
      category: 'Earrings',
      subCategory: 'Platinum Earrings',
      description: 'This is product 3'
    }
  ]
  return (
    <div className='overflow-x-hidden  h-max py-navBarPadding'>
      <Header header={"Products List"}/>
      <div className='flex mx-8'>
        <FilterMenu/>
      <div className='w-full h-screen my-10 ml-10 '>
        <SearchField/>
        {
          products.map((product,index)=>{
            return (
              <div key={index} className='flex bg-background my-8 p-4 rounded-lg shadow-sm border-gray-200 py-4'>
                <img src='https://via.placeholder.com/150' alt='product' className='w-32 h-32'/>
                <div className='w-full  ml-4'>
                  <p className='text-gray-500 text-xs font-[Inter]'>SKU ID: {product.id}</p>
                  <div className='mt-1 w-full flex justify-between items-center' >
                    <h1 className='w-[50%] text-xl font-semibold'>{product.name}
                    </h1>
                    <p className='text-gray-500'>Category: {product.category} | Sub-category: {product.subCategory}</p>
                  </div>
                  <p className='mt-1 text-gray-500'>{product.description}</p>
                  <div className='flex items-center'>
                    <p className='mr-4  line-through text-gray-500 text-xl decoration-solid font-[Inter]'>
                      <FaIndianRupeeSign className='inline text-xs'/>{product.price}</p>
                    <p className='text-primary text-xl font-semibold font-[Inter]'><FaIndianRupeeSign className='inline text-xs'/>{product.price}</p>
                  </div>
                  <div>
                    <button className='bg-primary text-onPrimary px-8 py-2 rounded-lg mt-4 mr-4 font-semibold'>View</button>
                    <button className='bg-secondary text-onPrimary font-semibold px-8 py-2 rounded-lg mt-4 mr-4'>Edit</button>
                    <button className='bg-red-100 text-red-900 font-semibold px-8 py-2 rounded-lg mt-4 '>Delete</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
  
      </div>
    </div>
  )
}

export default ProductsListPage
  