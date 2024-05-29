import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";
import logger from "./middlewares/logging";
import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store