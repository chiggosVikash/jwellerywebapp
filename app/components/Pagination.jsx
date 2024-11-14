'use client';

import { useEffect } from "react";
import { usePageStore } from "../stores/pageStore.js";
import useFilterOptionsStore from "../stores/filterOptionsStore.js";
import { Button } from "@/components/ui/button.jsx";

export default function Pagination({ onPageChange }) {
    const { page, count, getTotalProductsCount, setPage, pages, limit } = usePageStore();
    const { filterOptions } = useFilterOptionsStore();

    useEffect(() => {
        getTotalProductsCount(filterOptions);
    }, [filterOptions, getTotalProductsCount]);

    const totalPages = Math.ceil(count / limit);

    return (
        <div className="w-full flex justify-center items-center mt-8 text-sm">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-1">
                <Button
                    onClick={() => {
                        if (page > 1) {
                            setPage(page - 1);
                            onPageChange(page - 1);
                        }
                    }}
                    disabled={page === 1}
                >
                    PREV
                </Button>
                <span className="px-3 py-1">Page {page} of {totalPages}</span>

                {pages.map((pageNum) => (
                    <Button variant="outline"
                        onClick={() => {    
                            setPage(pageNum);
                            onPageChange(pageNum);
                        }}
                        key={pageNum}
                        // className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                        //     pageNum === page ? 'bg-primary text-onPrimary' : 'hover:bg-gray-100'
                        // }`}
                    >
                        {pageNum}
                    </Button>
                ))}

                <Button
                    onClick={() => {
                        if (page < totalPages) {
                            setPage(page + 1);
                            onPageChange(page + 1);
                        }
                    }}
                    // className="px-3 py-1 bg-primary text-onPrimary font-medium hover:bg-primary/90 rounded transition-colors"
                    disabled={page === totalPages}
                >
                    NEXT
                </Button>
            </div>
        </div>
    );
}
