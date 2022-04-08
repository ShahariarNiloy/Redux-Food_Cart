import { createSelector } from "reselect";

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart: any) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: any) =>
    cartItems.reduce(
      (accumulatedQuantity: any, cartItem: any) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: any) =>
    cartItems.reduce(
      (accumulatedPrice: any, cartItem: any) =>
        accumulatedPrice + cartItem.quantity * cartItem.price,
      0
    )
);
