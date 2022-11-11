function Card({ children }) {
  return (
    <div className="card">
      <div className="cardInfo">{children}</div>
    </div>
  );
}

export default Card;
