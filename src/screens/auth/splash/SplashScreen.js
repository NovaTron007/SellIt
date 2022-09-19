import React from 'react'
import { Image, Pressable, Text, View } from "react-native"
import Button from "../../../components/button/Button"
import styles from "./styles"

const SplashScreen = () => {
  /* return [ component, component here separated with , ]array of elements for two children if not using View*/
  return (
    /* resizeMode fit within screen borders */
    <View style={styles.container}>
      <Image style={styles.image} resizeMode={"contain"} source={require("../../../assets/splash_image.png")} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sell everything,</Text>
        <Text style={styles.title}>right here!</Text>
        <Text style={[styles.title, styles.titleInner]}>SellitT</Text>{/* array with multiple styles */}
      </View>
      {/* buttons */}
      <Button title="Sign up" />
      <Pressable hitStop={20}><Text style={styles.footerText}>Sign In</Text></Pressable>
    </View> 
  )
}

export default React.memo(SplashScreen)