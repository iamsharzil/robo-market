import { CartContextInterface, CartPayload } from "@interfaces/index";

export const addToCart = (
  state: CartContextInterface,
  payload: CartPayload
) => {
  const { id, qty, price } = payload;
  const items = [...state.items];

  const item = items.find((item) => item.id === id);

  if (item) {
    item.qty += qty;
  } else {
    items.push(payload);
  }

  const totalQty = items.length
    ? +items.reduce((acc, item) => acc + item.qty, 0)
    : qty;

  const totalAmount = items.length
    ? +items.reduce((acc, item) => acc + +item.price * item.qty, 0)
    : +price;

  return {
    ...state,
    items,
    totalQty,
    totalAmount: +totalAmount.toFixed(2),
  };
};

export const removeFromCart = (
  state: CartContextInterface,
  payload: { id: number }
) => {
  const { id } = payload;
  const items = [...state.items];
  const item = items.find((item) => item.id === id);

  if (item) {
    const filteredItems = items.filter((item) => item.id !== id);
    const totalQty = filteredItems.length
      ? filteredItems.reduce((acc, item) => acc + item.qty, 0)
      : 0;
    const totalAmount = filteredItems.length
      ? filteredItems.reduce((acc, item) => acc + +item.price * item.qty, 0)
      : 0;

    return {
      ...state,
      items: filteredItems,
      totalQty,
      totalAmount,
    };
  }

  return state;
};

export const updateCart = (
  state: CartContextInterface,
  payload: CartPayload
) => {
  const { id, qty } = payload;
  const items = [...state.items];
  const item = state.items.find((item) => item?.id === id);

  if (item) {
    item.qty = qty;
  }

  const totalQty = items.length
    ? items.reduce((acc, item) => acc + item.qty, 0)
    : 0;

  const totalAmount = items.length
    ? items.reduce((acc, item) => acc + +item.price * item.qty, 0)
    : 0;

  if (qty === 0) {
    return removeFromCart(state, { id });
  }

  return {
    ...state,
    items,
    totalQty,
    totalAmount,
  };
};
