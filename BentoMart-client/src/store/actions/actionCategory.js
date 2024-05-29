import { FETCH_CATEGORY } from "./actionType"

export const fetchCategory = (payload) => {
    return {
        type: FETCH_CATEGORY,
        payload
    }
}

const baseUrl = "https://bentomart.shelamdp.xyz"
// const baseUrl = "http://localhost:3000"

export const fetchCategorySuccess = () => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseUrl + "/client/categories", {
                mode: "cors",
            })
            if(res.ok) {
                const data = await res.json()
                const action = fetchCategory(data)
                dispatch(action)
            } else {
                console.log("error fetching categories", res.status)
            }
        } catch (error) {
            console.log(error)
        }
    }
}