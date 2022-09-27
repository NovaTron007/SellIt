import React, { useState } from 'react'
import { View, Text, ScrollView } from "react-native"
import AuthHeader from "../../../components/authHeader/AuthHeader"
import Input from "../../../components/input/Input"
import Checkbox from "../../../components/checkbox/Checkbox"
import styles from "./styles"
import Button from "../../../components/button/Button"
import Separator from "../../../components/Separator/Separator"
import GoogleButton from "../../../components/googleButton/GoogleButton"
import { SafeAreaView } from "react-native-safe-area-context"

const SignupScreen = ({navigation}) => {
  // checkbox state
  const [checked, setChecked] = useState(false)

  // sign in 
  const onSignIn = () => {
    console.log("onSignIn")
  }

  // go back
  const onBack = () => {
    navigation.goBack()
  }
  

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {/* header */}
        <AuthHeader title="Sign Up" onBackPress={onBack}></AuthHeader>
        {/* inputs */}
        <Input labelText="Name" placeholder="Joe Bloggs" />
        <Input labelText="E-mail" placeholder="example@gmail.com" />
        <Input labelText="Password" placeholder="********" isPassword={true} />
        <View style={styles.agreeContainer}>
          <Checkbox checked={checked} setChecked={setChecked} />
          <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextInner}>Terms & Privacy</Text></Text>
        </View>
        <Button title="Sign Up" style={styles.button} />

        <Separator title="Or sign up with" />

        <GoogleButton />

        <Text style={styles.footerText}>
          Already have an account? 
          <Text style={styles.footerLink} onPress={onSignIn}> Sign In</Text>
        </Text>

      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(SignupScreen)