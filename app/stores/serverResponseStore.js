import {create} from "zustand"

export const useServerResponseStore = create((set)=>({
    isSuccessful:false,
    successMessage:null,
    isLoading:false,
    error:null,
    setError:(error)=>{
        set({error:error})
    },
    clearError:()=>{
        set({error:null})
    },
    setSuccess:(message)=>{
        set({isSuccessful:true,successMessage:message})
    },
    clearSuccess:()=>{
        set({isSuccessful:false,successMessage:null})
    },
    setLoading:()=>{
        set({isLoading:true})
    },
    clearLoading:()=>{
        set({isLoading:false})
    }

}))
