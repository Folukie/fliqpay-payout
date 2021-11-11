import { createContext, useState } from "react";

export const NavigationContext = createContext();
export const PAGE_NAMES = {
  amount: "amount",
  recipient: "recipient",
  receiver: "receiver",
};

export const NavigationContextProvider = ({ children }) => {
  const state = useState(PAGE_NAMES.amount);
  return (
    <NavigationContext.Provider value={state}>
      {children}
    </NavigationContext.Provider>
  );
};
