import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

// thunk allow us to work promise based actions

const store = createStore(rootReducers, {}, applyMiddleware(thunk));

export default store;
