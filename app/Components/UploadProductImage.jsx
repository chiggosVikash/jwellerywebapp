'use client';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; 

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages([...selectedImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    const newImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(newImages);
  };

  return (
    <div className="">
      {/* <h2 className="text-2xl font-semibold mb-4">Add Product Images</h2> */}
      <div className="rounded-lg p-4 mb-4 bg-white ">
      <h2 className="text-xl  mb-4">Add Product Images</h2>
         <input
        type="file"
        multiple
        accept="image/*"
        id="file-upload"
        onChange={handleImageChange}
        className="hidden" // Hide the default file input
        />
      <label
        htmlFor="file-upload"
        className="flex flex-col  h-16 items-center justify-center px-4 py-2 border border-dashed border-accent rounded-lg text-gray-700 cursor-pointer hover:bg-gray-100"
      >
        <FaPlus className="mr-2 text-secondary" /> {/* Icon */}
        Add Image {/* Custom text */}
      </label>
        <p className="text-gray-500 mt-2 text-[.8rem]">Note*: You can add multiple images. (JPEG, PNG)</p>
        <div className="flex flex-wrap gap-4 m-4">
        {selectedImages.map((image, index) => (
          <div key={index} className="relative w-[250px] h-[200px]">
            <img
              src={URL.createObjectURL(image)}
              alt={`Product Preview ${index + 1}`}
              className="h-full object-cover rounded-lg"
            />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute -top-3 -right-1 bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      </div>
      {/* <div className="flex flex-wrap gap-4">
        {selectedImages.map((image, index) => (
          <div key={index} className="relative w-32 h-32">
            <img
              src={URL.createObjectURL(image)}
              alt={`Product Preview ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              &times;
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ImageUpload;
