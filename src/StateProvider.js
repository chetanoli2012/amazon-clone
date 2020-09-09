import React, { createContext, useContext, useReducer } from 'react';

// Prepares the data layer
export const StateContext = createContext();

// Higher Order Componenent which wraps ourr app and provides the data layer 
// to every component inside our app
export const StateProvider = ({ reducer, initialState, children }) =>
    (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );

// used to pull info from the data layer
export const useStateValue = () => useContext(StateContext);
