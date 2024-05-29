import { FETCH_DETAIL, FETCH_MENU, SET_LOADING_ALL_MENU, SET_LOADING_DETAIL } from "./actionType"

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
        type: FETCH_DETAIL,
        payload
    }
}

export const loadingDetail = (payload) => {
    return {
        type: SET_LOADING_DETAIL,
        payload
    }
}

export const loadingAllMenu = (payload) => {
    return {
        type: SET_LOADING_ALL_MENU,
        payload
    }
}

export const fetchMenuSucces = () => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl + "/menus", {
                mode: "cors",
                headers: {
                    access_token: localStorage.access_token
                }
            })
            if (res.ok) {
                const data = await res.json()
                const action = fetchMenu(data)
                dispatch(action)
            } else {
                console.log("Error fetching menus", error.status)
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(loadingAllMenu(false))
        }
    }
}

export const fetchMenuById = (id) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl + "/menus/" + id, {
                mode: "cors",
                headers: {
                    access_token: localStorage.access_token
                }
            })
            if (res.ok) {
                const data = await res.json()
                const action = fetchDetail(data)
                dispatch(action)
            } else {
                console.log("Error fetching menu by ID", res.status);
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(loadingDetail(false))
        }
    }
}

export const addMenu = (menuData) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl + "/menus", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token
                },
                body: JSON.stringify(menuData),
            });
            if (res.ok) {
                // console.log("success add menu")
            } else {
                console.log("Error adding menu", res.status)
            }
            return res
        } catch (error) {
            console.log(error)
            
        }
    }
}


export const updateMenu = (id, updatedMenu) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl + "/menus/" + id, {
                method: "PUT",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token
                },
                body: JSON.stringify(updatedMenu)
            })
            if (res.ok) {
                // console.log("Menu updated successfully")
                dispatch(fetchMenuSucces())
            } else {
                console.log("Error updating menu", res.status)
            }
            return res
        } catch (error) {
            console.log(error)
        }
    }
}

export const destroyMenu = (id) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl + "/menus/" + id, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    access_token: localStorage.access_token
                }
            })
            if (res.ok) {
                dispatch(fetchMenuSucces())
            } else {
                console.log("Error deleting menu", res.status)
            }
        } catch (error) {
            console.log(error)
        }
    }
}