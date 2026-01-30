import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from '@/theme';
import styles from '@/style/stylesGeral';

import Login from '@/views/Login';
import Home from '@/views/Home';
import Agenda from '@/views/Agenda';
import Perfil from '@/views/Perfil';
import Dados from '@/views/Dados';
import Servicos from '@/views/Servicos';
import Chat from '@/views/Chat'
import Notificacao from '@/views/Notificacao';
import AlterarSenha from '@/views/AlterarSenha';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const ICONS = {
    Home: "home",
    Agenda: "event",
    Perfil: "person",
    Chat: "chat-bubble-outline"
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
            <Tab.Screen name="Chat" component={Chat} />
        </Tab.Navigator>
    )
}
export default function Navigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Dados" component={Dados} />
            <Stack.Screen name="Servicos" component={Servicos} />
            <Stack.Screen name="Notificacao" component={Notificacao} />
            <Stack.Screen name="AlterarSenha" component={AlterarSenha} />
        </Stack.Navigator>
    );
}