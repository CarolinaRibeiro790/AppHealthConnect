import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamily } from "@/theme";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

    cardService: {
        width: width * 0.32,
        height: height * 0.15,
        backgroundColor: colors.white,
        borderRadius: 15,
        elevation: 2, // Sombra no Android
        shadowColor: '#000000', // Cor da sombra no iOS
        shadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra no iOS
        shadowOpacity: 0.3, // Opacidade da sombra no iOS
        shadowRadius: 3,
        alignItems: 'center',
        paddingVertical: 25,
        marginBottom: 5,
        paddingHorizontal: 5
    },
    tituloCardService: {
        fontFamily: fontFamily.medium,
        fontSize: 16,
        textAlign: "center",
        color: colors.blue[200]

    },
    icon: {
        fontSize: 36,
        color: colors.blue[200]

    },

})