import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from "./styles"

const CategoryItem = ({title, image, onPress, isFirstItem}) => {
  return (
    // check if item index 0,  add marginLeft to push navbar left (we want scroll to edge otherwise)
    <Pressable onPress={onPress} style={[styles.container, isFirstItem ? { marginLeft: 16 } : {} ]}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <Text>{title}</Text>
    </Pressable>
  )
}

export default React.memo(CategoryItem)