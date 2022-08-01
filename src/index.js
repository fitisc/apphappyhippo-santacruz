import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from "./navigation/index"; 


const Root = () => {
  return (
   <SafeAreaProvider>
    <AppNavigator />
   </SafeAreaProvider>
   
  );
};

export default Root;