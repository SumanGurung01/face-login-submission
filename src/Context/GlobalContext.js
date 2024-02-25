import React, { createContext, useState } from "react";

export const Context = createContext();

function GlobalContext({ children }) {
  const [login, setLogin] = useState(false);

  return (
    <Context.Provider value={{ login, setLogin }}>{children}</Context.Provider>
  );
}

export default GlobalContext;
