import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@/views/Login';
import Home from '@/views/Home';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}
