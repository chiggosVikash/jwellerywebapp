'use client'

import React,{useEffect} from 'react'
import AddProductForm from '../components/AddProductForm'
import Header from '../components/Header';
import ImageUpload from '../components/UploadProductImage';
import { PictureProvider } from '@/context/Pictures';
import { SaveProductProvider } from '@/context/SaveProduct';
import { authStore } from '../stores/authStore'
import { useRouter } from 'next/navigation';


const AddProductPage = () => {
  const router = useRouter()

  const {cookiesStatus} = authStore()

  useEffect(()=>{
    const isValid = cookiesStatus()
    if(!isValid){
      router.push("/signin")
    }
  },[cookiesStatus,router]
  )



  return (
    <div className='h-max py-navBarPadding'>
       <Header header={"Add Products"}/>
      <div className='my-10 mx-8 '>
        <PictureProvider>
          <SaveProductProvider>
          <ImageUpload/>
          <AddProductForm/>
          </SaveProductProvider>
        </PictureProvider>
       
      </div>
       <div className='h-28'></div>
    </div>
  )
}

export default AddProductPage
