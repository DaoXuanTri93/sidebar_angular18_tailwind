import { createReducer, on } from "@ngrx/store";
import { addToCart } from "./cart.action";
import { AppState } from "./appState";


export const initialState: AppState = {
  cart: []
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state: AppState, { item }) => {
    console.log('props', state);
    console.log('itemState', item);
    
    return { ...state, cart: [...state.cart, item] }
  }),
  // on(removeFromCart, state => state - 1)
)