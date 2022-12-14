import React, {useContext, useState} from 'react'
import { Text, ScrollView, Alert } from "react-native"
import AuthHeader from "../../../components/authHeader/AuthHeader"
import Input from "../../../components/input/Input"
import styles from "./styles"
import Button from "../../../components/button/Button"
import Separator from "../../../components/Separator/Separator"
import GoogleButton from "../../../components/googleButton/GoogleButton"
import { SafeAreaView } from "react-native-safe-area-context"
import { login } from "../../../utils/api/apiService"
import { UserContext } from "../../../../App"



const SigninScreen = ({navigation}) => {

  // form values
  const [values, setValues] = useState({})

  // destructure value from UserContext
  const { setUser } = useContext(UserContext)

  // update form values by dynamic keys
  const onChangeSignUp = (key, value) => {
    // set values
    setValues((prev) => ({...prev, [key]: value}))
  }

  // go to signup
  const goSignUp = () => {
    navigation.navigate("Signup")
  }

  // go back
  const goBack = () => {
    navigation.goBack()
  }

  // signinOnPress
  const signInOnPress = async () => {
    try{
      // check fields:incomplete fields
      if(!values?.email || !values?.password) 
        return Alert.alert("Please complete all fields")
        // login api service
        const token = await login(values)
        // set user as obj
        setUser({token})
    } catch(err){
        console.log("(signInOnPress) error: ", err.message)
    }     
  }
  

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign In" onPressCb={goBack}></AuthHeader>
        {/* inputs: onChangeCb: has value, pass to handleInputOnChange */}
        <Input labelText="E-mail" placeholder="example@gmail.com" value={values.email} onChangeCb={(value) => onChangeSignUp("email", value)} />
        <Input labelText="Password" placeholder="********" isPassword={true} value={values.password} onChangeCb={(value) => onChangeSignUp("password", value)} />
        <Button title="Sign In" style={styles.button} onPressCb={signInOnPress} />

        <Separator title="Or sign up with" />

        <GoogleButton />

        <Text style={styles.footerText}>
          Don’t have an account?
          <Text style={styles.footerLink} onPress={goSignUp}> Sign Up</Text>
        </Text>

      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(SigninScreen)