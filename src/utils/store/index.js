/* store.js */
import createStore from "redux-zero";

import commonState from "./commonState";

const initialState = commonState;

const store = createStore(initialState);

export default store;
