import { requestUsingAxios } from "./axiosRequest"


// signup function to pass obj to requestUsingAxios 
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
      console.log("signup error: ", err.message)
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
            console.log("login success: ", response?.data?.token)
            return response?.data?.token
        }
    }
    catch(err) {
        console.log("error during login: ", err.message)       
    }
}