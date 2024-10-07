"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useCallback ,useState,useEffect} from 'react';
import axios from 'axios';
import { FiEdit2, FiTrash2, FiShoppingCart, FiAward } from 'react-icons/fi';
import Spinner from '@/app/Components/Spinner';
export default function ProductDetailsPage({ params }) {
    const [product,setProduct] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [selectedImage,setSelectedImage] = useState(null)
    /*
    Fetch the product data using the productId
    */
    const fetchProducts = useCallback(async()=>{
        try{
            const productId = params.productId;
            setIsLoading(true)
            const response = await axios.get(`/api/products/${productId}`)
            if(response.status === 200){
                setProduct(response.data.data)
                setSelectedImage(response.data.data.productImages[0])
            }
        }catch(e){
            console.log("Error in fetching product details")
            console.log(e)
        }finally{
            setIsLoading(false)
        }
    },[params.productId])

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])


    if(isLoading){
        return <div className="flex items-center justify-center h-screen">
            <Spinner/>
        </div>
    }

    if(!product){
        return <div>Product not found</div>
    }
    return (
        <div className="bg-gray-100 min-h-screen">
            
            <div className="container mx-auto px-4 py-16">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8">
                            <div className="mb-6 relative">
                               { product && <Image 
                                    src={selectedImage} 
                                    alt={product.productName} 
                                    width={500} 
                                    height={500} 
                                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                />}
                                <span className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {product.category}
                                </span>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {product.productImages.map((image, index) => (
                                    <Image key={index} src={image} alt={`Product image ${index + 2}`} width={100} height={100} className="rounded-md hover:opacity-75 transition-opacity cursor-pointer" 
                                    onClick={()=>setSelectedImage(image)} />
                                ))}
                            </div>
                        </div>

                        <div className="md:w-1/2 p-8 flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.productName}</h1>
                                <p className="text-sm text-gray-500 mb-4">SKU: {product.sku}</p>
                                <p className="text-2xl font-semibold mb-6 text-indigo-600">${product.sellingPrice.toLocaleString()}</p>
                                <p className="mb-6 text-gray-700 leading-relaxed">{product.description}</p>
                                
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center">
                                        <FiShoppingCart className="text-indigo-600 mr-2" />
                                        <div>
                                            <p className="font-semibold text-gray-700">Availability</p>
                                            <p className={`font-semibold ${product.availabilityStatus === 'Out of Stock' ? 'text-red-500' : 'text-green-500'}`}>
                                                {product.availabilityStatus}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <FiAward className="text-indigo-600 mr-2" />
                                        <div>
                                            <p className="font-semibold text-gray-700">Warranty</p>
                                            <p>{product.warranty}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-4 mt-8">
                                <Link href={`/products/edit/${product.productId}`} className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center">
                                    <FiEdit2 className="mr-2" /> Edit Product
                                </Link>
                                <button className="flex-1 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center">
                                    <FiTrash2 className="mr-2" /> Delete Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}