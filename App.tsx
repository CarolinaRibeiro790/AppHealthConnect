import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Platform, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from "@expo-google-fonts/inter";

import { colors } from './src/theme/colors';
import Navigation from '@/routes/Navigation';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    const [fonstLoaded] = useFonts({ Inter_400Regular, Inter_500Medium, Inter_700Bold })

    if (!fonstLoaded) {
        return
    }

    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
            }}>
                <Navigation />
            </View>
        </NavigationContainer>
    );
}
