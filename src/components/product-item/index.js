import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected}) => {
    return (
        <View style={styles. container}>
            <TouchableOpacity 
            style={styles.containerTouchable}
            onPress={() => onSelected(item)}>
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.detail}>  
                        {item.price.toLocaleString("en-US", {
                        style:"currency", 
                        currency: "USD",
                        })}
                    </Text>
                    <Text style={styles.detail}>Peso:{item.weight}</Text>
               </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProductItem;