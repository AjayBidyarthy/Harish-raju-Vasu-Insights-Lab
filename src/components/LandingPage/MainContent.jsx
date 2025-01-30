import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";

export const MainContent = () => {
  const navigate = useNavigate();
  const productData = [
    {
      icon: (
        <div className="w-24 h-24 bg-[#00758F] rounded-full flex items-center justify-center mb-2">
        <span className="text-white text-xl font-bold">Myproduct</span>
      </div>
      ),
      title: "My Products",
      description: "Discover products and get data insights",
      onOpen: () => navigate("/products"), 
    },
    {
      icon: (
        <div className="w-24 h-24 bg-[#00758F] rounded-full flex items-center justify-center mb-2">
          <span className="text-white text-xl font-bold">MySQL</span>
        </div>
      ),
      title: "My Projects",
      description: "Explore Projects and uncover data insights",
      onOpen: () => console.log("Open projects"),
    },
    {
      icon: (
        <div className="w-24 h-24 bg-[#F9E04B] rounded-full flex items-center justify-center mb-2">
          <span className="text-black text-2xl">jl</span>
        </div>
      ),
      title: "MetaGraphs",
      description: "Interconnected entities enabling smart insights",
      onOpen: () => console.log("Open metagraph"),
    }
  ];

  return (
    <main className="flex-1 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Welcome back, Harish!</h2>
          <p className="text-gray-600">
            Ready to unlock new insights from your data products?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              onOpen={product.onOpen}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
