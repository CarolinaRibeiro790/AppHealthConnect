import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamily } from "@/theme";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewLogo: {
        width: width * 1,
        height: height * 0.35,
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontFamily: fontFamily.bold,
        fontSize: 32,
        color: colors.blue[200]
    },
    viewInput: {
        backgroundColor: colors.white[200],
        marginTop: -180,
        width: width * 1,
        height: height * 0.55,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        paddingVertical: height * 0.035,
        alignItems: 'center',
        paddingHorizontal: 25,
        gap: 25
    },
    inputs: {
        width: width * 0.9,
        marginBottom: 50
    },
    subtitulo: {
        fontSize: 28,
        color: colors.blue[200]
    },
    linkSenha: {
        color: colors.blue[200]
    }
})