import React from "react";
import Root from './src/index';
import { ActivityIndicator } from "react-native";
import { useFonts} from 'expo-font';
import { Provider } from "react-redux";
import store from "./src/store";





export default function App() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/static/OpenSans/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/static/OpenSans/OpenSans-Bold.ttf"),
    "OpenSans-Italic": require("./assets/fonts/static/OpenSans/OpenSans-Italic.ttf"),
   
    
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
