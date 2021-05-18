import React from "react";
import CardsMain from "./cardsMain";
import "./cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <CardsMain />
        </div>
      </div>
    </div>
  );
}

export default Cards;
