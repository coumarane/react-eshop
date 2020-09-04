// store/book/BookReducers.ts
import { Reducer } from "redux";

import {
  BookState,
  BookActionTypes,
  IBook,
  ICommercialOffer,
} from "./BookTypes";

// Type-safe initialState!
export const initialState: BookState = {
  books: {
    data: undefined,
    datas: [],
    error: undefined,
    loading: false,
  },

  commercialOffers: {
    data: undefined,
    datas: [],
    error: undefined,
    loading: false,
  },
};

const reducer: Reducer<BookState> = (state = initialState, action) => {
  switch (action.type) {
    case BookActionTypes.FETCH_ALL_REQUEST: {
      return {
        ...state,
        books: { loading: true, datas: [], error: undefined },
      };
    }

    case BookActionTypes.FETCH_ALL_SUCCESS: {
      return {
        ...state,
        books: { loading: false, datas: action.payload as IBook[] },
      };
    }

    case BookActionTypes.FETCH_ALL_ERROR: {
      return {
        ...state,
        books: {
          loading: false,
          datas: [],
          error: action.payload,
        },
      };
    }

    case BookActionTypes.FETCH_SEARCH_REQUEST: {
      return {
        ...state,
        books: { loading: true, datas: [], error: undefined },
      };
    }

    case BookActionTypes.FETCH_SEARCH_SUCCESS: {
      return {
        ...state,
        books: { loading: false, datas: action.payload as IBook[] },
      };
    }

    case BookActionTypes.FETCH_SEARCH_ERROR: {
      return {
        ...state,
        books: {
          loading: false,
          datas: [],
          error: action.payload,
        },
      };
    }

    case BookActionTypes.FETCH_COMMERCIAL_OFFERS_REQUEST: {
      return {
        ...state,
        commercialOffers: { loading: true, datas: [], error: undefined },
      };
    }

    case BookActionTypes.FETCH_COMMERCIAL_OFFERS_SUCCESS: {
      return {
        ...state,
        commercialOffers: {
          loading: false,
          datas: action.payload as ICommercialOffer[],
        },
      };
    }

    case BookActionTypes.FETCH_COMMERCIAL_OFFERS_ERROR: {
      return {
        ...state,
        commercialOffers: {
          loading: false,
          datas: [],
          error: action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer as BookReducers };
