// BooksApiService.ts

import BaseHttpApiService from "./BaseHttpApiService";

const API_BASE = `${process.env.REACT_APP_API_ENDPOINT}`;
const ENDPOINT = `/books`;

class BooksApi extends BaseHttpApiService {
  constructor() {
    super(`${API_BASE}`);
  }

  getBooks = () => {
    const response = super.get(`${ENDPOINT}`);

    return response;
  };

  /**
   *
   * @param ids ISBN separate by coma
   */
  commercialOffers = (ids: string) => {
    const response = super.get(`${ENDPOINT}/${ids}/commercialOffers`);

    return response;
  };
}

export const BooksApiService = new BooksApi();
