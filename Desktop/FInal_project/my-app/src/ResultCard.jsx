import React from "react";
import "./ResultCard.css";

function ReactCard(props) {
  const { name, votes, partySymbol, partyName } = props;
  return (
    <div className="react-card">
      <div className="react-card__candidate-info">
        <h3>{name}</h3>
        <p>
          <strong>{votes}</strong> votes
        </p>
      </div>
      <div className="react-card__party-info">
        <img
          src={partySymbol}
          alt={partyName}
          className="react-card__party-symbol"
        />
        <p>{partyName}</p>
      </div>
      <div className="react-card__vote-bar" style={{ width: votes }}>
        <span>{votes}</span>
      </div>
    </div>
  );
}

export default ReactCard;

