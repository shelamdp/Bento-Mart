import { FETCH_LIMIT, FETCH_MENU, FETCH_MENU_BYID, SET_LOADING_ALL_MENU, SET_LOADING_DETAIL, SET_LOADING_MENU_LIMIT } from "../actions/actionType";

const initialState = {menu: [], detail: {}, limit:[], isLoadingAllMenu: true, isLoadingDetail: true, isLoadingLimit: true}

function menuReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MENU:
            return {
                ...state,
                menu: action.payload
            }
        case FETCH_MENU_BYID: 
        return {
            ...state,
            detail: action.payload
        }
        case FETCH_LIMIT: 
        return {
            ...state,
            limit: action.payload
        }
        case SET_LOADING_ALL_MENU: 
        return {
            ...state,
            isLoadingAllMenu: action.payload
        }
        case SET_LOADING_DETAIL: 
        return {
            ...state,
            isLoadingDetail: action.payload
        }
        case SET_LOADING_MENU_LIMIT: 
        return {
            ...state,
            isLoadingLimit: action.payload
        }
        default: {
            return state
        }
    }
}

export default menuReducer