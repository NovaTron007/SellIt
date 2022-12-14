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

// get profile
export const getProfile = async (values) => {
  try {
    // send data obj to axios, pass user token set from login
    const response = await requestUsingAxios({
      url: "/user/profile",
      method: "GET",
      data: values,
    })
    // response obj with user details
    return response?.data
  } catch (err) {
    console.log("(api service) get profile err: ", err.message)
  }
}