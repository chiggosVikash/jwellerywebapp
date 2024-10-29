import {create} from "zustand"
import axios from "axios"
import {v4 as uuid} from "uuid"


export const useImageStore = create((set,get)=>({
    images:[],
    productId:null,
    isLoading:false,
    error:null,
    addImage:(image)=>{
        set((state)=>({images:[...state.images,image]}))
    },
    removeImage:(image)=>{
        set((state)=>({images:state.images.filter(img=>img!==image)}))
    },
    clearImages:()=>{
        set({images:[]})
    },
    setProductId:()=>{
        const id = uuid();
        set({productId:id})
    },
    uploadImages:async()=>{
        try{
            get().setProductId();
            set({isLoading:true})
            
        }catch(e){

        }
    }
    



}));