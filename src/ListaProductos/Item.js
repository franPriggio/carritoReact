import React, { useState, useEffect } from "react";
import "./Item.css";
import { Image } from "react-bootstrap";
import ItemCount from "./ItemCount";

const Item = ({ title, itemPrice, pictureUrl }) => {
  const [mensaje, setMensaje] = useState("");

  const addToCart = (mensaje) => {
    alert(`${mensaje} ${title} al carrito`);
  };

  return (
    <div className="itemSpace">
      <Image fluid src={pictureUrl} className="prodStyle"></Image>
      <h3>{title}</h3>
      <p>${itemPrice}</p>
      <ItemCount stock={10} initial={2} onAdd={addToCart} />
    </div>
  );
};

export default Item;
