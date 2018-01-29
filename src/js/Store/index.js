import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";




const enhancer = applyMiddleware(thunk);

const Reducers = combineReducers({
	reducer
});

export default createStore(Reducers, enhancer);
