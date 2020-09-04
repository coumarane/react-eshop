// store/index.ts
import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { History } from "history";
import { BookState } from "./book/BookTypes";
import { BookReducers } from "./book/BookReducers";
import BookSagas from "./book/BookSagas";
import { CartState } from "./cart/CartTypes";
import { CartReducers } from "./cart/CartReducers";

// The top-level state object
export interface IApplicationState {
  bookState: BookState;
  cartState: CartState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducers = (history: History, state?: IApplicationState) =>
  combineReducers<IApplicationState>({
    bookState: BookReducers,
    cartState: CartReducers,
  });

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSagas() {
  yield all([fork(BookSagas)]);
}
