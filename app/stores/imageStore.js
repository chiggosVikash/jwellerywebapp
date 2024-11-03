import {create} from "zustand"
import axios from "axios"
import {v4 as uuid} from "uuid"
import { uploadImages } from "../services/firebase_storage_service";
import { setSelectedProductDocumentId } from "../lib/db/local_storage";


export const useImageStore = create((set,get)=>({
    imageFiles:[],
    imageUrls:[],
    productId:null,
    isLoading:false,
    isSuccess:false,
    error:null,
    addImages:(images)=>{
        set((state)=>({imageFiles:[...state.imageFiles,...images]}))
    },
    removeImage:(image)=>{
        if(typeof image === "string"){
            set((state)=>({imageUrls:state.imageUrls.filter(img=>img!==image)}))
            return;
        }
      
        set((state)=>({imageFiles:state.imageFiles.filter(img=>img!==image)}))
    },
    clearImages:()=>{
        set({imageFiles:[],imageUrls:[]})
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
            /// If product id exist in local storage then update the product not create a new one
            if(localStorage.getItem("id")){
                await get().updateImages();
                return;
            }


            get().setProductId();
            set({isLoading:true})
            if(get().imageFiles.length === 0){
                throw new Error("Please add images first")
            }
            
            const imageUrls = await uploadImages(get().productId,get().imageFiles);
            const response = await axios.post("/api/products/images",{productId:get().productId,productImages:imageUrls})
            if(response.status===201){
                const {id} = response.data;
                setSelectedProductDocumentId(id)
                set({isLoading:false,isSuccess:true})
                return;
            }
            throw new Error("Failed to save images")           
        }catch(e){
            set({error:"Failed to upload images",isLoading:false,isSuccess:false})

        }
    },

    updateImages: async()=>{
        try{    
            
           
            const productId = get().productId;
            if(!productId){
                throw new Error("Product ID is required")
            }
            const documentId = localStorage.getItem("id")

            if(!documentId){
                throw new Error("Document ID is required")
            }
            const imageFiles = get().imageFiles;
            set({isLoading:true})
            if(imageFiles.length === 0 && get().imageUrls.length === 0){
                throw new Error("Please add images first")
            }
            const imageUrls = imageFiles.length === 0 ? []: await uploadImages(productId,imageFiles);

            const mergedUrls = [...get().imageUrls,...imageUrls]
            
            const response = await axios.put("/api/products/images",{id:documentId,productImages:mergedUrls})
            if(response.status === 200){
                set({isLoading:false,isSuccess:true})
                return;
            }
            throw new Error("Failed to update images")
            

        }catch(e){
            set({error:"Failed to update images",isLoading:false,isSuccess:false})
        }
    },

    resetProcessStatus:()=>{
        set({isLoading:false,isSuccess:false,error:null})
    },
    
    getImages: async()=>{
        try{
            const productId = localStorage.getItem("id")
            if(!productId){
                return;
            }
            set({isLoading:true})
            const response = await axios.get('/api/products/images',{params:{id:productId}})
            if(response.status === 200){
                const {productImages,productId} = response.data;
                set({imageFiles:[],productId:productId,imageUrls:productImages,isLoading:false,isSuccess:false,})
                
                return;
            }
            throw new Error("Failed to get images")
        

        }catch(e){
            console.log("Error in getImages",e)
            set({error:e.message,isLoading:false,isSuccess:false})
        }
    },

    isUrl:(image)=>{
        if(!image){
            return false;
        }
        if(typeof image !== "string"){
            return false;
        }
        if(image.includes("http://") || image.includes("https://")){
            return true;
        }
        return false;
    }



}));