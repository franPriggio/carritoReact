import React, { useState } from "react";

const CartContext = React.createContext({});

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([{ items: [] }]);

  const addItem = (item, quantity) => {
    console.log(item);
    let actualCarrito = [...carrito];
    let exists = false;
    actualCarrito.forEach((el) => {
      if (el.id === item.id) {
        if (isInCart(item.id)) {
          exists = true;
        }
      }
    });
    if (exists) {
      //remove existing
      removeItem(item.id);
    }
    actualCarrito.items.push({ item: item, quantity: quantity });
    setCarrito(actualCarrito);
    console.log(setCarrito);
  };

  const removeItem = (itemId) => {
    let actualCarrito = [...carrito];
    actualCarrito = actualCarrito.filter((item) => item.id !== itemId);
    setCarrito(actualCarrito);
  };

  const clear = () => {
    console.log("clear");
    setCarrito([]);
  };

  const isInCart = (itemId) => {
    console.log("isinL : " + itemId);
    let actualCarrito = [...carrito];
    if (actualCarrito.filter((item) => item.id === itemId).length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider value={{ addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
