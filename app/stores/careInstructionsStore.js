
import { create } from 'zustand'

export const useCareInstructionsStore = create((set) => ({
    careInstructions: [],
    isLoading: false,
    error: null,
    isSuccessful: false,

    addCareInstruction: (careInstruction) => {
        set((state) => ({ careInstructions: [...state.careInstructions, careInstruction] }))
    },

    removeCareInstruction: (instruction) => {
        set((state) => ({ careInstructions: state.careInstructions.filter(spec => spec !== instruction) }))
    },
    
    clearCareInstructions: () => {
        set({ careInstructions: [] })
    },
    clearError: () => {
        set({ error: null })
    }
}))