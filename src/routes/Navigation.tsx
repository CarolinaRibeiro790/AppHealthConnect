import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons";
import styles from '@/style/stylesGeral';
import Login from '@/views/Login';
import Home from '@/views/Home';
import Agenda from '@/views/Agenda';
import Perfil from '@/views/Perfil';
import { colors } from '@/theme';
import Dados from '@/views/Dados';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const ICONS = {
    Home: "home",
    Agenda: "event",
    Perfil: "person",
} as const

export function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons
                        name={ICONS[route.name as keyof typeof ICONS]}
                        size={size}
                        color={color}
                    />
                ),
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: colors.blue[200],
                tabBarInactiveTintColor: "gray",
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Agenda" component={Agenda} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    )
}
export default function Navigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Dados" component={Dados} />
        </Stack.Navigator>
    );
}