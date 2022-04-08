import { CartActionTypes } from "./cartActionTypes";

export const CartAddItem = (item: any) => ({
  type: CartActionTypes.CART_ADD_ITEM,
  payload: item,
});

export const CartRemoveItem = (item: any) => ({
  type: CartActionTypes.CART_REMOVE_ITEM,
  payload: item,
});
