import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Images from 'Store/Images'


const enhancer = composeWithDevTools(applyMiddleware(thunk));

const Reducers = combineReducers({
	Images
});

export default createStore(Reducers, enhancer);
