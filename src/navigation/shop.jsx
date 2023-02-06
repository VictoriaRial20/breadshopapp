import {Categories, Products, ProductsDetail} from '../screens/index';

import {THEME} from '../constants/themes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
    return(
        <Stack.Navigator initialRouteName = "Categories" screenOptions={{
            headerStyle:{
                backgroundColor:THEME.colors.white,
            },
            headerTintColor:THEME.colors.primary,
            navigationBarColor:THEME.colors.secondary,
            headerTitleStyle: {
                fontFamily: 'Bitter-Bold',
                fontSize:18,
                color:THEME.colors.title,
            }, 
            }}>
            <Stack.Screen name='Categories' component={Categories} options={{
                headerShown: false, 
                }}/>
            <Stack.Screen name='Products' component={Products} options={({route}) => ({
                title: route.params.title,
            })} />
            <Stack.Screen name='ProductsDetail' component={ProductsDetail} options={{
                title:'Product Detail'
                }} />
        </Stack.Navigator>
    )
};

export default ShopNavigation;