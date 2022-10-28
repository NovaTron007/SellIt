import React from "react"
import { Pressable, View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import Header from "../../../components/header/Header"
import Button from "../../../components/button/Button"
import ProfileSettingsItem from "../../../components/ListItem/ProfileSettingsItem/ProfileSettingsItem"

const ProfileScreen = ({navigation}) => {
  const count = 10
  const logout = () => {
    console.log("log out")
  }

  // navigate to settings screen
  const onSettingsPress = () => {
    navigation.navigate("Settings")
    console.log("onSettingsPress")
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Header 
        title="Profile"
        showLogoutBtn
        onLogout={logout}
      />
      <View style={styles.container}>
        <Text style={styles.name}>Profile Screen</Text>
        <Text style={styles.email}>test@test.com</Text>
        <ProfileSettingsItem title="My Listings" content={`You have ${count} listings`} />
        <ProfileSettingsItem title="Settings" content="Account, FAQ, Contact" onPress={onSettingsPress} />
      </View>
      {/* buttons: buttonContainer set to flex: row as button is set to flex: 1 */}
      <Button title="Create Listing" style={styles.buttonContainer} />
    </SafeAreaView>

  )
}

export default React.memo(ProfileScreen)