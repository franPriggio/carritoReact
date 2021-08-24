import React from "react";
import "./Item.css";
import { Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "../DetalleProductos/ItemDetailContainer";

const basePath = "https://rickandmortyapi.com/api/character/";

const NavItemDetailContainer = ({ id, title, itemPrice, pictureUrl }) => {
  const addToCart = (mensaje) => {
    alert(`${mensaje} ${title} al carrito`);
  };

  const { charId } = useParams();

  return (
    <div className="itemSpace">
      <Image fluid src={pictureUrl} className="prodStyle"></Image>
      <Link to={`item/${charId}`}>
        <h3>{title}</h3>
      </Link>
      <p>${itemPrice}</p>
      <ItemCount stock={10} initial={2} onAdd={addToCart} />
      <ItemDetailContainer id={id} />
    </div>
  );
};

export default NavItemDetailContainer;
