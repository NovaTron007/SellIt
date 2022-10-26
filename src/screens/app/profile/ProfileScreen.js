import React from "react"
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import Header from "../../../components/header/Header"

const ProfileScreen = () => {

  const logout = () => {
    console.log("log out")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Profile"
        showLogoutBtn
        onLogout={logout}
      />
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    </SafeAreaView>

  )
}

export default React.memo(ProfileScreen)