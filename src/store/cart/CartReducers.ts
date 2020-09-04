// store/cart/CartReducers.ts
import { Reducer } from "redux";
import { CartState, CartActionTypes } from "./CartTypes";
import { IBook } from "../book/BookTypes";

// Type-safe initialState!
export const initialState: CartState = {
  carts: {
    data: undefined,
    datas: [],
    loading: false,
    error: undefined,
  },
};

const reducer: Reducer<CartState> = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_CART_REQUEST: {
      const book = action.payload as IBook;
      const newItems = state.carts.datas;
      newItems?.push({
        id: book.isbn,
        item: book,
        quantity: 1,
      });
      return {
        ...state,
        carts: {
          loading: false,
          error: undefined,
          datas: newItems,
        },
      };
    }

    case CartActionTypes.ADD_CART_ERROR: {
      return {
        ...state,
        carts: {
          loading: false,
          datas: [],
          error: action.payload,
        },
      };
    }

    case CartActionTypes.REMOVE_CART_REQUEST: {
      let newItems = [...state.carts.datas!];
      if (newItems) {
        newItems = newItems.filter((x) => x.id !== action.payload.id);
      }

      return {
        ...state,
        carts: {
          loading: false,
          error: undefined,
          datas: newItems,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer as CartReducers };
