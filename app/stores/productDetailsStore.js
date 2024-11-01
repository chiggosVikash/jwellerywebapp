import {create} from 'zustand'
import axios from 'axios'

export const useProductDetailsStore = create((set) => ({
    saving:false,
    error:null,
    isSaved:false,

    saveProductDetails:async (productDetails) => {
        try{
            set({saving:true,error:null})
            const id = localStorage.getItem('id')
            if(!id){
                throw new Error('Product ID not found')
            }
            const quantityAvailable = parseInt(productDetails.quantityAvailable)
            productDetails.quantityAvailable = quantityAvailable;
            const response = await axios.patch('/api/products/product-details',{id,productDetails})
            console.log(response.data)
            if(response.status === 200){
                set({saving:false,isSaved:true})
            }

        }catch(e){
            set({error:e.message,saving:false,isSaved:false})
        }
    },
    resetProcessStatus:() => set({saving:false,error:null,isSaved:false})
}))