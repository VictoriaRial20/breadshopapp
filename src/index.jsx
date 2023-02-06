import { ActivityIndicator, View } from 'react-native';

import AppNavigation from './navigation';
import { THEME } from './constants/themes';
import { styles } from './styles';
import { useFonts } from 'expo-font';

const App = () => {
    const [loaded] = useFonts({
    'Bitter-Regular': require('../assets/fonts/Bitter-Regular.ttf'),
    'Bitter-Bold': require('../assets/fonts/Bitter-Bold.ttf'),
    'Bitter-Light': require('../assets/fonts/Bitter-Light.ttf'),
    'Bitter-Medium': require('../assets/fonts/Bitter-Medium.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={THEME.colors.primary} />
      </View>
    );
  }
  return <AppNavigation />;
};


export default App;