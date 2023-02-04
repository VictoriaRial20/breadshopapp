import { Button, Text, View } from "react-native";

import React from "react";
import {styles} from './styles';

const Products = ({ navigation }) =>{
    return(
        <View style={styles.container}>
            <Text>Products</Text>
            <Button
                title='go to products-detail'
                onPress={()=>navigation.navigate('ProductsDetail')}
                color="#000"
            />
        </View>
    );
};

export default Products;
