export type ProductItemType = {
  id: number;
  name: string;
  image: string;
  price: string;
  stock: number;
  createdAt: Date;
  material: string;
};

export type ProductItemListType = ProductItemType[];

export type CartPayload = ProductItemType & { qty: number };

export interface CartContextInterface {
  totalQty: number;
  totalAmount: number;
  items: CartPayload[];
}

type ADD_TO_CART_ACTION = {
  type: "ADD_TO_CART";
  payload: CartPayload;
};

type UPDATE_CART_ACTION = {
  type: "UPDATE_CART";
  payload: CartPayload;
};

type REMOVE_FROM_CART_ACTION = {
  type: "REMOVE_FROM_CART";
  payload: {
    id: number;
  };
};

export type ACTIONTYPE =
  | ADD_TO_CART_ACTION
  | REMOVE_FROM_CART_ACTION
  | UPDATE_CART_ACTION
  | {
      type: "CLEAR_CART";
    };

export type OnboardDispatchType = React.Dispatch<ACTIONTYPE>;
