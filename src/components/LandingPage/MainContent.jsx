import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";
import "./MainContent.scss";

export const MainContent = () => {
  const navigate = useNavigate();
  
  const productData = [
    {
      icon: (
        <div className="icon-container">
          <img src="assets/Products.png" alt="My Product" className="icon-image" />
        </div>
      ),
      title: "My Products",
      description: "Discover products and get data insights",
      onOpen: () => navigate("/products"),
    },
    {
      icon: (
        <div className="icon-container">
          <img src="assets/Projects.png" alt="My Product" className="icon-image" />
        </div>
      ),
      title: "My Projects",
      description: "Explore Projects and uncover data insights",
      onOpen: () => navigate("/projects"),
    },
    {
      icon: (
        <div className="icon-container">
          <img src="assets/MetaGraph.png" alt="My Product" className="icon-image" />
        </div>
      ),
      title: "MetaGraphs",
      description: "Interconnected entities enabling smart insights",
      onOpen: () => console.log("Open metagraph"),
    }
  ];

  return (
    <main className="main-content">
      <div className="content-wrapper">
        <div className="welcome-section">
          <h2>Welcome back, Harish!</h2>
          <p>Ready to unlock new insights from your data products?</p>
        </div>

        <div className="product-grid">
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
