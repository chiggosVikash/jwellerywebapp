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
    removeImage:(index)=>{
        const images = get().imageFiles;
        const image = images[index];
        set((state)=>({imageFiles:state.imageFiles.filter(img=>img!==image)}))
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
            if(imageFiles.length === 0){
                throw new Error("Please add images first")
            }
            const imageUrls = await uploadImages(productId,imageFiles);

            
            const response = await axios.put("/api/products/images",{id:documentId,productImages:imageUrls})
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
                const {images} = response.data;
                set({imageUrls:images,isLoading:false,isSuccess:false})
                
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