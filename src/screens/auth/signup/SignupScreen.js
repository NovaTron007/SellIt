import React, { useState } from 'react'
import { View, Text } from "react-native"
import AuthHeader from "../../../components/authHeader/AuthHeader"
import Input from "../../../components/input/Input"
import Checkbox from "../../../components/checkbox/Checkbox"
import styles from "./styles"
import Button from "../../../components/button/Button"
import Separator from "../../../components/Separator/Separator"

const SignupScreen = () => {
  const [checked, setChecked] = useState(false)
  
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up"></AuthHeader>
      <Input labelText="Name" placeholder="Joe Bloggs" />
      <Input labelText="E-mail" placeholder="example@gmail.com" />
      <Input labelText="Password" placeholder="********" isPassword={true} />
      <View style={styles.agreeContainer}>
        <Checkbox checked={checked} setChecked={setChecked} />
        <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextInner}>Terms & Privacy</Text></Text>
      </View>
      <Button title="Sign Up" style={styles.button} />

      <Separator title="Or sign up with" />

    </View>
  )
}

export default SignupScreen