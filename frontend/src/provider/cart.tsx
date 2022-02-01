import { useReducer, useContext, createContext, ReactNode } from "react";

import {
  ACTIONTYPE,
  CartContextInterface,
  OnboardDispatchType,
} from "@interfaces/index";

import { addToCart, removeFromCart, updateCart } from "./utils";

const initialState = {
  totalQty: 0,
  totalAmount: 0,
  items: [],
};

const CartState = createContext<CartContextInterface>(initialState);
CartState.displayName = "CartState";

const CartDispatchContext = createContext<OnboardDispatchType>(
  {} as OnboardDispatchType
);
CartDispatchContext.displayName = "CartDispatchContext";

const reducer = (
  state: CartContextInterface,
  action: ACTIONTYPE
): CartContextInterface => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action.payload);

    case "REMOVE_FROM_CART":
      return removeFromCart(state, action.payload);

    case "UPDATE_CART":
      return updateCart(state, action.payload);

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        totalQty: 0,
        totalAmount: 0,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartState.Provider value={state}>{children}</CartState.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartState);
export const useDispatchCart = () => useContext(CartDispatchContext);
