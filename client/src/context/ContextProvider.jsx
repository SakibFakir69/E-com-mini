import React, { createContext, useState } from "react";
import { Children } from "react";

export const ContextProviderApi = createContext();

function ContextProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);
  // cart store here

  const info = {
    cartItem,
    setCartItem,
  };

  console.log(cartItem);

  return (
    <div>
      <ContextProviderApi.Provider value={info}>
        {children}
      </ContextProviderApi.Provider>
    </div>
  );
}

export default ContextProvider;
