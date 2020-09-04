// store/cart/CartTypes.ts
import { IBook } from "../book/BookTypes";
import { IPayload } from "../shared/SharedTypes";

export interface ICart {
  id: any;
  item: IBook;
  quantity: number;
}

export interface ICartSummary {
  offerType: string;
  offerValue: number;
  orderSubTotal: number;
  totalOrder: number;
}

export enum CartActionTypes {
  FETCH_ALL_REQUEST = "@@CART/FETCH_ALL_REQUEST",
  FETCH_ALL_SUCCESS = "@@CART/FETCH_ALL_SUCCESS",
  FETCH_ALL_ERROR = "@@CART/FETCH_ALL_ERROR",

  ADD_CART_REQUEST = "@@CART/ADD_CART_REQUEST",
  ADD_CART_SUCCESS = "@@CART/ADD_CART_SUCCESS",
  ADD_CART_ERROR = "@@CART/ADD_CART_ERROR",

  REMOVE_CART_REQUEST = "@@CART/REMOVE_CART_REQUEST",
  REMOVE_CART_SUCCESS = "@@CART/REMOVE_CART_SUCCESS",
  REMOVE_CART_ERROR = "@@CART/REMOVE_CART_ERROR",
}

/**
* Cart state
*/
export interface CartState {
  readonly carts: IPayload<ICart>;
}
