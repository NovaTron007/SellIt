import React from 'react';
import SplashScreen from "./src/screens/auth/splash/SplashScreen"
import { View } from 'react-native';
import SignupScreen from "./src/screens/auth/signup/SignupScreen"

const App = () => {

  return (
    <View>
      {/* <SplashScreen /> */}
      <SignupScreen />
    </View>
  );
};


export default App;
