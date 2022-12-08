import React, { useState } from 'react'
import { View, Text, ScrollView, Alert } from "react-native"
import AuthHeader from "../../../components/authHeader/AuthHeader"
import Input from "../../../components/input/Input"
import Checkbox from "../../../components/checkbox/Checkbox"
import styles from "./styles"
import Button from "../../../components/button/Button"
import Separator from "../../../components/Separator/Separator"
import GoogleButton from "../../../components/googleButton/GoogleButton"
import { SafeAreaView } from "react-native-safe-area-context"
// api call
import { requestUsingAxios } from "../../../utils/request"

const SignupScreen = ({ navigation }) => {
  // checkbox state
  const [checked, setChecked] = useState(false)
  // input fields
  const [values, setValues] = useState({})

  // sign in function
  const signIn = () => {
    console.log("SignIn")
  }

  // form values
  const onChangeSignUp = (key, value) => {
    // set values
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  // on sign up
  const signUp = async () => {
    // check form values
    try {
      if (!values?.fullName || !values?.email || !values?.password || !values?.confirmPassword)
        // native popups
        return Alert.alert("Please complete all fields")
      if (values?.password !== values?.confirmPassword)
        return Alert.alert("Passwords do not match")
      if (!checked)
        return Alert.alert("Please agree Terms and Privacy")
      
      console.log("value: ", values)
      // send data obj to api
      const response = await requestUsingAxios({
        url:"/user/register",
        method: "POST",
        data: values
      })
      // success
      console.log("signUp success: ", response)
    } catch (err) {
      // error
      console.log("signup error: ", err.message)
    }
  }

  // go back
  const onBack = () => {
    navigation.goBack()
  }


  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {/* header */}
        <AuthHeader title="Sign Up" goBackCb={onBack}></AuthHeader>
        {/* inputs: onChangeCb: has value, pass to handleInputOnChange */}
        <Input labelText="Full name" value={values.fullName} placeholder="Joe Bloggs" onChangeCb={(value) => onChangeSignUp("fullName", value)} />
        <Input labelText="E-mail" value={values.email} placeholder="example@gmail.com" onChangeCb={(value) => onChangeSignUp("email", value)} />
        <Input labelText="Password" value={values.password} placeholder="********" isPassword={true} onChangeCb={(value) => onChangeSignUp("password", value)} />
        <Input labelText="Confirm Password" value={values.confirmPassword} placeholder="********" isPassword={true} onChangeCb={(value) => onChangeSignUp("confirmPassword", value)} />
        <View style={styles.agreeContainer}>
          <Checkbox checked={checked} setChecked={setChecked} />
          <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextInner}>Terms & Privacy</Text></Text>
        </View>
        <Button title="Sign Up" style={styles.button} onPressCb={signUp} />

        <Separator title="Or sign up with" />

        <GoogleButton />

        <Text style={styles.footerText}>
          Already have an account?
          <Text style={styles.footerLink} onPress={signIn}> Sign In</Text>
        </Text>

      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(SignupScreen)