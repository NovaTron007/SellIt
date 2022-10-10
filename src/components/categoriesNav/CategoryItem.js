import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from "./styles"
import { colors } from "../../utils/colors"

const CategoryItem = ({title, image, onPress, isFirstItem, selectedCatId}) => {
  return (
    // check if item index 0,  add marginLeft to push navbar left (we want scroll to edge otherwise)
    <Pressable onPress={onPress} style={[ styles.container, isFirstItem ? { marginLeft: 16 } : {}]}>
        <View style={[styles.imageContainer,  selectedCatId ? { backgroundColor: colors.black } : {} ]}>
          <Image style={styles.image} source={image} />
        </View>
        <Text style={ [styles.title, selectedCatId ? {color: colors.blue, fontWeight: "700" } : {} ]} >{title}</Text>
    </Pressable>
  )
}

export default React.memo(CategoryItem)