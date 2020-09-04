// store/configureStore.ts
import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { History } from "history";
import { IApplicationState, rootReducers, rootSagas } from ".";
import { fetchBooksRequest } from "./book/BookActions";

export default function configureStore(
  history: History,
  initialState?: IApplicationState
): Store<IApplicationState> {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducers(history),
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSagas);

  store.dispatch(fetchBooksRequest());

  return store;
}
