// flow

import { combineReducers } from "redux";
import { creditCardReducer } from "../reducers/creditCardReducer";

export const rootReducer = combineReducers({
  creditCardReducer,
});
