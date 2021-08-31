import React, { useContext, useEffect } from "react";
import "./CartWidget.css";
import { CartFill, Cart } from "react-bootstrap-icons";
import { CartCntxt } from "./CartContext";

const CartWidget = () => {
  const { totalItems, carrito } = useContext(CartCntxt);

  useEffect(() => {
    console.log("CARRITO VIEW", JSON.stringify(carrito));
    console.log("totalItems: " + totalItems);
  }, [carrito]);

  return (
    <div>
      {totalItems > 0 ? (
        <div className="cartStyle">
          <CartFill />
          {totalItems}
        </div>
      ) : (
        <Cart className="cartStyle" />
      )}
    </div>
  );
};

export default CartWidget;
