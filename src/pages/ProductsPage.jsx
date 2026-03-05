import ProductsSection from '../components/ProductsSection';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F9F9F9] to-white">
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#00AEEF] via-[#0095CC] to-[#00AEEF] py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Our Premium Products
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              Quality FMCG products trusted by households and businesses worldwide
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-32 h-1 bg-[#ED028C] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <ProductsSection />
    </div>
  );
};

export default ProductsPage;
