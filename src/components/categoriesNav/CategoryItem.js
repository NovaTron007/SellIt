import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from "./styles"

const CategoryItem = ({title, image, onPress}) => {
  
  return (
    <Pressable onPress={onPress} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <Text>{title}</Text>
    </Pressable>
  )
}

export default React.memo(CategoryItem)