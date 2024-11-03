import {create} from 'zustand'
import axios from 'axios'

export const useMaterialSpecStore = create((set,get)=>({
    materialSpecs:[],
    isLoading:false,
    error:null,
    isSuccessful:false,

    addMaterialSpec:(materialSpec)=>{
        set((state)=>({materialSpecs:[...state.materialSpecs,materialSpec]}))
    },

    removeMaterialSpec:(materialSpec)=>{
        set((state)=>({materialSpecs:state.materialSpecs.filter(spec=>spec!==materialSpec)}))
    },

    saveMaterialSpecs: async ()=>{
        try{
            set({isLoading:true})
            const productId = localStorage.getItem("id")
            if(productId === null){
                throw new Error("You are trying to save material specs without a product ID , to fix this issue please add Image to generate a product ID")
            }
            const materialSpecs = get().materialSpecs
            const response = await axios.put("/api/products/material-spec",{materialSpecs,productId})
            if(response.status === 200){
                set({isLoading:false,isSuccessful:true})
                return;
            }
            throw new Error("Material Specs not saved")
        }catch(e){
            const erroMsg = e.response ? e.response.data.error || e.message: e.message
            set({error:erroMsg,isLoading:false,isSuccessful:false})
        }
        

    },
    resetProcessStatus:()=>{
        set({isLoading:false,error:null,isSuccessful:false})
    }
}))