import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import CartContextProvider from "./frontend/context/cartContext";
import WishListContextProvider from "./frontend/context/wishListContext";
import AuthContextProvider from "./frontend/context/authContext";
import FilterContextProvider from "./frontend/context/filterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>


    <AuthContextProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <WishListContextProvider>
            <App />
          </WishListContextProvider>
        </CartContextProvider>

      </FilterContextProvider>

    </AuthContextProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
