// store/book/BookTypes.ts

import { IPayload } from "../shared/SharedTypes";

export interface IBook {
  isbn: string;
  title: string;
  price: number;
  cover: string;
  synopsis: string[];
}

export interface ICommercialOffer {
  type: string;
  value: number;
  sliceValue?: number;
}

export enum BookActionTypes {
  FETCH_ALL_REQUEST = "@@BOOK/FETCH_ALL_REQUEST",
  FETCH_ALL_SUCCESS = "@@BOOK/FETCH_ALL_SUCCESS",
  FETCH_ALL_ERROR = "@@BOOK/FETCH_ALL_ERROR",

  FETCH_SEARCH_REQUEST = "@@BOOK/FETCH_SEARCH_REQUEST",
  FETCH_SEARCH_SUCCESS = "@@BOOK/FETCH_SEARCH_SUCCESS",
  FETCH_SEARCH_ERROR = "@@BOOK/FETCH_SEARCH_ERROR",

  FETCH_COMMERCIAL_OFFERS_REQUEST = "@@BOOK/FETCH_COMMERCIAL_OFFERS_REQUEST",
  FETCH_COMMERCIAL_OFFERS_SUCCESS = "@@BOOK/FETCH_COMMERCIAL_OFFERS_SUCCESS",
  FETCH_COMMERCIAL_OFFERS_ERROR = "@@BOOK/FETCH_COMMERCIAL_OFFERS_ERROR",
}

/**
* Book state
*/

export interface BookState {
  readonly books: IPayload<IBook>;
  readonly commercialOffers: IPayload<ICommercialOffer>;
}
