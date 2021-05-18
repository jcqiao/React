import React from "react";
import CardsItem from "./cardsItem";
import "./cards.css";

function CardsMain() {
  const cardsItem = [
    {
      id: 1,
      src: "images/img-1.jpg",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
      label: "Adventure",
      path: "/services",
    },
    {
      id: 2,
      src: "images/img-2.jpg",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
      label: "Adventure",
      path: "/services",
    },
    {
      id: 3,
      src: "images/img-3.jpg",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
      label: "Adventure",
      path: "/services",
    },
    {
      id: 4,
      src: "images/img-4.jpg",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
      label: "Adventure",
      path: "/services",
    },
    {
      id: 5,
      src: "images/img-5.jpg",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
      label: "Adventure",
      path: "/services",
    },
  ];
  return (
    <ul className="cards__items">
      <CardsItem item={cardsItem} />
    </ul>
  );
}

export default CardsMain;
