import React from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa'; // Import the cross icon

import { useImageStore } from '../stores/imageStore';

const ImageUpload = () => {

  const {images,addImages,removeImage} = useImageStore();


  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    addImages(files);
  };

  const handleRemoveImage = (index) => {
    removeImage(index);
  };

  return (
    <div className="max-w-7xl flex flex-col  p-4 bg-surface rounded-lg mx-8 my-10">
      <h2 className="text-xl font-bold mb-4 text-left">Upload Product Image</h2>
      <div className="flex w-full gap-8 md:gap-12 items-center">
        {/* Left Section */}
        <div className="w-1/3 flex flex-col items-center">
          <label className="flex  bg-slate-50 items-center justify-center w-full h-48 border-2 border-dashed border-primary rounded-lg cursor-pointer mb-4">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
            <span className="text-onPrimary text-3xl">+</span>
            <span className="text-onPrimary">Add Image</span>
          </label>
        </div>
        <div className='h-64 w-[1px] bg-accent'></div>
        {/* Right Section */}
        <div className="w-[60%] flex flex-wrap items-center justify-center">
          {images.length === 0 ? (
            <p className="text-gray-500 text-xl ">Add images first</p>
          ) : (
            images.map((image, index) => (
              <div key={index} className="relative w-40 h-40 bg-gray-50 p-1 rounded-lg mr-5 mb-4">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`upload-${index}`}
                  width={100} // Set width
                  height={100} // Set height
                  className="rounded-lg h-full w-full"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute -top-2 -right-2 bg-white w-7 h-7 rounded-full items-center flex justify-center shadow-lg"
                >
                  <FaTimes /> 
                </button>
              </div>
            )) 
          )}
        </div>
      </div>
      
    </div>
  );
};

export default ImageUpload;
