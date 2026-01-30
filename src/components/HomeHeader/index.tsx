import { Text, View, ColorValue, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles";

export type HomeHeaderProps = {
    text: string,
    isLeft?: boolean
}

type Props = {
    data: HomeHeaderProps,
    icon?: {
        name: keyof typeof MaterialIcons.glyphMap,
        color: ColorValue
    }
    isLeft?: boolean
}

export function HomeHeader({ data, icon, isLeft = false }: Props) {
    const navigation = useNavigation<any>()
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{data.text}</Text>
            {icon && (
                <TouchableOpacity onPress={() => navigation.navigate('Notificacao')}>
                    <MaterialIcons name={icon?.name} size={32} color={icon.color} />
                </TouchableOpacity>
            )}
        </View>
    )
}
