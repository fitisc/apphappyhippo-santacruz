import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Button, Image } from "react-native";
import { addItem } from "../../store/actions/cart.actions";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const ProductDetailsScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selected);
  console.log(product);

  const onHandlerAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <Text style={styles.text}>id: {product.id}</Text>
        <Text style={styles.text}>{product.name}</Text>
        <Image source={product.images} style={styles.image}>{product.Image}</Image>
        <Text style={styles.text}>${product.price.toLocaleString()}</Text>
        <Button
          color={colors.primary}
          title="Add to cart"
          onPress={() => onHandlerAddToCart()}
        />
      </View>
    </View>
  );
};

export default ProductDetailsScreen;