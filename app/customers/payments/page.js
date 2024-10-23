import OrderSummary from '../components/OrderSummary';
import ProductDetails from '../components/ProductDetails';
export default function OrderPayment() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        <ProductDetails />
        <OrderSummary />
      </div>
    </div>
  );
}