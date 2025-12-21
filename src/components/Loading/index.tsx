import { ActivityIndicator } from "react-native";

import { colors } from "@/theme/colors";
import { styles } from "./styles";

export function Loading() {
    return <ActivityIndicator color={colors.blue[200]} style={styles.container} />
}