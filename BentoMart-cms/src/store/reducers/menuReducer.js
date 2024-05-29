import { FETCH_DETAIL, FETCH_MENU, SET_LOADING_ALL_MENU, SET_LOADING_DETAIL } from "../actions/actionType";

const initialState = {menu:[], detail: {}, loadingDetail: true, loadingAllMenu: true}

function menuReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MENU: 
        return {
            ...state,
            menu: action.payload
        }
        case  FETCH_DETAIL: 
        return {
            ...state,
            detail: action.payload
        }
        case  SET_LOADING_DETAIL: 
        return {
            ...state,
            loadingDetail: action.payload
        }
        case  SET_LOADING_ALL_MENU: 
        return {
            ...state,
            loadingAllMenu: action.payload
        }
        default: {
            return state
        }

    }
  }

  export default menuReducer