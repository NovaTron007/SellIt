import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, Image } from "react-native"
import styles from "./styles"

const Input = ({labelText, placeholder, isPassword}) => {
  // set eye on password
  const [passwordHidden, setPasswordHidden] = useState(true)

  return (
    <View style={styles.container}>
        <Text style={styles.label}>{labelText}</Text>
        <View style={styles.inputContainer}>
            {/* if isPassword, hide text setPasswordHidden */}
            <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={isPassword & passwordHidden ? true : false} />
            {/* if password show Pressable and state */}
            { isPassword ?
              <Pressable onPress={() => setPasswordHidden(!passwordHidden)}>
                <Image style={styles.eye} source={passwordHidden ? require("../../assets/eye.png") : require("../../assets/eye_closed.png")} />
              </Pressable>
              : null
            }
        </View>
    </View>
  )
}

export default React.memo(Input)