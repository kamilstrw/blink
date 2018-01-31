import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";



const enhancer = composeWithDevTools(applyMiddleware(thunk));

const Reducers = combineReducers({
});

export default createStore(Reducers, enhancer);
