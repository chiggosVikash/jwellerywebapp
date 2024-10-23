import { create } from "zustand";
const useFilterOptionsStore = create((set)=>({
    filterOptions:{
        category:"",
        subCategory:"",
        sortOption:""
    },
    // addFilterOption: (option)=>set((state)=>({filterOptions:[...state.filterOptions,option]})),
    // clearFilterOptions: ()=>set({filterOptions:[]}),
    // removeFilterOption: (option)=>set((state)=>({filterOptions:state.filterOptions.filter(opt=>opt!==option)}))
    selectCategory:(category)=>{
        set((state)=>({filterOptions:{...state.filterOptions,category}}))
    },
    selectSubCategory:(subCategory)=>{
        set((state)=>({filterOptions:{...state.filterOptions,subCategory}}))
    },
    selectSortOption:(sortOption)=>{
        set((state)=>({filterOptions:{...state.filterOptions,sortOption}}))
    }

}))

export default useFilterOptionsStore;