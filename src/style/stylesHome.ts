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
        color: colors.gray[200],

    },
    viewServices: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    iconConsulta: {
        fontSize: 32,
        color: colors.blue[200]
    },


})