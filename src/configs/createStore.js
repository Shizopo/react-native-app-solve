// @flow

import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export { store };
