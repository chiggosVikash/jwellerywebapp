import {create} from 'zustand'
import axios from 'axios'
export const useProductStore = create((set)=>({
    product:null,
    isLoading:false,
    error:null,
    selectedImage:null,
    getProduct:async(productId)=>{
        set({isLoading:true})
        try{
            const response = await axios.get(`/api/products/${productId}`)
            if(response.status === 200){
                set({product:response.data.data,isLoading:false,selectedImage:response.data.data.productImages[0]})
            }
        }catch(e){
            console.log("Error in fetching product details")
            console.log(e)
            set({error:"Error in fetching product details",isLoading:false})
        }
    },
    setSelectedImage:(image)=>{
        set({selectedImage:image})
    },

    updateProduct:async(productId,productData)=>{
        set({isLoading:true})
        try{
            const response = await axios.put(`/api/products/${productId}`,productData)
            if(response.status === 200){
                set({product:response.data.data,isLoading:false})
            }
        }catch(e){
            set({error:"Error in updating product details",isLoading:false})
        }
    }
}))