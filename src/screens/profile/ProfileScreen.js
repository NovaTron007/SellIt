import React from "react"
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import Header from "../../components/header/Header"
import Button from "../../components/button/Button"
import ProfileSettingsItem from "../../components/ListItem/ProfileSettingsItem/ProfileSettingsItem"

const ProfileScreen = ({navigation}) => {
  const count = 10
  
  const logout = () => {
    console.log("log out")
  }

  // go back
  const goBack = () => {
    navigation.goBack()
  }

  // navigate to settings screen
  const settingsItemPress = () => {
    navigation.navigate("Settings") // name in Stack.Navigator, Stack.Screen
  }

  // navigate to my listings screen
  const myListingsOnPress = () => {
    navigation.navigate("MyListings") // name in Stack.Navigator, Stack.Screen
  }

  // create listing link
  const createListing = () => {
    navigation.navigate("CreateListing")
  }
  

  return (
    <SafeAreaView style={styles.safe}>
      <Header 
        title="Profile"
        showLogoutBtn
        showBackBtn
        onPressCb={goBack}
        onLogoutCb={logout}
      />
      <View style={styles.container}>
        <Text style={styles.name}>Profile Screen</Text>
        <Text style={styles.email}>test@test.com</Text>
        <ProfileSettingsItem title="My Listings" content={`You have ${count} listings`} onPressCb={myListingsOnPress} />
        <ProfileSettingsItem title="Settings" content="Account, FAQ, Contact" onPressCb={settingsItemPress} />
      </View>
      {/* buttons: buttonContainer set to flex: row as button is set to flex: 1 */}
      <Button title="Create Listing" style={styles.buttonContainer} onPressCb={createListing} />
    </SafeAreaView>

  )
}

export default React.memo(ProfileScreen)