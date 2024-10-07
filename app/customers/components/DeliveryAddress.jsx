
export default function DeliveryAddress() {
    return (
        <>
            {/* Delivery Address */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Deliver to</h3>
                <div className="bg-gray-50 border rounded-lg p-4 flex items-start">
                    <div className="w-4 h-4 bg-primary rounded-full mt-1 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                        Major Arterial Road, Action Area II, Newtown,<br />
                        Kadampukur, West Bengal 700135
                    </p>
                </div>
                <button className="text-primary text-sm mt-2 hover:underline focus:outline-none">
                    Other Addresses
                </button>
            </div>

        </>
    )
}

