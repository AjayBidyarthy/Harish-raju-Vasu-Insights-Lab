import { useParams, Link } from "react-router-dom";
import { ProductCard } from "../LandingPage/ProductCard";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreateInsightModal = ({ insights }) => {
 
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const navigate = useNavigate();

  const productData = [
    {
      icon: (
        <div className="w-34 h-34 rounded-full flex items-center justify-center p-4 border-2 border-blue-400 mb-2">
          <img src="/assets/albus.png" alt="Ask Albus" className="w-full h-full object-contain rounded-full" />
        </div>
      ),
      title: "Ask Albus",
      description: "Interconnected entities enabling smart insights.",
      onOpen: () => navigate("/albus"),
    },
    {
      icon: (
        <div className="w-34 h-34 rounded-full flex items-center justify-center mb-2 p-4 border-2 border-blue-400">
          <img src="/assets/sql.png" alt="SQL studio" className="w-full h-full object-contain rounded-full" />
        </div>
      ),
      title: "SQL Studio",
      description: "Manage databases with intuitive tools",
      onOpen: () => navigate("/sql"),
    },
    {
      icon: (
        <div className="w-34 h-34 rounded-full flex items-center justify-center mb-2 p-4 border-2 border-blue-400">
          <img src="/assets/python.png" alt="Python Code" className="w-full h-full object-contain rounded-full" />
        </div>
      ),
      title: "Python Code",
      description: "Developing applications with Python functionality",
      onOpen: () => navigate("/notebook"),
    }
  ];

  useEffect(() => {
    const updateLines = () => {
      const cards = containerRef.current?.querySelectorAll('.product-card');
      if (!cards || cards.length === 0) return;

      const newLines = [];
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const rect1 = card.getBoundingClientRect();
          const rect2 = cards[index + 1].getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();

          const x1 = rect1.left + rect1.width / 2 - containerRect.left;
          const y1 = rect1.top + rect1.height / 2 - containerRect.top;
          const x2 = rect2.left + rect2.width / 2 - containerRect.left;
          const y2 = rect2.top + rect2.height / 2 - containerRect.top;

          newLines.push({ x1, y1, x2, y2 });
        }
      });
      setLines(newLines);
    };

    updateLines();
    window.addEventListener('resize', updateLines);
    return () => window.removeEventListener('resize', updateLines);
  }, []);


  return (
    <main className="flex-1 p-6 bg-white overflow-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-lg">Supplychain Analysis</h2>
        </div>

        <div className="relative" ref={containerRef}>
          {/* SVG Lines Layer */}
          <svg 
            className="absolute inset-0 pointer-events-none" 
            style={{ width: '100%', height: '100%' }}
          >
            {lines.map((line, index) => (
              <line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            ))}
          </svg>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productData.map((product, index) => (
              <div key={index} className="product-card">
                <ProductCard
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  onOpen={product.onOpen}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateInsightModal