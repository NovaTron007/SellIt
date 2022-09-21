import React, { useState } from 'react'
import { Text, ScrollView } from "react-native"
import AuthHeader from "../../../components/authHeader/AuthHeader"
import Input from "../../../components/input/Input"
import styles from "./styles"
import Button from "../../../components/button/Button"
import Separator from "../../../components/Separator/Separator"
import GoogleButton from "../../../components/googleButton/GoogleButton"

const SigninScreen = () => {
  console.log("SigninScreen")

  const onSignIn = () => {
    console.log("onSignIn")
  }
  
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In"></AuthHeader>
      <Input labelText="E-mail" placeholder="example@gmail.com" />
      <Input labelText="Password" placeholder="********" isPassword={true} />
      <Button title="Sign In" style={styles.button} />

      <Separator title="Or sign up with" />

      <GoogleButton />

      <Text style={styles.footerText}>
        Don’t have an account?
        <Text style={styles.footerLink} onPress={onSignIn}> Sign Up</Text>
      </Text>

    </ScrollView>
  )
}

export default React.memo(SigninScreen)