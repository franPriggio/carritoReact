import React from "react";
import "./CartWidget.css";
import { CartFill } from "react-bootstrap-icons";
import { CartContext } from "../../context/cartContext";
import Carrito from "./carrito";
const CartWidget = () => {
  return (
    <div>
      {/* <CartContext.Provider> */}
      <CartFill className="cartStyle" />
      <Carrito></Carrito>
      {/* </CartContext.Provider> */}
    </div>
  );
};

export default CartWidget;
