import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, Image } from "react-native"
import styles from "./styles"

const Input = ({labelText, placeholder, isPassword, value, onChangeCb, style, ...props}) => {
  // set eye on password
  const [passwordHidden, setPasswordHidden] = useState(true)

  return (
    <View style={styles.container}>
        <Text style={styles.label}>{labelText}</Text>
        <View style={[styles.inputContainer, style]}>
            {/* if isPassword, hide text setPasswordHidden */}
            <TextInput
              style={styles.input} 
              placeholder={placeholder} 
              secureTextEntry={isPassword & passwordHidden ? true : false} 
              value={value} // controlled input
              onChangeText={onChangeCb} // use cb to set values
              {...props} // get any additional props not destructured in params
            />
            {/* if password show Pressable and state */}
            { isPassword ?
              <Pressable onPress={() => setPasswordHidden(!passwordHidden)}>
                <Image style={styles.eye} source={passwordHidden ? require("../../assets/icons/eye.png") : require("../../assets/icons/eye_closed.png")} />
              </Pressable>
              : null
            }
        </View>
    </View>
  )
}

export default React.memo(Input)