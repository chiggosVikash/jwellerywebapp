import Image from 'next/image';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const ProductCard = ({ product }) => {
  const router = useRouter();

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg'>
      <div className='relative w-full h-48'>
        <Image
          src={product.productImages[0]}
          alt={product.productName}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className='p-4'>
        <p className='text-gray-500 text-xs font-[Inter] mb-2'>SKU ID: {product.sku}</p>
        <h2 className='text-xl font-semibold mb-2 truncate'>{product.productName}</h2>
        <p className='text-gray-600 text-sm mb-2 line-clamp-2'>{product.description}</p>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-gray-500 text-sm'>Category: {product.category}</p>
          <p className='text-gray-500 text-sm'>Sub-category: {product.subCategory}</p>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <p className='line-through text-gray-500 text-sm'>
            <FaIndianRupeeSign className='inline text-xs' />{product.costPrice}
          </p>
          <p className='text-primary text-lg font-semibold'>
            <FaIndianRupeeSign className='inline text-sm' />{product.sellingPrice}
          </p>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <button
            onClick={() => router.push(`/products-list/${product.productId}`)}
            className='bg-primary text-onPrimary px-2 py-1 rounded text-sm font-semibold'
          >
            View
          </button>
          <button className='bg-secondary text-onPrimary text-sm font-semibold px-2 py-1 rounded'>
            Edit
          </button>
          <button className='bg-red-100 text-red-900 text-sm font-semibold px-2 py-1 rounded'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
