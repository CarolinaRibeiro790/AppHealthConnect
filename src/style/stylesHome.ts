import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamily } from "@/theme";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titulo: {
        fontFamily: fontFamily.bold,
        fontSize: 18,
        color: colors.gray[200]
    },
    cardService: {
        width: width * 0.30,
        height: height * 0.12,
        backgroundColor: colors.gray[100],
        borderRadius: 15,
        elevation: 5, // Sombra no Android
        shadowColor: '#000000', // Cor da sombra no iOS
        shadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra no iOS
        shadowOpacity: 0.3, // Opacidade da sombra no iOS
        shadowRadius: 3,
        alignItems: 'center',
        paddingVertical: 25,
        marginBottom: 5
    },
    tituloCardService: {
        fontFamily: fontFamily.medium,
        fontSize: 16,
        textAlign: "center",
        color: colors.gray[400]
    },
    icon: {
        fontSize: 36,
        color: colors.blue[200]
    },

    viewServices: {
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    viewConsulta: {
        backgroundColor: colors.gray[100],
        borderRadius: 15,
        height: height * 0.15,
        width: width * 0.95,
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: 10,
        elevation: 3, // Sombra no Android
        shadowColor: '#000000', // Cor da sombra no iOS
        shadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra no iOS
        shadowOpacity: 0.3, // Opacidade da sombra no iOS
        shadowRadius: 3,

    },
    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,

    },
    viewCalendary: {
        flexDirection: "row",
        alignItems: "center"
    },
    viewBodyConsultas: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
       
    },
    txt: {
        fontSize: 22,
        fontFamily: fontFamily.bold,
        color: colors.blue[200]
    },
    iconConsulta: {
        fontSize: 32,
        color: colors.blue[200]
    },
    txtComum: {
        fontFamily: fontFamily.regular,
        fontSize: 17,
        color: colors.gray[400]
    },

    txtNome: {
        fontFamily: fontFamily.regular,
        fontSize: 18,
        color: colors.gray[400]
    },
    iconComum: {
        fontSize: 20,
        color: colors.gray[400]
    },
    servicoItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingVertical: 10,
        maxWidth: width * 0.7
    }
})