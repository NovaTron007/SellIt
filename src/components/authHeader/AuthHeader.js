import React from 'react'
import { View, Pressable, Image, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"


const AuthHeader = ({title, onBackPress}) => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
          <Pressable hitStop={20} onPress={onBackPress}>
            <Image style={styles.image} source={require("../../assets/back-arrow.png")}></Image>
          </Pressable>
          <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  )
}

export default React.memo(AuthHeader)