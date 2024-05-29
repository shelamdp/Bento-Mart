import { FETCH_CATEGORY, FETCH_CATEGORY_DETAIL, SET_LOADING_ALL_CATEGORY, SET_LOADING_CATEGORY_DETAIL } from "./actionType"

const baseUrl = "https://bentomart.shelamdp.xyz"
// const baseUrl = "http://localhost:3000"

export const fetchCategory = (payload) => {
    return {
        type: FETCH_CATEGORY,
        payload
    }
}

export const fetchDetailCategory = (payload) => {
    return {
        type: FETCH_CATEGORY_DETAIL,
        payload
    }
}

export const setLoadingDetail = (payload) => {
    return {
        type: SET_LOADING_CATEGORY_DETAIL,
        payload
    }
}

export const setLoadingAll = (payload) => {
    return {
        type: SET_LOADING_ALL_CATEGORY,
        payload
    }
}

export const fetchCategorySuccess = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoadingAll(true))
            const res = await fetch(baseUrl + "/categories", {
                mode: "cors",
                headers: {
                    access_token: localStorage.access_token
                }
            });
            if (res.ok) {
                const data = await res.json();
                const action = fetchCategory(data)
                dispatch(action)
            } else {
                console.log("Error fetching categories", res.status);
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoadingAll(false))
        }
    }
}


export const fetchCategoryById = (id) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl + "/categories/" + id, {
                mode: "cors",
                headers: {
                    access_token: localStorage.access_token
                }
            })
            if (res.ok) {
                const data = await res.json()
                const action = fetchDetailCategory(data)
                dispatch(action)
            } else {
                console.log("Error at fetch category by id", res.status)
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoadingDetail(false))
        }
    }
}

export const editCategory = (id, updatedCategory) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl + "/categories/" + id, {
                method: "PUT",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token
                },
                body: JSON.stringify(updatedCategory),
            })
            if (res.ok) {
                // console.log("succes edit category")
                dispatch(fetchCategorySuccess())
            } else {
                console.log("error edit category", res.status)
            }
            return res.json
        } catch (error) {
            console.log(error)
        }
    }
}

export const addCategory = (dataCategory) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl + "/categories", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token
                },
                body: JSON.stringify(dataCategory)
            })
            if (res.ok) {
                // console.log("success at post category")
            } else {
                console.log("Error at post category", res.status)
            }
            return res
        } catch (error) {
            console.log(error)
        }
    }
}

export const destroyCategory = (id) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl + `/categories/${id}`, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    access_token: localStorage.access_token
                }
            })
            if (res.ok) {
                dispatch(fetchCategorySuccess())
            } else {
                console.log("Error deleting category", res.status)
            }
        } catch (error) {
            console.log(error)
        }
    }
}