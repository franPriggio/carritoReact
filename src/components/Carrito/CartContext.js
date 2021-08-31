import React, { useState, createContext } from "react";

export const CartCntxt = createContext({});

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addItem = (item, quantity) => {
    console.log(item);
    let actualCarrito = [...carrito];
    const i = actualCarrito.findIndex((_item) => _item.id === item.id);
    i > -1 ? (actualCarrito[i] = item) : actualCarrito.push(item);
    setCarrito(actualCarrito);
  };

  const removeItem = (itemId) => {
    let actualCarrito = [...carrito];
    actualCarrito = actualCarrito.filter((item) => item.id !== itemId);
    setCarrito(actualCarrito);
  };

  const clear = () => {
    setCarrito([]);
  };

  const isInCart = (itemId) => {
    return carrito.find((el) => el.id === itemId);
  };

  const totalItems = () => {
    return carrito.length;
  };

  return (
    <CartCntxt.Provider
      value={{ addItem, removeItem, clear, isInCart, carrito, totalItems }}
    >
      {children}
    </CartCntxt.Provider>
  );
};
