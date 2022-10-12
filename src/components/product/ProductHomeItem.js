import { Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from "./styles"

const ProductHomeItem = ({title, image, price, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container} >
      <Image style={styles.image} source={{uri: image}}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  )
}

export default ProductHomeItem