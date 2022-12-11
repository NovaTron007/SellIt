import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from "react-native-safe-area-context"
import Routes from "./src/Routes";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { createContext } from "react";


// create global UserContext
export const UserContext = createContext()



const App = () => {
  // update UserContext
  const [user, setUser] = useState(null)

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: "1011764940087-ld2qc77iiabj79av1353ins6ln7mv53u.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  },[])



  return (
    // provide UserContext to all app, and setter function
    <UserContext.Provider value={{ user, setUser}} >
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </UserContext.Provider>
  );
};


export default App;
