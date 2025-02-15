import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { InsightsOptionCard } from "./InsightsOptionCard";
import "./CreateInsightModal.scss";

const CreateInsightModal = () => {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const productData = [
    {
      id: "albus",
      icon: <img src="/assets/albus.png" alt="Ask Albus" className="product-icon" />,
      title: "Ask Albus",
      description: "Interconnected entities enabling smart insights.",
      route: "/albus",
    },
    {
      id: "sql",
      icon: <img src="/assets/sql.png" alt="SQL studio" className="product-icon" />,
      title: "SQL Studio",
      description: "Manage databases with intuitive tools",
      route: "/sql",
    },
    {
      id: "notebook",
      icon: <img src="/assets/python.png" alt="Python Code" className="product-icon" />,
      title: "Python Code",
      description: "Developing applications with Python functionality",
      route: "/notebook",
    },
  ];

  useEffect(() => {
    const updateLines = () => {
      const cards = containerRef.current?.querySelectorAll(".product-card");
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
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  return (
    <main className="modal-container">
      <div className="content-wrapper">
        <div className="heading">
          <h2>Supplychain Analysis</h2>
        </div>

        <div className="product-container" ref={containerRef}>
          <svg className="svg-lines">
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

          <div className="product-grid">
            {productData.map((product) => (
              <div
                key={product.id}
                className={`product-card ${selectedProduct?.id === product.id ? "selected" : ""}`}
                onClick={() => setSelectedProduct(product)}
              >
                <InsightsOptionCard icon={product.icon} title={product.title} description={product.description} />
              </div>
            ))}
          </div>
        </div>

        {selectedProduct && (
          <div className="action-buttons">
            <button className="cancel-btn" onClick={() => setSelectedProduct(null)}>Cancel</button>
            <button className="create-btn" onClick={() => navigate(selectedProduct.route)}>Create</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default CreateInsightModal;
