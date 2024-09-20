import React from 'react'
import AddProductForm from '../Components/AddProductForm'
import Header from '../Components/Header';


const AddProductPage = () => {
  return (
    <div className='w-full h-max py-navBarPadding'>
       <Header header={"Add Products"}/>
      <div className='my-10 mx-28 '>
        <AddProductForm/>
      </div>
       <div className='h-28'></div>
    </div>
  )
}

export default AddProductPage
