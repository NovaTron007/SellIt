import React from "react"
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import Header from "../../../components/header/Header"
import Button from "../../../components/button/Button"
import ProfileSettingsItem from "../../../components/ListItem/ProfileSettingsItem/ProfileSettingsItem"

const SettingsScreen = () => {
  const name = "Your name"
  const email = "youremail@test.com"

  const logout = () => {
    console.log("log out")
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Header 
        title="Settings"
        showLogoutBtn
        onLogout={logout}
      />
      <View style={styles.container}>
        <View style={styles.editHeader}>
          <Text style={styles.name}>Help Centre</Text>
          <Image source={require("../../../assets/icons/edit.png")} style={styles.image} />
        </View>
        <ProfileSettingsItem title="FAQ" />
        <ProfileSettingsItem title="Contact Us" />
        <ProfileSettingsItem title="Privacy & Terms" />
      </View>
      {/* buttons: buttonContainer set to flex: row as button is set to flex: 1 */}
      <Button title="Create Listing" style={styles.buttonContainer} />
    </SafeAreaView>

  )
}

export default React.memo(SettingsScreen)