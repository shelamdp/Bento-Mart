import { FETCH_CATEGORY, FETCH_CATEGORY_DETAIL, SET_LOADING_ALL_CATEGORY, SET_LOADING_CATEGORY_DETAIL } from "../actions/actionType";

const initialState = { category: [], detail: {}, loadingDetail: true, isLoadingAll: true }

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    case FETCH_CATEGORY_DETAIL:
      return {
        ...state,
        detail: action.payload
      }
    case SET_LOADING_CATEGORY_DETAIL:
      return {
        ...state,
        loadingDetail: action.payload
      }
    case SET_LOADING_ALL_CATEGORY:
      return {
        ...state,
        isLoadingAll: action.payload
      }
    default: {
      return state
    }
  }
}

export default categoryReducer