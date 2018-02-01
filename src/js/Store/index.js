import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import user from './User'

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const Reducers = combineReducers({
	user
});

export default createStore(Reducers, enhancer);
