import React from 'react'
import { Text, TouchableOpacity } from "react-native"
import styles from "./styles"

const Button = ({title, style}) => {
  const handlePress = () => {
    console.log("handlePress!")
  }

  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.container, style]} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button