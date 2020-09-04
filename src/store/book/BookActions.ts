// store/book/BookActions.ts
import { action } from 'typesafe-actions';
import { BookActionTypes, IBook, ICommercialOffer } from './BookTypes';

// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchBooksRequest = () => action(BookActionTypes.FETCH_ALL_REQUEST);
export const fetchBooksSuccess = (datas: IBook[]) => action(BookActionTypes.FETCH_ALL_SUCCESS, datas);
export const fetchBooksError = (message: string) => action(BookActionTypes.FETCH_ALL_ERROR, message);

export const searchBooksRequest = (search: string) => action(BookActionTypes.FETCH_SEARCH_REQUEST, search);
export const searchBooksSuccess = (datas: IBook[]) => action(BookActionTypes.FETCH_SEARCH_SUCCESS, datas);
export const searchBooksError = (message: string) => action(BookActionTypes.FETCH_SEARCH_ERROR, message);

export const fetchCommercialOffersRequest = (ids: string) => action(BookActionTypes.FETCH_COMMERCIAL_OFFERS_REQUEST, ids);
export const fetchCommercialOffersSuccess = (datas: ICommercialOffer[]) => action(BookActionTypes.FETCH_COMMERCIAL_OFFERS_SUCCESS, datas);
export const fetchCommercialOffersError = (message: string) => action(BookActionTypes.FETCH_COMMERCIAL_OFFERS_ERROR, message);