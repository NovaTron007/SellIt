import React from 'react'
import { Text, TouchableOpacity } from "react-native"
import styles from "./styles"

const Button = ({title, style}) => {
  // console.log("inside button") // react memo stop checkbox re-loading button
  const handleOnPress = () => {
    console.log("handlePress!")
  }

  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.container, style]} onPress={handleOnPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default React.memo(Button)