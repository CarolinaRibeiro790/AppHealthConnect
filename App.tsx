import { NavigationContainer } from '@react-navigation/native';
import Login from '@/views/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, Platform, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from "@expo-google-fonts/inter";

import { colors } from './src/theme/colors';
import { MainTabNavigator } from '@/routes/Navigation';
import Dados from '@/views/Dados';

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
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Dados" component={Dados} />
                    <Stack.Screen name="Home" component={MainTabNavigator} />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
}
