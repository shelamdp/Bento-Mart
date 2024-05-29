import {combineReducers} from "redux"

import categoryReducer from "./categoryReducer"
import menuReducer from "./menuReducer"

const rootReducer = combineReducers({
    menu: menuReducer,
    category: categoryReducer
})

export default rootReducer