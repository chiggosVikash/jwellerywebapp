import { create } from 'zustand'
import axios from 'axios'

export const useCareInstStore = create((set, get) => ({
    careInstructions: [],
    isLoading: false,
    error: null,
    isSuccessful: false,
    addCareInstruction: (careInstruction) => {
        set((state) => ({ careInstructions: [...state.careInstructions, careInstruction] }))
    },

    removeCareInstruction: (careInstruction) => {
        set((state) => ({ careInstructions: state.careInstructions.filter(inst => inst !== careInstruction) }))
    },

    saveCareInstructions: async () => {
        try {
            set({ isLoading: true })
            const productId = localStorage.getItem("id")
            if (productId === null) {
                throw new Error("You are trying to save care instructions without a product ID , to fix this issue please add Image to generate a product ID")
            }
            const careInstructions = get().careInstructions
            const response = await axios.put("/api/products/care-inst", { id: productId , careInstructions })
            if (response.status === 200) {
                set({ isLoading: false, isSuccessful: true })
                return;
            }
            throw new Error("Care Instructions not saved")
        } catch (e) {
            const erroMsg = e.response ? e.response.data.error || e.message : e.message
            set({ error: erroMsg, isLoading: false, isSuccessful: false })
        }
    },

    getCareInstructions: async () => {
        try {
            set({ isLoading: true })
            const productId = localStorage.getItem("id")
            if (productId === null) {
                return;
            }
            const response = await axios.get("/api/products/care-inst", { params: { id: productId } })
            if (response.status === 200) {
                set({ careInstructions: response.data.careInstructions, isLoading: false })
                return response.data.careInstructions;
            }
            throw new Error("Care Instructions not found")
        } catch (e) {
            set({ error: e.message, isLoading: false, isSuccessful: false })
        }
    },

    resetProcessStatus: () => {
        set({ isLoading: false, error: null, isSuccessful: false })
    },
}))
