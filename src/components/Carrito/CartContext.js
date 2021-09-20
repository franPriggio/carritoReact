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
    let actualCarrito = [...carrito];
    const i = actualCarrito.findIndex((_item) => _item.id === item.id);
    let subTotal = item.price * quantity;
    item = { ...item, quantity: quantity, subTotal: subTotal };
    console.log("item added carrito: " + JSON.stringify(item));
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
      costoTotal += +item.subTotal;
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
