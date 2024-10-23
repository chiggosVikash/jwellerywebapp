'use client'
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const SaveProductContext = createContext();

export const useSaveProduct = () => {
  const context = useContext(SaveProductContext);
  if (!context) {
    throw new Error('useSaveProduct must be used within a SaveProductProvider');
  }
  return context;
};

export const SaveProductProvider = ({ children }) => {
  const [saveStatus, setSaveStatus] = useState('idle');
  // const [errorStatus, setErrorStatus] = useState(null);

  const saveProduct = async (productData) => {
    try {
      setSaveStatus({
        isLoading: true,
        loadingMessage: 'Saving Product...',
        isError: false,
        errorMessage: '',
        isSuccess: false,
        successMessage: '',
      });

      // Ensure productId is set
      productData.productId = productData.productId || uuidv4();

      const response = await axios.post('/api/products', productData)

      if (response.status === 201) {
        setSaveStatus({
          isLoading: false,
          loadingMessage: '',
          isError: false,
          errorMessage: '',
          isSuccess: true,
          successMessage: 'Product Saved Successfully',
        });
      }
    } catch (error) {
      setSaveStatus({
        isLoading: false,
        loadingMessage: '',
        isError: true,
        errorMessage: error.message || 'An error occurred while saving the product',
        isSuccess: false,
        successMessage: '',
      });
    }
  };

  const setErrorState= (message)=>{
    setSaveStatus({
      isLoading: false,
      loadingMessage: '',
      isError: true,
      errorMessage: message || 'An error occurred while saving the product',
      isSuccess: false,
      successMessage: '',
    });
  }

  const setSavingStatus = (message)=>{
    setSaveStatus({
      isLoading: true,
      loadingMessage: message || 'Saving product...',
      isError: false,
      errorMessage: '',
      isSuccess: false,
      successMessage: '',
    });
  }

  const resetSaveStatus = () => {
    setSaveStatus('idle');
  };

  return (
    <SaveProductContext.Provider value={{ saveProduct, saveStatus, resetSaveStatus, setErrorState, setSavingStatus }}>
      {children}
    </SaveProductContext.Provider>
  );
};
