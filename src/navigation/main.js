import React from "react";
import {Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, ProductsScreen, ProductDetailsScreen } from "../Screens/Index.js";
import {colors} from "../constants/themes/colors";

const Stack = createNativeStackNavigator();
const isIOS = Platform.OS === "ios";

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
            headerStyle: {
                backgroundColor: isIOS ? colors.secondary : colors.primary,},
            headerTintColor: isIOS ? colors.black : colors.white,
            headerTitleStyle: {fontFamily: "OpenSans-Bold", fontSize: 20},
            }}>
            <Stack.Screen 
            name="Categories" 
            component={CategoriesScreen}
            options={{
                title: "Categories",

                
            }} />
            <Stack.Screen 
            name="Products" 
            component={ProductsScreen}
            options= {({route}) => ({
                title: route.params.title,
            })} />
            <Stack.Screen 
            name="ProductDetails" 
            component={ProductDetailsScreen}
            options= {({route}) => ({
                title: route.params.name,
            })}
            />
        </Stack.Navigator>
    );
};

export default MainNavigator;