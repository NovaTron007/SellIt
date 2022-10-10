import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, Image } from "react-native"
import styles from "./styles"

const Input = ({labelText, placeholder, isPassword, value, onChange}) => {
  // set eye on password
  const [passwordHidden, setPasswordHidden] = useState(true)

  return (
    <View style={styles.container}>
        <Text style={styles.label}>{labelText}</Text>
        <View style={styles.inputContainer}>
            {/* if isPassword, hide text setPasswordHidden */}
            <TextInput
              style={styles.input} 
              placeholder={placeholder} 
              secureTextEntry={isPassword & passwordHidden ? true : false} 
              value={value} // controlled input
              onChangeText={onChange} // directly set controlled input like this
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