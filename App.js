import React, { useState, useEffect } from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from './routes/drawer';
import { globalStyles } from "./styles/global";

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
      async function loadFonts() {
        try {
          await getFonts();
          setFontsLoaded(true);
          SplashScreen.hideAsync(); // Hide splash screen after fonts are loaded
        } catch (error) {
          console.warn(error);
        }
      }
  
      loadFonts();
    }, []);

    if (!fontsLoaded) {
      return null; // Keep splash screen visible until fonts are loaded
    }

    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
}