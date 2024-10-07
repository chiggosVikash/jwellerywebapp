import Image from 'next/image';

export default function OrderHeading() {
    return (
        <div className="relative mb-12">
            <div className="max-w-5xl mx-auto px-8 py-12">
                <h1 className="text-4xl font-serif font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
                    Order Details
                </h1>
                <div className="mt-4 h-px bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200"></div>
            </div>
        </div>
    )
}

