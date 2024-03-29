import React from 'react'
import { View, Pressable, Image, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"


const AuthHeader = ({title, goBackCb}) => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
          <Pressable hitStop={20} onPress={goBackCb}>
            <Image style={styles.image} source={require("../../assets/icons/back-arrow.png")}></Image>
          </Pressable>
          <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  )
}

export default React.memo(AuthHeader)