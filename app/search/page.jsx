'use client'
import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FaIndianRupeeSign, FaSearch } from "react-icons/fa"
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import Image from 'next/image'
import ProductCard from '../components/ProductCard'


const SearchPage = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const searchProducts = useCallback(async (query) => {
    setIsLoading(true)
    setErrorMessage("")
    try {
      const response = await axios.get('/api/products', { params: { query } })
      setProducts(response.data.data)
    } catch (error) {
      setErrorMessage("Error searching products")
      console.error("Error searching products:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim().length >= 3) {
        searchProducts(searchQuery)
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchQuery, searchProducts])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      searchProducts(searchQuery)
    }
  }

  return (
    <div className='overflow-x-hidden min-h-screen py-navBarPadding'>
      <Header header="Search Products" />
      <div className='mx-8 my-6'>
        <form onSubmit={handleSearch} className='flex items-center mb-8'>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products..."
            className='flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary'
          />
          <button type="submit" className='bg-primary text-white p-3 rounded-r-lg hover:bg-primary-dark transition duration-300'>
            <FaSearch className='text-xl' />
          </button>
        </form>

        {isLoading ? (
          <div className='flex justify-center items-center h-64'>
            <Spinner loadingMessage="Searching Products..." />
          </div>
        ) : errorMessage ? (
          <p className='text-red-500 text-center text-xl'>{errorMessage}</p>
        ) : products.length === 0 ? (
          <p className='text-gray-500 text-center text-xl'>No products found. Try a different search term.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((product) => (
              <ProductCard key={product.productId} product={product}/>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// const ProductCard = ({ product, router }) => (
//   <div className='bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg'>
//     <div className='relative w-full h-48'>
//       <Image
//         src={product.productImages[0]}
//         alt={product.productName}
//         layout="fill"
//         objectFit="cover"
//       />
//     </div>
//     <div className='p-4'>
//       <h2 className='text-xl font-semibold mb-2 truncate'>{product.productName}</h2>
//       <p className='text-gray-600 text-sm mb-2 truncate'>{product.description}</p>
//       <div className='flex justify-between items-center mb-4'>
//         <p className='text-gray-500 text-sm'>Category: {product.category}</p>
//         <p className='text-gray-500 text-sm'>Sub-category: {product.subCategory}</p>
//       </div>
//       <div className='flex items-center justify-between'>
//         <div>
//           <p className='line-through text-gray-500 text-sm'>
//             <FaIndianRupeeSign className='inline text-xs' />{product.costPrice}
//           </p>
//           <p className='text-primary text-lg font-semibold'>
//             <FaIndianRupeeSign className='inline text-sm' />{product.sellingPrice}
//           </p>
//         </div>
//         <button
//           onClick={() => router.push(`/products-list/${product.productId}`)}
//           className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition duration-300'
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   </div>
// )

export default SearchPage
