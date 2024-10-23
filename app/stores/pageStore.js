import { create } from "zustand";
import axios from "axios";




export const usePageStore = create((set, get) => ({
    page: 1,
    count: 0,
    pages: [],
    limit: 30,
    seedPages: () => {
        const { count, page, limit } = get();
        const totalPages = Math.ceil(count / limit);
        let newPages = [];

        if (totalPages <= 10) {
            newPages = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            const start = Math.max(1, page - 4);
            const end = Math.min(totalPages, start + 9);
            newPages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
        }

        set({ pages: newPages });
    },
    getTotalProductsCount: async (filters) => {
        try {
            const response = await axios.put('/api/products/browse', { "filters": filters });
            set({ count: response.data.count });
            console.log("count", response.data.count)
            get().seedPages();
            return response.data.count;
        } catch (e) {
            console.log("error in getTotalProductsCount", e);
            return 0;
        }
    },
    setPage: (newPage) => {
        set({ page: newPage });
        get().seedPages();
    },
}));
