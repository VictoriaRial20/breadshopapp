import { NavigationContainer } from '@react-navigation/native';
import ShopNavigation from './shop';

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <ShopNavigation/>
        </NavigationContainer>
    );
}; 

export default AppNavigation;