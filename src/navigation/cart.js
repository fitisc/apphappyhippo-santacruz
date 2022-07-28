import React from "react";
import {Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../Screens/Index.js";
import {colors} from "../constants/themes/colors";

const Stack = createNativeStackNavigator();
const isIOS = Platform.OS === "ios";

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
            headerStyle: {
                backgroundColor: isIOS ? colors.secondary : colors.primary,},
            headerTintColor: isIOS ? colors.black : colors.white,
            headerTitleStyle: {fontFamily: "OpenSans-Bold", fontSize: 20},
            }}>
            <Stack.Screen 
            name="Cart" 
            component={CartScreen}
            options={{
                title: "Cart",

                
            }}
           
            />
        </Stack.Navigator>
    );
};

export default CartNavigator;