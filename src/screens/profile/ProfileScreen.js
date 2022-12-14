import React, { useEffect, useContext } from "react"
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import Header from "../../components/header/Header"
import Button from "../../components/button/Button"
import ProfileSettingsItem from "../../components/ListItem/ProfileSettingsItem/ProfileSettingsItem"
import { getProfile } from "../../utils/api/apiService"
import { ProfileContext } from "../../../App" // get global profile context

const ProfileScreen = ({navigation}) => {
  // get global state from context
  const { profile, setProfile } = useContext(ProfileContext)

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

  // get profile: call getProfile service onMount
  useEffect(() => {
    // IIFE 
    (async () => {
      const getProfileResponse = await getProfile() // token set in user (login) sent in headers request (in axiosRequest)
      if(getProfileResponse) {
        setProfile(getProfileResponse) // response is object
      }
    })()
  }, [])
  
  

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
        <Text style={styles.name}>{profile?.fullName}</Text>
        <Text style={styles.email}>{profile?.email}</Text>
        <ProfileSettingsItem title="My Listings" content={`You have ${count} listings`} onPressCb={myListingsOnPress} />
        <ProfileSettingsItem title="Settings" content="Account, FAQ, Contact" onPressCb={settingsItemPress} />
      </View>
      {/* buttons: buttonContainer set to flex: row as button is set to flex: 1 */}
      <Button title="Create Listing" style={styles.buttonContainer} onPressCb={createListing} />
    </SafeAreaView>

  )
}

export default React.memo(ProfileScreen)