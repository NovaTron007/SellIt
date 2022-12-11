import React, { useEffect, useState } from "react"
import { View, Text, Image, Linking, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import Header from "../../components/header/Header"
import Button from "../../components/button/Button"
import ProfileSettingsItem from "../../components/ListItem/ProfileSettingsItem/ProfileSettingsItem"
import EditableInput from "../../components/editableInput/EditableInput"

const SettingsScreen = ({navigation}) => {
  // get userInfo from api
  const initialState = {
    name: "test",
    email: "test@test.com"
  }
  // personal info form values
  const [userValues, setUserValues] = useState({name: initialState.name, email: initialState.email})
  // show edit mode
  const [isEditing, setIsEditing] = useState(false)
  
  // help centre links: link to outside app
  const onPressItem = () => {
    Linking.openURL("https://www.google.com")
  }

  const logout = () => {
    console.log("log out")
  }

  // go back
  const goBack = () => {
    navigation.goBack()
  }

  // onChange update user
  const onChangeEditUser = (key, value) => (
    // get and opy prev value object, set new object value using dynamic keys
    setUserValues((prev) => ({...prev, [key]: value}))
  )

  // save to api
  const saveUser = () => {
    // FIX ME
    console.log("User updated!: ", userValues)
  }

  useEffect(() => {
    // if cancels editing revert to userInfo from api
   setUserValues({name: initialState.name, email: initialState.email})
  },[isEditing])



  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <Header title="Settings"showLogoutBtn showBackBtn onPressCb={goBack} onLogoutCb={logout} />
        
        <View style={styles.container}>
          <View style={styles.editHeader}>
            <Text style={styles.name}>Personal Information</Text>
            <Pressable onPress={() => setIsEditing(!isEditing)}>
              <Image source={require("../../assets/icons/edit.png")} style={styles.image} />
            </Pressable>
          </View>

          {/* personal info input field components */}
          <View style={styles.infoContainer}>
            <EditableInput title="Name" value={userValues.name} editable={isEditing} onChange={(value) => onChangeEditUser("name", value)} />
            <EditableInput title="Email" value={userValues.email} editable={isEditing} onChange={(value) => onChangeEditUser("email", value)} />
            { isEditing ? <Button title="Save" onPressCb={saveUser} style={styles.editButton} /> : null }
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.name}>Help Centre</Text>
            <ProfileSettingsItem title="FAQ" onPressCb={onPressItem} />
            <ProfileSettingsItem title="Contact Us" onPressCb={onPressItem} />
            <ProfileSettingsItem title="Privacy & Terms" onPressCb={onPressItem} />
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default React.memo(SettingsScreen)