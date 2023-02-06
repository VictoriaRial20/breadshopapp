import { Button, Text, View } from "react-native";

import React from "react";
import { THEME } from "../../constants/themes";
import {styles} from './styles';

const Products = ({ navigation , route}) =>{
    const {categoryId, title} = route.params;
    //console.warn(title, categoryId)

    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Products</Text>
            <Button
                title='go to products-detail'
                onPress={()=>navigation.navigate('ProductsDetail')}
                color={THEME.colors.primary}
            />
        </View>
    );
};

export default Products;
