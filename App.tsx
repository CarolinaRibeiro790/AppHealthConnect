import { NavigationContainer } from '@react-navigation/native';
import Login from '@/views/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, Platform, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from "@expo-google-fonts/inter";

import { colors } from './src/theme/colors';
import Home from '@/views/Home';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fonstLoaded] = useFonts({ Inter_400Regular, Inter_500Medium, Inter_700Bold })

    if (!fonstLoaded) {
        return
    }

    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white[100]} />

            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
            }}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
}
