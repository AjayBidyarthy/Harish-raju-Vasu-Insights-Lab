import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";

export const MainContent = () => {
  const navigate = useNavigate();
  const productData = [
    {
      icon: (
        <div className="w-34 h-34 bg-[#00758F] rounded-full flex items-center justify-center mb-2">
          <img src="assets/Products.png" alt="My Product" className="w-full h-full object-contain rounded-full" />
        </div>
      )
      ,
      title: "My Products",
      description: "Discover products and get data insights",
      onOpen: () => navigate("/products"), 
    },
    {
      icon: (
        <div className="w-34 h-34 bg-[#00758F] rounded-full flex items-center justify-center mb-2">
          <img src="assets/Projects.png" alt="My Product" className="w-full h-full object-contain rounded-full" />
        </div>
      ),
      title: "My Projects",
      description: "Explore Projects and uncover data insights",
      onOpen: () => navigate("/projects"),
    },
    {
      icon: (
        <div className="w-34 h-34 bg-[#00758F] rounded-full flex items-center justify-center mb-2">
          <img src="assets/MetaGraph.png" alt="My Product" className="w-full h-full object-contain rounded-full" />
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
