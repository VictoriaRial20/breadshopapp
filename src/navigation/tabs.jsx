import CartNavigator from './cart';
import IonicIcons from '@expo/vector-icons/Ionicons';
import OrdersNavigator from './orders';
import ShopNavigation from './shop';
import { THEME } from '../constants/themes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <BottomTab.Navigator
        initialRouteName='ShopTab'
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle:{
                fontFamily:'Bitter-Regular',
                fontSize:12,
            },
            tabBarActiveTintColor:THEME.colors.primary,
            tabBarInactiveTintColor: THEME.colors.grey,
        }}
        >
            <BottomTab.Screen name="ShopTap" options={{
                title:'Shop',
                tabBarIcon:({focused }) => (
                    <IonicIcons name={focused ? 'home' : 'home-outline'} 
                    size={22}
                    color={THEME.colors.primary}/>
                ),
            }} component={ShopNavigation}/>
            <BottomTab.Screen name="OrdersTap" options={{
                title:'Orders',
                tabBarIcon:({focused }) => (
                    <IonicIcons name={focused ? 'file-tray' : 'file-tray-outline'} 
                    size={22}
                    color={THEME.colors.primary}/>
                ),
            }} component={OrdersNavigator}/>
            <BottomTab.Screen name="CartTap" options={{
                title:'Cart',
                tabBarIcon:({focused }) => (
                    <IonicIcons name={focused ? 'cart' : 'cart-outline'} 
                    size={22}
                    color={THEME.colors.primary}/>
                ),
            }} component={CartNavigator}/>
            
        </BottomTab.Navigator>
    )
};

export default Tabs;