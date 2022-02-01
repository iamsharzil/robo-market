import { useDispatchCart } from "@provider/cart";

import { CartPayload, ProductItemType } from "@interfaces/index";

export const useCartActions = () => {
  const dispatch = useDispatchCart();

  const handleAddToCart = (product: ProductItemType) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...product,
        qty: 1,
      },
    });
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
      },
    });
  };

  const handleUpdateCart = (product: CartPayload) => {
    dispatch({
      type: "UPDATE_CART",
      payload: product,
    });
  };

  return {
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateCart,
  };
};
