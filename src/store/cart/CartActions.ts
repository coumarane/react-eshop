// store/cart/CartActions.ts
import { action } from 'typesafe-actions';
import { CartActionTypes, ICart } from './CartTypes';
import { IBook } from '../book/BookTypes';

// For more info: https://github.com/piotrwitek/typesafe-actions
export const addCartRequest = (data: IBook) => action(CartActionTypes.ADD_CART_REQUEST, data);
export const addCartError = (message: string) => action(CartActionTypes.ADD_CART_ERROR, message);

export const removeCartRequest = (id: string) => action(CartActionTypes.REMOVE_CART_REQUEST, {id});

export const fetchCartsRequest = () => action(CartActionTypes.FETCH_ALL_REQUEST);
export const fetchCartsSuccess = (datas: ICart[]) => action(CartActionTypes.FETCH_ALL_SUCCESS, datas);
export const fetchCartsError = (message: string) => action(CartActionTypes.FETCH_ALL_ERROR, message);