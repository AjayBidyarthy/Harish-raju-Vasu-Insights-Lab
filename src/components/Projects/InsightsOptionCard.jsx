import "./InsightsOptionCard.scss"

export const InsightsOptionCard = ({ icon, title, description }) => {
  return (
    <div className="insights-card">
      <div className="insights-card__icon">{icon}</div>
      <div className="insights-card__content">
        <h3 className="insights-card__title">{title}</h3>
        <p className="insights-card__description">{description}</p>
      </div>
    </div>
  );
};

export default InsightsOptionCard;