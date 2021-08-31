import React, { useContext, useEffect, useState } from "react";
import { CartCntxt } from "./CartContext";

const Carrito = () => {
  const { addItem, carrito, removeItem } = useContext(CartCntxt);

  return (
    <div>
      {carrito.map((item) => {
        return (
          <>
            <h2>{item.name}</h2>
            <p>{item.precio}</p>
          </>
        );
      })}
    </div>
  );
};

export default Carrito;
