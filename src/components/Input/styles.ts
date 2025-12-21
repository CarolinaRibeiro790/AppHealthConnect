import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 10
    },
    label: {
        color: colors.gray[500],
        fontFamily: fontFamily.medium,
        fontSize: 12
    },
    input: {
        height: 56,
        fontFamily: fontFamily.regular,
        fontSize: 16,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: colors.gray[100],
        borderRadius: 5,
        paddingHorizontal: 15,
        elevation: 5, // Sombra no Android
        shadowColor: '#000000', // Cor da sombra no iOS
        shadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra no iOS
        shadowOpacity: 0.3, // Opacidade da sombra no iOS
        shadowRadius: 3,
        backgroundColor: colors.white
    }
})