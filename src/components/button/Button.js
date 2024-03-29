import React from 'react'
import { Text, TouchableOpacity } from "react-native"
import styles from "./styles"

const Button = ({title, style, onPressCb}) => {
  // console.log("inside button") // react memo stop checkbox re-loading button
  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.container, style]} onPress={onPressCb} >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default React.memo(Button)