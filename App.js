import React, { useEffect, useState } from 'react'
import { Image } from "react-native"
import SplashScreen from "./src/screens/auth/splash/SplashScreen"
import SignupScreen from "./src/screens/auth/signup/SignupScreen"
import SigninScreen from "./src/screens/auth/signin/SigninScreen"
import HomeScreen from "./src/screens/app/home/HomeScreen"
import FavouritesScreen from "./src/screens/app/favourites/FavouritesScreen"
import ProfileScreen from "./src/screens/app/profile/ProfileScreen"
import { GOOGLE_WEB_CLIENT_ID} from "@env"
// import statusCodes along with GoogleSignin
import { GoogleSignin } from "@react-native-google-signin/google-signin"
// react navigation
import { NavigationContainer } from "@react-navigation/native"
// stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from "./src/utils/colors";
// safe area provider to support notches
import { SafeAreaProvider } from "react-native-safe-area-context"
// react natigation bottom tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// wrap Stack.Screen with screen components
const Stack = createNativeStackNavigator()
// bottom tabs using Tab.Navigator
const Tab = createBottomTabNavigator()

// theme settings used in navigationContainer to match our app
const theme = {
  colors: {
    background: colors.white
  }
}

{/* create tabs for bottom tabs using Tab.Navigator */} 
const Tabs = () => (     
    // hide header using screenOptions and options in Stack.Screen, pass route info for active tab
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused ? require("./src/assets/icons/home-active.png") : require("./src/assets/icons/home.png")
        } 
        if(route.name === "Favourites") {
          icon = focused ? require("./src/assets/icons/marker-active.png") : require("./src/assets/icons/marker.png")
        }
        else if (route.name === 'Profile') {
          icon = focused ? require("./src/assets/icons/person-active.png") : require("./src/assets/icons/person.png")
        }
        // You can return any component that you like here!
        return <Image style={{ width: 24, height: 24 }} source={icon} />
      },
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: colors.lightGrey, backgroundColor: colors.white }
      })}
    >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Favourites" component={FavouritesScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
)

const App = () => {
  // showh bottom tabs
  const [loggedIn, setLoggedIn] = useState(true)

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: "1011764940087-ld2qc77iiabj79av1353ins6ln7mv53u.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  },[])



  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          { loggedIn ? <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} /> : 
            <>
              <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />{/* options prop of Stack.Screen: hide default header */} 
              <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};


export default App;
