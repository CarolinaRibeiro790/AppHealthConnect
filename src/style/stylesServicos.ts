import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamily } from "@/theme";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    conteudo: {
        paddingVertical: 25,
        paddingHorizontal: 25,
        gap: 25,
    },
    titulo: {
        fontFamily: fontFamily.bold,
        fontSize: 24,
        color: colors.blue[200],

    },
    subtitulo: {
        fontFamily: fontFamily.bold,
        fontSize: 18,
        color: colors.gray[200],
    },
    txt:{
        paddingVertical: 5,
        fontSize: 16
    }
})