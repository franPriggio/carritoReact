import React, { useContext } from "react";
import "./CartWidget.css";
import { CartFill } from "react-bootstrap-icons";
import { CartCntxt } from "./CartContext";

const CartWidget = () => {
  const { addItem } = useContext(CartCntxt);

  return (
    <div>
      <CartFill className="cartStyle" />
    </div>
  );
};

export default CartWidget;
