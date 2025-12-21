import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";

import { styles } from "./style";
import { colors } from "@/theme";

type Props = TouchableOpacityProps & {
    title: string,
    isProcessing?: boolean
    backgroundColor?: string
}

export function Button({ title, isProcessing = false, backgroundColor = colors.blue[200], style,  ...rest }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            disabled={isProcessing}
            {...rest}>
            <Text style={styles.title}>
                {isProcessing ? (
                    <ActivityIndicator size="small" color={colors.white} />
                ) : (
                    title
                )}
            </Text>
        </TouchableOpacity>
    )
}