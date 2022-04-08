import { CartActionTypes } from "./cartActionTypes";
import { addItemToCart, removeItemsFromCart } from "./cartUtils";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemsFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
