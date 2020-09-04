// store/book/BookSagas.ts
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { BooksApiService } from "../../api/BooksApiService";
import { BookActionTypes, IBook, ICommercialOffer } from "./BookTypes";
import {
  fetchBooksSuccess,
  fetchBooksError,
  fetchCommercialOffersSuccess,
  fetchCommercialOffersError,
  searchBooksSuccess,
  searchBooksError,
} from "./BookActions";

/**
 * Get books
 */
function* handleFetchAll(action: any) {
  try {
    const response = yield call(BooksApiService.getBooks);

    yield put(fetchBooksSuccess(response.data as IBook[]));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchBooksError(err.stack));
    } else {
      yield put(fetchBooksError("An unknown error occured."));
    }
  }
}

function* watchFetchAllRequest() {
  yield takeLatest(BookActionTypes.FETCH_ALL_REQUEST, handleFetchAll);
}

/**
 * Get books by serach
 */
function* handleFetchSearch(action: any) {
  try {
    const response = yield call(BooksApiService.getBooks);

    const datas: IBook[] = [];

    const search = action.payload.toLowerCase();

    (response.data as IBook[]).forEach((x) => {
      if (
        x.title.toLowerCase().includes(search) ||
        x.isbn.toLowerCase().includes(search)
      ) {
        datas.push(x);
      }
    });

    yield put(searchBooksSuccess(datas));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(searchBooksError(err.stack));
    } else {
      yield put(searchBooksError("An unknown error occured."));
    }
  }
}

function* watchFetchSearchRequest() {
  yield takeLatest(BookActionTypes.FETCH_SEARCH_REQUEST, handleFetchSearch);
}

/**
 * Get commercial offers
 */
function* handleFetchCommercialOffers(action: any) {
  try {
    const response = yield call(
      BooksApiService.commercialOffers,

      action.payload
    );

    yield put(
      fetchCommercialOffersSuccess(response.data.offers as ICommercialOffer[])
    );
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchCommercialOffersError(err.stack));
    } else {
      yield put(fetchCommercialOffersError("An unknown error occured."));
    }
  }
}

function* watchFetchCommercialOffersRequest() {
  yield takeLatest(
    BookActionTypes.FETCH_COMMERCIAL_OFFERS_REQUEST,
    handleFetchCommercialOffers
  );
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* BookSagas() {
  yield all([
    fork(watchFetchAllRequest),
    fork(watchFetchCommercialOffersRequest),
    fork(watchFetchSearchRequest),
  ]);
}

export default BookSagas;
