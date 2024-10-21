import React from 'react'
import AddProductForm from '../../../components/AddProductForm'
import Header from '../../../components/Header';
import ImageUpload from '../../../components/UploadProductImage';
import { PictureProvider } from '@/context/Pictures';
import { SaveProductProvider } from '@/context/SaveProduct';



const EditProductPage = () => {
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

export default EditProductPage
