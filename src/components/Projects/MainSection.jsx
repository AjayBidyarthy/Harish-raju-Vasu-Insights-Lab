import { useParams, Link } from "react-router-dom";
import { InsightsOptionCard } from "./InsightsOptionCard";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./MainSection.scss"

const MainSection = ({ insights }) => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const navigate = useNavigate();

  const productData = [
    {
      icon: (
        <div className="product-icon">
          <img src="/assets/albus.png" alt="Ask Albus" />
        </div>
      ),
      title: "Ask Albus",
      description: "Interconnected entities enabling smart insights.",
      onOpen: () => navigate("/albus"),
    },
    {
      icon: (
        <div className="product-icon">
          <img src="/assets/sql.png" alt="SQL studio" />
        </div>
      ),
      title: "SQL Studio",
      description: "Manage databases with intuitive tools",
      onOpen: () => navigate("/sql"),
    },
    {
      icon: (
        <div className="product-icon">
          <img src="/assets/python.png" alt="Python Code" />
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

  if (id) {
    const project = insights?.find((p) => p.id === Number(id));
    if (!project) {
      return <div className="error-message">Project not found</div>;
    }
  }

  return (
    <main className="main-section">
      <div className="main-section__container">
        <div className="main-section__header">
          <p>Use one of these three options to create an insight:</p>
        </div>

        <div className="main-section__grid-container" ref={containerRef}>
          <svg className="main-section__svg-container">
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

          <div className="main-section__grid">
            {productData.map((product, index) => (
              <div key={index} className="product-card">
                <InsightsOptionCard
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;