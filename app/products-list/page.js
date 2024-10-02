'use client'
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Header from '../Components/Header'
import { FaIndianRupeeSign } from "react-icons/fa6";
import SearchField from '../Components/SearchField';
import FilterMenu from '../Components/FilterMenu';
import Spinner from '../Components/Spinner';



const ProductsListPage = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [isSearching, setIsSearching] = useState(false)



  const fetchProducts = async (isFilterChange = false) => {
 
    setIsSearching(false)
    console.log("Fetching products with filter change:", isFilterChange)
    try {
      if(products.length === 0 || isFilterChange){
       
        setIsLoading(true)
      }
      const limit = 10;
      const response = await axios.get(`/api/products?limit=${limit}&reqCount=${page}&category=${selectedCategory}&subCategory=${selectedSubCategory}&sort=${sortOption}`);
      if(isFilterChange){
        setProducts(response.data.data)
      }else{
        setProducts(prevProducts => [...prevProducts, ...response.data.data]);
        setPage(prevPage => prevPage + 1);
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setErrorMessage("Error fetching products")
    }
  }

  const searchProducts = async (query) => {
    setIsSearching(true)
    try{
      const response = await axios.get(`/api/products?query=${query}`)
      setProducts(response.data.data)
      setPage(0)
      setIsSearching(false)
    }catch(error){
      setIsSearching(false)
      setErrorMessage("Error searching products")
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isLoading) {
          fetchProducts();
        }
      },
      { threshold: 0.7 }
    );

    const lastProductItem = document.querySelector('.product-item:last-child');
    if (lastProductItem) {
      observer.observe(lastProductItem);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [products, isLoading])


  const handleSubCategoryChange = (subCategory) => {
    console.log("Sub category changed to:", subCategory)
    setSelectedSubCategory(subCategory)
    setPage(0)
    fetchProducts(true)

  }

  const handleSortOptionChange = (sortOption) => {
    console.log("Sort option changed to:", sortOption)
    setSortOption(sortOption)
    setPage(0)
    fetchProducts(true)
  }


  if(isLoading){
    return <div className='h-screen w-full flex justify-center items-center'><Spinner loadingMessage={"Loading Products..."}/></div>
  }
  if(errorMessage){
    return <div className='h-screen w-full flex justify-center items-center'><p className='text-red-500 text-xl'>{errorMessage}</p></div>
  }

  return (
     
    <div className='overflow-x-hidden  h-max py-navBarPadding'>
      <Header header={"Products List"}/>
      <div className='flex mx-8'>

      
        
        {/* Filter Menu */}
        <FilterMenu selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        selectedSubCategory={selectedSubCategory} 
        setSelectedSubCategory={handleSubCategoryChange}
        sortOption={sortOption} 
        setSortOption={handleSortOptionChange}
       
        />


        {/* Products List */}
      <div className='w-full h-screen my-10 ml-10 '>

        
       
        <SearchField searchProducts={searchProducts}/>
        {
          isSearching ? <div className='h-screen w-full flex justify-center items-center'><Spinner loadingMessage={"Searching Products..."}/></div> :
          products.length === 0 ? <div className='h-screen w-full flex justify-center items-center'><p className='text-gray-500 text-xl'>No products found</p></div> :
          products.map((product,index)=>{
           
            return (
              <div key={index} className='flex bg-background my-8 p-4 rounded-lg shadow-sm border-gray-200 py-4'>
                <img src={product.productImages[0]} alt='product' className='w-32 h-32'/>
                <div className='w-full  ml-4'>
                  <p className='text-gray-500 text-xs font-[Inter]'>SKU ID: {product.sku}</p>
                  <div className='mt-1 w-full flex justify-between items-center' >
                    <h1 className='w-[50%] text-xl font-semibold'>{product.productName}
                    </h1>
                    <p className='text-gray-500'>Category: {product.category} | Sub-category: {product.subCategory}</p>
                  </div>
                  <p className='mt-1 text-gray-500'>{product.description}</p>
                  <div className='flex items-center'>
                    <p className='mr-4  line-through text-gray-500 text-xl decoration-solid font-[Inter]'>
                      <FaIndianRupeeSign className='inline text-xs'/>{product.costPrice}</p>
                    <p className='text-primary text-xl font-semibold font-[Inter]'><FaIndianRupeeSign className='inline text-xs'/>{product.sellingPrice}</p>
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
