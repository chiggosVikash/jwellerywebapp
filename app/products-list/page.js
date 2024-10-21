'use client'
import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { FaIndianRupeeSign } from "react-icons/fa6"
import { usePageStore } from '../stores/pageStore'
import useFilterOptionsStore from '../stores/filterOptionsStore'
import Header from '../components/Header'
import SearchField from '../components/SearchField'
import FilterMenu from '../components/FilterMenu'
import Spinner from '../components/Spinner'
import Pagination from '../components/Pagination'

const ProductsListPage = () => {
  const router = useRouter()
  const { page, limit, setPage } = usePageStore()
  const { filterOptions, selectCategory, selectSubCategory, selectSortOption } = useFilterOptionsStore()

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  // const [isSearching, setIsSearching] = useState(false)

  const fetchProducts = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await axios.get('/api/products', {
        params: {
          limit,
          reqCount: page > 0 ? page - 1 : 0,
          category: filterOptions.category,
          subCategory: filterOptions.subCategory,
          sort: filterOptions.sortOption
        }
      })
      setProducts(response.data.data)
    } catch (error) {
      setErrorMessage("Error fetching products")
      console.error("Error fetching products:", error)
    } finally {
      setIsLoading(false)
    }
  }, [page, filterOptions, limit])

  // const searchProducts = async (query) => {
  //   setIsSearching(true)
  //   try {
  //     const response = await axios.get('/api/products', { params: { query } })
  //     setProducts(response.data.data)
  //     setPage(0)
  //   } catch (error) {
  //     setErrorMessage("Error searching products")
  //     console.error("Error searching products:", error)
  //   } finally {
  //     setIsSearching(false)
  //   }
  // }

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (isLoading ) {
    return (
      <div className='h-screen w-full flex justify-center items-center'>
        <Spinner loadingMessage={"Loading Products..."} />
      </div>
    )
  }

  if (errorMessage) {
    return (
      <div className='h-screen w-full flex justify-center items-center'>
        <p className='text-red-500 text-xl'>{errorMessage}</p>
      </div>
    )
  }

  return (
    <div className='overflow-x-hidden h-max py-navBarPadding'>
      <Header header="Products List" />
      <div className='flex mx-8'>
        <FilterMenu
          selectedCategory={filterOptions.category}
          setSelectedCategory={selectCategory}
          selectedSubCategory={filterOptions.subCategory}
          setSelectedSubCategory={selectSubCategory}
          sortOption={filterOptions.sortOption}
          setSortOption={selectSortOption}
        />
        <div className='w-full h-screen my-10 ml-10'>
          <SearchField onClick={() => {
            router.push('/search')
          }} />
          {products.length === 0 ? (
            <div className='h-screen w-full flex justify-center items-center'>
              <p className='text-gray-500 text-xl'>No products found</p>
            </div>
          ) : (
            <>
              {products.map((product, index) => (
                <ProductCard key={index} product={product} router={router} />
              ))}
              {products.length > 0 && (
                <Pagination onPageChange={setPage} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const ProductCard = ({ product, router }) => (
  <div className='flex bg-background my-8 p-4 rounded-lg shadow-sm border-gray-200 py-4'>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={product.productImages[0]} alt='product' className='w-32 h-32' />
    <div className='w-full ml-4'>
      <p className='text-gray-500 text-xs font-[Inter]'>SKU ID: {product.sku}</p>
      <div className='mt-1 w-full flex justify-between items-center'>
        <h1 className='w-[50%] text-xl font-semibold'>{product.productName}</h1>
        <p className='text-gray-500'>Category: {product.category} | Sub-category: {product.subCategory}</p>
      </div>
      <p className='mt-1 text-gray-500'>{product.description}</p>
      <div className='flex items-center'>
        <p className='mr-4 line-through text-gray-500 text-xl decoration-solid font-[Inter]'>
          <FaIndianRupeeSign className='inline text-xs' />{product.costPrice}
        </p>
        <p className='text-primary text-xl font-semibold font-[Inter]'>
          <FaIndianRupeeSign className='inline text-xs' />{product.sellingPrice}
        </p>
      </div>
      <div>
        <button
          onClick={() => router.push(`/products-list/${product.productId}`)}
          className='bg-primary text-onPrimary px-8 py-2 rounded-lg mt-4 mr-4 font-semibold'
        >
          View
        </button>
        <button className='bg-secondary text-onPrimary font-semibold px-8 py-2 rounded-lg mt-4 mr-4'>
          Edit
        </button>
        <button className='bg-red-100 text-red-900 font-semibold px-8 py-2 rounded-lg mt-4'>
          Delete
        </button>
      </div>
    </div>
  </div>
)

export default ProductsListPage
