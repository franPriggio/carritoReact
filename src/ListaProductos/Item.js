import React from "react";
import "./Item.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemDetailContainer from "../DetalleProductos/ItemDetailContainer";

const Item = ({ id, title, itemPrice, pictureUrl }) => {
  return (
    <div className="itemSpace">
      <Image fluid src={pictureUrl} className="prodStyle"></Image>
      <Link to={`/item/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>${itemPrice}</p>
      <ItemDetailContainer id={id} />
    </div>
  );
};

export default Item;
