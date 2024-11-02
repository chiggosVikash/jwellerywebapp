import {create} from 'zustand'

export const useMaterialSpecStore = create((set)=>({
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
}))