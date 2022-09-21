import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SignupScreen from "./src/screens/auth/signup/SignupScreen"
import SigninScreen from "./src/screens/auth/signin/SigninScreen"
import { GOOGLE_WEB_CLIENT_ID} from "@env"
// import statusCodes along with GoogleSignin
import { GoogleSignin } from "@react-native-google-signin/google-signin"


const App = () => {

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: "1011764940087-ld2qc77iiabj79av1353ins6ln7mv53u.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  },[])

  return (
    <SafeAreaView>
      {/* <SplashScreen /> */}
      <SigninScreen />
    </SafeAreaView>
  );
};


export default App;
