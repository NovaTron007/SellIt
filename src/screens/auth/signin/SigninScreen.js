import React from 'react'
import { Text, ScrollView } from "react-native"
import AuthHeader from "../../../components/authHeader/AuthHeader"
import Input from "../../../components/input/Input"
import styles from "./styles"
import Button from "../../../components/button/Button"
import Separator from "../../../components/Separator/Separator"
import GoogleButton from "../../../components/googleButton/GoogleButton"
import { SafeAreaView } from "react-native-safe-area-context"

const SigninScreen = ({navigation}) => {
  console.log("SigninScreen")

  // sign in
  const signIn = () => {
    console.log("signIn")
  }

  // sign up
  const signUp = () => {
    console.log("signUp")
  }  

  // go back
  const goBack = () => {
    navigation.goBack()
  }
  

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign In" onPressCb={goBack}></AuthHeader>
        <Input labelText="E-mail" placeholder="example@gmail.com" />
        <Input labelText="Password" placeholder="********" isPassword={true} />
        <Button title="Sign In" style={styles.button} onPressCb={signIn} />

        <Separator title="Or sign up with" />

        <GoogleButton />

        <Text style={styles.footerText}>
          Don’t have an account?
          <Text style={styles.footerLink} onPress={signUp}> Sign Up</Text>
        </Text>

      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(SigninScreen)