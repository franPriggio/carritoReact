import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import { CartProvider } from "./components/Carrito/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
