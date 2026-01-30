import { fontFamily, colors } from "@/theme";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
    viewConsulta: {
        backgroundColor: colors.white,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        height: height * 0.15,
        width: width * 0.95,
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: 10,
        marginTop: 15,
        borderLeftWidth: 6,
        borderLeftColor: colors.blue[200],

        // Android
        elevation: 2,

        // iOS
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
    },
    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,

    },
    servicoItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingVertical: 10,
        maxWidth: width * 0.7
    },
    txt: {
        fontSize: 18,
        fontFamily: fontFamily.bold,
        color: colors.blue[200]
    },
    viewCalendary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4
    },
    viewCalendaryDate: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        marginRight: width * 0.05
    },
    txtComum: {
        fontFamily: fontFamily.regular,
        fontSize: 16,
        color: colors.gray[400]
    },
    viewBodyConsultas: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
    },
    txtNome: {
        fontFamily: fontFamily.regular,
        fontSize: 16,
        color: colors.gray[400]
    },

    iconComum: {
        fontSize: 18,
        color: colors.gray[400]
    },
})