import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import vocabulary from "./modules/vocabulary";

const rootReducer = combineReducers({ vocabulary });
const enhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, enhancer);

export default store;
