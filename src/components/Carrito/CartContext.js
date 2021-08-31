import React, { useState, createContext, useEffect } from "react";

export const CartCntxt = createContext({});

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [costoTotal, setCostoTotal] = useState("");
  const [totalItems, setTotalItems] = useState("");

  useEffect(() => {
    costoTotalCarrito();
    calcTotalItems();
  }, [carrito]);

  const addItem = (item, quantity) => {
    console.log(item);
    let actualCarrito = [...carrito];
    const i = actualCarrito.findIndex((_item) => _item.id === item.id);
    item = { ...item, quantity: quantity };
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

  const calcTotalItems = () => {
    setTotalItems(carrito.length);
  };

  const costoTotalCarrito = () => {
    let costoTotal = 0;
    carrito.forEach((item) => {
      costoTotal += item.precio;
    });
    setCostoTotal(costoTotal);
  };

  return (
    <CartCntxt.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        carrito,
        totalItems,
        costoTotal,
      }}
    >
      {children}
    </CartCntxt.Provider>
  );
};
