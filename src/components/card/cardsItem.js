import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";
function CardsItem(props) {
  const { item } = props;
  return item.map((item, index) => {
    return (
      <li key={item.id} className="cards__item">
        <Link to={item.path} className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={item.label}>
            <img src={item.src} alt={item.text} className="cards__item__img" />
          </figure>
          <div className="cards__item_info">
            <h5 className="cards__item__text">{item.text}</h5>
          </div>
        </Link>
      </li>
    );
  });
}

export default CardsItem;
