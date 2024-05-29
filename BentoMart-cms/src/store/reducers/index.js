import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers ({
    category: categoryReducer,
    menu: menuReducer
})

export default rootReducer