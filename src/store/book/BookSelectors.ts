// store/book/BookSelectors.ts
import { IApplicationState } from "..";
import { ICommercialOffer } from "./BookTypes";

export const getBookCountSelector = (state: IApplicationState) => {
  const { books } = state.bookState;
  let count = 0;
  if (books.datas && books.datas.length > 0) {
    count = books.datas.length;
  }
  return count;
};

export const getCommercialOffersSelector = (state: IApplicationState) => {
  const { commercialOffers } = state.bookState;
  let offers: ICommercialOffer[] = [];
  if (commercialOffers.datas && commercialOffers.datas.length > 0) {
    offers = commercialOffers.datas;
  }
  return offers;
};
