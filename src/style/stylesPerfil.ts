import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamily } from "@/theme";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    vantagens: {
        width: width * 0.95,
        borderBottomWidth: 0.2,
        borderBottomColor: 'gray',
        height: height * 0.065,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    colunaEsquerda: {
        width: '10%',
        alignItems: 'flex-start',
    },
    iconeServico: {
        fontSize: 30,
        color: colors.gray[200],
    },
    colunaTextoEsquerda: {
        width: '80%',
        marginLeft: 10,
    },
    textServio: {
        fontSize: 14,
        color: colors.gray[200],
    },
    textServico: {
        fontSize: 14,
        marginStart: 10,
        color: colors.gray[200],
    },
    colunaDireita: {
        width: '10%',
        alignItems: 'flex-end',
    },
    iconeExpandir: {
        fontSize: 30,
        color: colors.blue[200],
        flex: 0.5,
        textAlign: 'right',
        marginRight: 10,
    },
    textSessao: {
        fontFamily: fontFamily.bold,
        marginTop: 20,
        color: colors.gray[200],
    },
})