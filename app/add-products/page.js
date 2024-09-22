import React from 'react'
import AddProductForm from '../Components/AddProductForm'
import Header from '../Components/Header';
import ImageUpload from '../Components/UploadProductImage';


const AddProductPage = () => {
  return (
    <div className='h-max py-navBarPadding'>
       <Header header={"Add Products"}/>
      <div className='my-10 mx-8 '>
        <ImageUpload/>
        <AddProductForm/>
      </div>
       <div className='h-28'></div>
    </div>
  )
}

export default AddProductPage
