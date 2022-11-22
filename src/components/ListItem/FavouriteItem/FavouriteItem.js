import React from 'react'
import { View, Pressable, Image, Text } from 'react-native'
import styles from "./styles"

const FavouriteItem = ({title, price, image, icon, onPressCb}) => {

  const removeItem = () => {
    console.log("remove item!")
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.content} onPress={onPressCb}>
          <Image style={styles.image} source={{uri: image }} />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
      </Pressable>
      <Pressable onPress={removeItem} style={styles.iconContainer}>
        <Image source={icon ? require("../../../assets/icons/close.png") : icon } style={styles.icon} />
      </Pressable>
    </View>
  )
}

export default React.memo(FavouriteItem)