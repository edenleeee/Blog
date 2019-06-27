
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import reducer from "./reducer";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, applyMiddleware(thunk,logger));
  return store;
}