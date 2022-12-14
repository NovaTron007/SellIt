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