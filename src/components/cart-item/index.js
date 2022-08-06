import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


const CartItem = ({ item, onDelete}) => {
    return (
        <View style={styles. container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.containerDetails}>
                <View style={styles.details}>
                    <Text style={styles.detailQty}>{item.quantity}</Text>
                    <Text style={styles.detailPrice}>${item.price}</Text>
                </View>
                <TouchableOpacity 
                style={styles.deleteButton} 
                onPress={() => onDelete(item.id)}>
                    <Ionicons
                    name="trash"
                    size={20}
                    color={styles.deleteButton}>
                    </Ionicons>
                </TouchableOpacity>

            </View>
        </View>

    );
};

export default CartItem;