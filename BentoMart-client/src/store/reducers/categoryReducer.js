import { FETCH_CATEGORY } from "../actions/actionType";

const initialState = {category: []}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default: {
            return state
        }
    }
}

export default categoryReducer