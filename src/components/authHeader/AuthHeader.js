import React from 'react'
import { View, Pressable, Image, Text } from "react-native"
import styles from "./styles"

const AuthHeader = ({title}) => {
  const handleOnPress = () => {
    console.log("handleBackPress")
  }

  return (
    <View style={styles.container}>
        <Pressable hitStop={20} onPress={handleOnPress}>
          <Image style={styles.image} source={require("../../assets/back-arrow.png")}></Image>
        </Pressable>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default React.memo(AuthHeader)