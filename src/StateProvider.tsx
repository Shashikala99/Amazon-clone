// Set up data layer and track the basket

import React, { createContext, useContext, useReducer, ReactNode, Dispatch} from "react";
import { State, Action } from './types';

//This is the data layer

export const StateContext = createContext<[State, Dispatch<Action>] | undefined>(undefined);


 //Build a provider

export const StateProvider = ({ reducer, initialState, children }: { reducer: (state: State, action: Action) => State; initialState: State; children: ReactNode; }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
 );

 //This is how we use it inside of a component
 
export const useStateValue = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateValue must be used within a StateProvider');
  }
  return context;
};