
// get global UserContext using useContext
import React, { useContext, useEffect } from "react" 
import { Image } from "react-native"
// react navigation container
import { NavigationContainer } from "@react-navigation/native"
// react navigation stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// react navigation bottom tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// colors file
import { colors } from "./utils/colors"
// screens
import HomeScreen from "./screens/home/HomeScreen"
import FavouritesScreen from "./screens/favourites/FavouritesScreen"
import ProfileScreen from "./screens/profile/ProfileScreen"
import SplashScreen from "./screens/auth/splash/SplashScreen"
import SignupScreen from "./screens/auth/signup/SignupScreen"
import SigninScreen from "./screens/auth/signin/SigninScreen"
import ProductDetailsScreen from "./screens/productDetails/ProductDetailsScreen"
import SettingsScreen from "./screens/settings/SettingsScreen"
import CreateListingScreen from "./screens/createListing/CreateListingScreen"
import MyListingsScreen from "./screens/myListings/MyListingsScreen"
import { UserContext } from "../App"
import AsyncStorage from "@react-native-async-storage/async-storage"


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

// nested routes inside tab navigator
const ProfileScreenStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CreateListing" component={CreateListingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MyListings" component={MyListingsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

{/* create tabs for bottom tabs using Tab.Navigator */ }
const Tabs = () => (
    // hide header using screenOptions and options in Stack.Screen, pass route info for active tab
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name === 'Home') {
                icon = focused ? require("./assets/icons/home-active.png") : require("./assets/icons/home.png")
            }
            if (route.name === "Favourites") {
                icon = focused ? require("./assets/icons/marker-active.png") : require("./assets/icons/marker.png")
            }
            else if (route.name === "ProfileScreenStack") {
                icon = focused ? require("./assets/icons/person-active.png") : require("./assets/icons/person.png")
            }
            // You can return any component that you like here!
            return <Image style={{ width: 24, height: 24 }} source={icon} />
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: colors.lightGrey, backgroundColor: colors.white }
    })}
    >

        {/* routes for using tabs */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
        <Tab.Screen name="ProfileScreenStack" component={ProfileScreenStack} />
    </Tab.Navigator>
)



const Routes = () => {
    // get global UserContext
    const {user, setUser } = useContext(UserContext)

    // setUser from storage on mount
    useEffect(() => {
        // IIFE 
        (async () => {
            const tokenInStorage = await AsyncStorage.getItem("authToken")
            // const resetToken = await AsyncStorage.setItem("authToken", "")
            console.log("tokenInStorage: ", tokenInStorage)
            setUser(tokenInStorage)
        })()
    }, [])
    


    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ headerShown: false }} />
                    </>
                )
                    :
                    (
                        <>
                            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />{/* options prop of Stack.Screen: hide default header */}
                            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
                            <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes