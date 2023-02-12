import { Text, View } from "react-native";

import React from "react";
import {styles} from './styles';
import { useSelector } from "react-redux";

const ProductsDetail = ({navigation}) =>{
    //const {productId, title} = route.params;
    const product = useSelector((state) => state.products.selected);
    //const product = PRODUCTS.find((product) => product.id === productId);

    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.title}>{product.description}</Text>
            <Text style={styles.title}>{product.weight}</Text>
            <Text style={styles.title}>{product.price}</Text>
        </View>
    );
};

export default ProductsDetail;
