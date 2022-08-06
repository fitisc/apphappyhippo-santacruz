import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import MainNavigator from "./main";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import { colors } from "../constants/themes/colors";


const BottomTabs = createBottomTabNavigator(); 

const LabelBottomTab = (focused, label) => (
    <Text style={{color: focused ? colors.primary : colors.text, 
        fontFamily: focused ? "OpenSans-Bold" : "OpenSans-Regular", 
    }}>{label}</Text>
)



const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.black,
            }}
            >
            <BottomTabs.Screen
                name="ShopTab"
                component={MainNavigator}
                options={{
                    tabBarLabel: ({focused}) => LabelBottomTab(focused, "Shop"),
                    TabBarIcon: ({ focused }) => (
                        <Ionicons
                            name= {focused ? "home" : "home-outline"}
                            size={18}
                            color={focused ? colors.primary : colors.black}
                        />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    tabBarLabel: ({focused}) => LabelBottomTab(focused, "Cart"),
                    TabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "cart" : "cart-outline"} 
                            size={18}
                            color={focused ? colors.primary : colors.black}
                        />
                    ),
                }}
            />
               <BottomTabs.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options={{
                    tabBarLabel: ({focused}) => LabelBottomTab(focused, "Orders"),
                    TabBarIcon: ({ focused }) => (
                        <Ionicons
                            name= {focused ? "file-tray-full" : "file-tray-outline"} 
                            size={18}
                            color={focused ? colors.primary : colors.black}
                        />
                    ),
                }}
            />

        </BottomTabs.Navigator>
    );
            };

export default TabNavigator; 