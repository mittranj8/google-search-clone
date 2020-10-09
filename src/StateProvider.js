import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); // preparing data layer

export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);

// Hook allows us to pull info from data layer
export const useStateValue = () => useContext(StateContext);
