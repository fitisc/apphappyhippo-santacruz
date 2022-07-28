import React from "react";
import Root from './src/index';
import { ActivityIndicator } from "react-native";
import { useFonts} from 'expo-font';
import { Provider } from "react-redux";
import store from "./src/store";





export default function App() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/static/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/static/OpenSans-Bold.ttf"),
    "OpenSans-Italic": require("./assets/fonts/static/OpenSans-Italic.ttf"),
    "OpenSans-BoldItalic": require("./assets/fonts/static/OpenSans-BoldItalic.ttf"),
    "OpenSans-Light": require("./assets/fonts/static/OpenSans-Light.ttf"),
    "OpenSans-LightItalic": require("./assets/fonts/static/OpenSans-LightItalic.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/static/OpenSans-SemiBold.ttf"),
    "OpenSans-SemiBoldItalic": require("./assets/fonts/static/OpenSans-SemiBoldItalic.ttf"),
    "OpenSans-ExtraBold": require("./assets/fonts/static/OpenSans-ExtraBold.ttf"),
    "OpenSans-ExtraBoldItalic": require("./assets/fonts/static/OpenSans-ExtraBoldItalic.ttf"),
    
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  };



  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
