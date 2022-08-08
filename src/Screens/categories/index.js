import React from "react";
import { View, Text, FlatList, SafeAreaView} from "react-native";
import { CategoryItem } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions/category.actions";
import { styles } from "./styles";

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", {
      title: item.title,
    });
  };

  


  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <View>
          <Text style={styles.title}>"Bienvenidos a Tienda HAPPY HIPPO"</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
    </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;