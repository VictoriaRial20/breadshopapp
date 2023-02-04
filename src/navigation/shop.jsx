import {Categories, Products, ProductsDetail} from '../screens/index';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
        <Stack.Navigator initialRouteName = "Categories">
            <Stack.Screen name='Categories' component={Categories} options={ {headerShown: false,}}/>
            <Stack.Screen name='Products' component={Products} options={ {headerShown: false,}} />
            <Stack.Screen name='ProductsDetail' component={ProductsDetail} options={ {title:'Product Detail'} } />
        </Stack.Navigator>
    )
};

export default ShopNavigator;