import React from 'react'
import { View, Text } from "react-native"
import styles from "./styles"

const Separator = ({title}) => {
  return (
    <View style={styles.container}>
        <View style={styles.line}></View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.line}></View>
    </View>
  )
}

export default Separator
