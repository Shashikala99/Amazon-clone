
import { State, Action,AddToBasketAction, RemoveFromBasketAction } from './types';

export const initialState: State = {
  basket: [],
  user: null,
};
export const getBasketTotal=(basket:{price:number}[]): number=> 
  basket?.reduce((amount, item) => item.price + amount, 0); 

const reducer = (state: State, action: Action): State => {
  console.log(action);

  switch (action.type) {
    case 'ADD_TO_BASKET':
      const addToBasketAction = action as AddToBasketAction;
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item!], // Add item to basket
      };

    case 'REMOVE_FROM_BASKET':
      const removeFromBasketAction = action as RemoveFromBasketAction;
      // Logic for removing item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
        
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket!`);
      }

      return {
        ...state,
        basket: newBasket, // Ensure no undefined values in basket
      };

    default:
      return state;
  }
};

export default reducer;
