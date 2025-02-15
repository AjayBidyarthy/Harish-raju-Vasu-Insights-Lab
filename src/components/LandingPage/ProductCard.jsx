import "./ProductCard.scss";

export const ProductCard = ({ icon, title, description, onOpen }) => {
  return (
    <div className="product-card">
      <div className="icon-wrapper">{icon}</div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p> 
      </div>
      <button onClick={onOpen} className="explore-button">
        Explore
      </button>
    </div>
  );
};
