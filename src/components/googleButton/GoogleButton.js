import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from "./styles"

// import statusCodes along with GoogleSignin
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin"

const GoogleButton = () => {
    // google sign in
    const handleGoogleSignin = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("userInfo: ", userInfo)
        // this.setState({ userInfo });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
          console.log("error: ", error)
          console.log("error: ", error.code)
          console.log("Google signin error")
        }
      }
    };


  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={handleGoogleSignin}>
      <Image source={require("../../assets/google-signin.png")} style={styles.image}></Image>
    </TouchableOpacity>
  )
}

export default GoogleButton