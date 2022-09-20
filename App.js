import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SignupScreen from "./src/screens/auth/signup/SignupScreen"
import { GOOGLE_WEB_CLIENT_ID} from "@env"
// import statusCodes along with GoogleSignin
import { GoogleSignin } from "@react-native-google-signin/google-signin"


const App = () => {

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  },[])

  return (
    <SafeAreaView>
      {/* <SplashScreen /> */}
      <SignupScreen />
    </SafeAreaView>
  );
};


export default App;
