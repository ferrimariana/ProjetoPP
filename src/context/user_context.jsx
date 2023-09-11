import { createContext, useState } from "react";

export const UserContext = createContext(false);

export const UserContextProvider = ({ children }) => (
  <UserContext.Provider value={useState(false)}>
    {children}
  </UserContext.Provider>
);
