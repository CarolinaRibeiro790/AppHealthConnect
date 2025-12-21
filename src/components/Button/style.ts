import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamily } from "@/theme";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue[200],
        height: 48,
        width: width * 0.9,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontFamily: fontFamily.medium,
        fontSize: 16,
        color: colors.white
    }
})