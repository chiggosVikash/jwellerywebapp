import {create} from "zustand"
import axios from "axios"
import {v4 as uuid} from "uuid"
import { uploadImages } from "../services/firebase_storage_service";
import { setSelectedProductDocumentId } from "../lib/db/local_storage";


export const useImageStore = create((set,get)=>({
    images:[],
    productId:null,
    isLoading:false,
    isSuccess:false,
    error:null,
    addImages:(images)=>{
        set((state)=>({images:[...state.images,...images]}))
    },
    removeImage:(index)=>{
        const images = get().images;
        const image = images[index];
        set((state)=>({images:state.images.filter(img=>img!==image)}))
    },
    clearImages:()=>{
        set({images:[]})
    },
    clearError:()=>{
        set({error:null})
    },
    setProductId:()=>{
        const id = uuid();
        set({productId:id})
    },
    saveImages:async()=>{
        try{
            get().setProductId();
            set({isLoading:true})
            // const imageUrls = await uploadImages(get().images);
            const imageUrls = []
            const response = await axios.post("/api/products/images",{productId:get().productId,productImages:imageUrls})
            if(response.status===201){
                const {id} = response.data;
                setSelectedProductDocumentId(id)
                set({isLoading:false,isSuccess:true})
                return;
            }
            set({error:"Failed to upload images",isLoading:false,isSuccess:false})            
        }catch(e){
            console.log("Error in uploadImages",e)
            set({error:"Failed to upload images",isLoading:false,isSuccess:false})

        }
    },

    resetProcessStatus:()=>{
        set({isLoading:false,isSuccess:false,error:null})
    }
    



}));