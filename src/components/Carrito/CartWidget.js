import React from "react";
import "./CartWidget.css";
import { CartFill } from "react-bootstrap-icons";
const CartWidget = () => {
  return (
    <div>
      <CartFill className="cartStyle" />
    </div>
  );
};

export default CartWidget;
