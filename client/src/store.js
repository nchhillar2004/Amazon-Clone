import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";
import rootreducers from "./redux/reducers/main";
// Project by NISHANT CHHILLAR
const middleware = [thunk];

const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
