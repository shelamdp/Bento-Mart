import { FETCH_LIMIT, FETCH_MENU, FETCH_MENU_BYID, SET_LOADING_ALL_MENU, SET_LOADING_DETAIL, SET_LOADING_MENU_LIMIT } from "./actionType";

const baseUrl = "https://bentomart.shelamdp.xyz"
// const baseUrl = "http://localhost:3000"

export const fetchMenu = (payload) => {
    return {
        type: FETCH_MENU,
        payload
    }
}

export const fetchDetail = (payload) => {
    return {
        type: FETCH_MENU_BYID,
        payload
    }
}

export const fetchLimit = (payload) => {
    return {
        type: FETCH_LIMIT,
        payload
    }
}

export const setLoading = (payload) => ({
    type: SET_LOADING_ALL_MENU,
    payload
})

export const setLoadingDetail = (payload) => ({
    type: SET_LOADING_DETAIL,
    payload
})

export const setLoadingLimit= (payload) => ({
    type: SET_LOADING_MENU_LIMIT,
    payload
})



export const fetchMenuSucces = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoading(true));
            const res = await fetch(baseUrl +  "/client/menus", {
                mode: "cors",
            })
            if (res.ok) {
                const data = await res.json()
                const action = fetchMenu(data)
                dispatch(action)
            } else {
                console.log("error fetching menu", res.status)
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoading(false));
        }
    }
}

export const fetchLimitSuccess = () => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl +  "/client/menus?limit=5", {
                mode: "cors",

            })
            if (res.ok) {
                const data = await res.json()
                const action = fetchLimit(data)
                dispatch(action)
            } else {
                console.log("error fetching menu", res.status)
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoadingLimit(false))
        }
    }
}

export const fetchMenuById = (id) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl +  "/client/menus/" + id, {
                mode: "cors",
            })
            if (res.ok) {
                const data = await res.json()
                const action = fetchDetail(data)
                dispatch(action)
            } else {
                console.log("error fetching menu by id", res.status)
                throw new Error("Failed to fetch menu by id")
            }
        } catch (error) {
            throw error
        } finally {
            dispatch(setLoadingDetail(false))
        }
    }
}