import React from 'react'
import { View, Pressable, Image, Text } from 'react-native'
import styles from "./styles"

const FavouriteItem = ({title, price, image, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Image style={styles.image} source={{uri: image }} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Image source={require("../../assets/icons/close.png") } style={styles.icon} />
    </Pressable>
  )
}

export default React.memo(FavouriteItem)