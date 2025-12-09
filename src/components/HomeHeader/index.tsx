import { Text, View, ColorValue } from 'react-native';
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
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{data.text}</Text>
            {icon && (
                <MaterialIcons name={icon.name} size={32} color={icon.color} />
            )}
        </View>
    )
}
