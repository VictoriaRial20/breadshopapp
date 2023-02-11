import { Cart } from '../screens';
import { THEME } from '../constants/themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
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
                }}
        >
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;