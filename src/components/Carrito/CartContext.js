import React, { useContext, useState } from "react";

const AddContext = React.createContext();
const RemoveContext = React.createContext();
const ClearContext = React.createContext();
const IsInContext = React.createContext();

export function useAdd() {
  return useContext(AddContext);
}

export function useRemove() {
  return useContext(RemoveContext);
}

export function useClear() {
  return useContext(ClearContext);
}

export function useIsInCart() {
  return useContext(IsInContext);
}

const CartContext = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const addItem = () => {
    console.log(darkTheme);
    setDarkTheme(!darkTheme);
    console.log(darkTheme);
  };

  const removeItem = () => {
    console.log(darkTheme);
    setDarkTheme(!darkTheme);
    console.log(darkTheme);
  };

  const clear = () => {
    console.log(darkTheme);
    setDarkTheme(!darkTheme);
    console.log(darkTheme);
  };

  const isInCart = () => {
    console.log(darkTheme);
    setDarkTheme(!darkTheme);
    console.log(darkTheme);
  };

  return (
    <AddContext.Provider value={addItem}>
      <RemoveContext.Provider value={removeItem}>
        <ClearContext.Provider value={clear}>
          <IsInContext.Provider value={isInCart}>
            {children}
          </IsInContext.Provider>
        </ClearContext.Provider>
      </RemoveContext.Provider>
    </AddContext.Provider>
  );
};

export default CartContext;
