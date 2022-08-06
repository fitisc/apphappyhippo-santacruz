import React, {useEffect} from 'react';
import { View, FlatList} from 'react-native';
import { ProductItem } from '../../components/index';
import {useSelector, useDispatch} from 'react-redux';
import { filteredProducts, selectProduct } from '../../store/actions/products.actions';
import {styles} from './styles';

const ProductsScreen = ({ navigation }) => {
     const dispatch = useDispatch();
    const products= useSelector((state) => state.product.products);
    const filterProducts = useSelector((state) => state.product.filteredProducts);
    const productSelected = useSelector((state) => state.product.selected);
    const category = useSelector((state) => state.category.selected);

    useEffect(() => {
        dispatch(filteredProducts(category.id));
    }, []);

    
    const onSelected = (item) => {
        dispatch(selectProduct(item.id));
        navigation.navigate("ProductDetails", {
            product: item.product,
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
                numColumns={1}
                
                />
           
        </View>
    );
};

export default ProductsScreen;