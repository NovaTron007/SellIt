import React from 'react'
import { Image, Pressable, Text, View } from "react-native"
import Button from "../../../components/button/Button"
import styles from "./styles"

const SplashScreen = ({navigation}) => {
  /* return [ component, component here separated with , ]array of elements for two children if not using View*/
  
  // go to sign screen
  const signIn = () => {
    navigation.navigate("Signin")
  }
  // got to sign up screen
  const signUp = () => {
    navigation.navigate("Signup")
  }


  return (
    /* resizeMode fit within screen borders */
    <View style={styles.container}>
      {/* banner */}
      <Image style={styles.image} resizeMode={"contain"} source={require("../../../assets/images/splash_image.png")} />
      {/* text */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sell everything,</Text>
        <Text style={styles.title}>right here!</Text>
        <Text style={[styles.title, styles.titleInner]}>Sell-it</Text>{/* array with multiple styles */}
      </View>
      {/* buttons: buttonContainer set to flex: row as button is set to flex: 1 */}
      <View style={styles.buttonContainer}>
        <Button title="Sign up" onPressCb={signUp} />
      </View>
      <Pressable hitStop={20} onPress={signIn}><Text style={styles.footerText}>Sign In</Text></Pressable>
    </View> 
  )
}

export default React.memo(SplashScreen)