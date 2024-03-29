import AsyncStorage from "@react-native-async-storage/async-storage"
import { requestUsingAxios } from "./axiosRequest"

// (async functions so use await when calling elsewhere)

// signup: function to pass obj to requestUsingAxios (async so use await when calling elsewhere)
export const signUp = async (values) => {
    // check form values
    try {
        // send data obj to axios
      const response = await requestUsingAxios({
        url:"/user/register",
        method: "POST",
        data: values
      })
      // destructure email, pass to login user
      if(response) {
        const { email, password } = values
        const loginResponse = await login({email, password})
        return loginResponse
      }
    } catch (err) {
      // error
      console.log("(apiService) signup error: ", err.message)
    }
  }

// login
export const login = async (values) => {
    try{
        // send data obj to axios
        const response = await requestUsingAxios({
            url: "/user/login",
            method: "POST",
            data: values
        })
        // response with token
        if(response?.data?.token) {
            console.log("(apiService) login success: ", response?.data?.token)
            // save to async storage (react native localStorage)
            await AsyncStorage.setItem("authToken", response?.data?.token)
            // return token to SignupScreen
            return response?.data?.token
        }
    }
    catch(err) {
        console.log("(apiService) error login: ", err.message)       
    }
}

// get profile: based on header.auth token
export const getProfile = async () => {
  try {
    // user token set from login and sent in headers.auth
    const response = await requestUsingAxios({
      url: "/user/profile",
      method: "GET"
    })
    // response obj with user details
    return response?.data
  } catch (err) {
    console.log("(api service) get profile err: ", err.message)
  }
}

// update profile
export const updateProfile = async (user) => {
  try {
    // send user obj
    const response = await requestUsingAxios({
      url: "/user/profile",
      method: "PATCH",
      data: user
    })
    // response with OK
    if(response) {
      // get profile using token set in axios.defaults.headers.Authorization
      const profile = await getProfile()
      return profile
    }

  } catch (err) {
    console.log("(apiService) update profile err: ", err.message)
  }
}