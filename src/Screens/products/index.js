import React, {useEffect} from 'react';
import { View, FlatList } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { ProductItem } from '../../components/index';
import { selectProduct, filteredProducts } from '../../store/actions/products.actions';
import {styles} from './styles';

const ProductsScreen = ({ navigation }) => {
     const dispatch = useDispatch();

    const filterProducts = useSelector((state) => state.product.filteredProducts);
    const category = useSelector((state) => state.category.selected);

    useEffect(() => {
        dispatch(filteredProducts(category.id));
    }, []);

    
    const onSelected = (item) => {
        dispatch(selectProduct(item.id));
        navigation.navigate("ProductDetails", {
            name: item.name,
            
        });
    };

    const renderItem = ({item}) => (
        <ProductItem item={item} onSelected={onSelected} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={filterProducts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                />
        </View>
    );
};

export default ProductsScreen;