import axios from "axios"
import { BASE_URL} from "@env"

export const requestUsingAxios = ({url, method, data}) => { // pass obj instead of individual params (avoid typing null when no args etc.)
    console.log(`requestUsingAxios: ${BASE_URL}${url}`)
    return axios({
        method: method || "GET",
        url:`${BASE_URL}${url}`,
        data
    })
}

// add token to every request in headers.auth
export const addTokenToAxios = (token) => {
    console.log("token: ", token)
    axios.defaults.headers.Authorization = token
}