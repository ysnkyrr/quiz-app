import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
import { initialState } from "./state";

export const MainContext = createContext(initialState);
function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
export default Store;
