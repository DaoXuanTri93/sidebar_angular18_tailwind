import { state } from "@angular/animations";
import { AppState } from "./appState";
import { createSelector } from "@ngrx/store";

export const selectCart = (state: AppState) => state.cart;
export const selectQuantity = createSelector(selectCart, (state) =>{
    console.log('state@@@', state);
    console.log('selectCart', selectCart);
    
});