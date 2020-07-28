import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import CartProvider from "./providers/cart/cart.provider";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
