import { FlatList, SafeAreaView, } from "react-native";
import React , { useEffect }from "react";
import { filterProducts, selectProduct } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

//import { PRODUCTS } from "../../constants/data";
import { ProductItem } from "../../components";
import {styles} from './styles';

const Products = ({ navigation }) =>{
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category.selected);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    //const {categoryId, title} = route.params;
    //console.warn(title, categoryId)
    //const filteredProducts = PRODUCTS.filter((product) => product.categoryId == category.id);
    
    const onSelected = (item) => {
        dispatch(selectProduct(item.id));
        navigation.navigate('ProductsDetail', {
            //productId: item.id,
            title: item.title,
        }); 
    };

    const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected}/>;
    const keyExtractor =(item) => item.id.toString();

    useEffect(() =>{
        dispatch(filterProducts(category.id));
    }, []);
    
    
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.contentList}
            />
        </SafeAreaView>
    );
};

export default Products;
