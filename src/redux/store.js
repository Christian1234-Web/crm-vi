import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";
import reducers from "./reducers";
const initialState = {};
const enhancers = [];
const middleware = [
  thunk
];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
export const rootReducer = combineReducers({
    ...reducers
});
const store = createStore(rootReducer, initialState, composedEnhancers);
export default store;