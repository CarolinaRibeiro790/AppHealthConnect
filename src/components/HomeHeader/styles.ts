import { fontFamily, colors } from "@/theme";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
    container: {
        width: width * 1,
        height: height * 0.07,
        paddingHorizontal: 24,
        gap: 24,
        backgroundColor: colors.blue[200],
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    label: {
        fontSize: 12,
        color: colors.white,
        fontFamily: fontFamily.regular
    },
    texto: {
        fontSize: 20,
        color: colors.white,
        fontFamily: fontFamily.medium
    },
    summary: {
        width: "100%",
        gap: 12,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})