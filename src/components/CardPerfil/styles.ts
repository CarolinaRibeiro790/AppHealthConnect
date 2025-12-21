import { fontFamily, colors } from "@/theme";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        height: height * 0.20,
        backgroundColor: colors.white,
        borderRadius: 15,
        elevation: 5,
        paddingHorizontal: 25,
        paddingVertical: 15

    },
    cabecalho: {
        gap: 8
    },
    viewButton: {
       
        alignItems: "flex-end"
    }
})