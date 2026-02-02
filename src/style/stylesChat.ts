import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '@/theme';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    tela: {
        // flex: 1,
        marginBottom: 5,
        position: 'relative'

    },
    barra: {
        flexDirection: 'row',
        flex: 1,
        margin: -10,
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        flex: 1,
        elevation: 5, // Sombra no Android
        shadowColor: '#000000', // colors da sombra no iOS
        shadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra no iOS
        shadowOpacity: 0.3, // Opacidade da sombra no iOS
        shadowRadius: 3,
    },
    searchInput: {
        flex: 1,
        //   height: height * 0.2,
        marginStart: 5,
        padding: 10
    },
    icon: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: colors.blue[200],
        marginStart: 5,
        elevation: 5, // Sombra no Android
        shadowColor: '#000000', // colors da sombra no iOS
        shadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra no iOS
        shadowOpacity: 0.3, // Opacidade da sombra no iOS
        shadowRadius: 3,
    },
    btnIcones: {
        margin: 5,
    },
    viewImagem: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '130%',
        aspectRatio: 1,
        borderRadius: 50, // Deve ser metade da largura e altura para uma imagem totalmente arredondada
        overflow: 'hidden', // Garante que a imagem não ultrapasse os limites arredondados
        start: -10,
    },
    imgAtendente: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Mantém a proporção da imagem e preenche a View
    },
    btnCurtir: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    icone: {
        fontSize: 25,
        color: colors.white,
        marginRight: -10,
    },
    txtNome: {
        fontSize: 18,
        color: colors.white,
    },
    txtStatus: {
        fontSize: 12,
        color: colors.white,
    },
    iconeRobo: {
        fontSize: 40,
        color: 'white'
    },
    viewCaixaColaborador: {
        alignItems: 'flex-end',
        width: width * 0.7,
        left: width * 0.28,
        margin: '1%'
    },
    caixaMensagemColaborador: {
        fontSize: 15,
        padding: '5%',
        maxWidth: width * 0.95,
        minWidth: width * 0.25,
        height: "auto",
        borderRadius: 5,
        backgroundColor: colors.gray[100],
        elevation: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderWidth: 0.5,
        borderColor: colors.gray[200],
        marginRight: '1%'
    },
    horarioColaborador: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        fontSize: 10,
        color: colors.gray[900],
    },
    viewCaixaRobo: {
        alignItems: 'flex-start',
        margin: '1%',
        width: '70%',
    },
    caixaMensagemRobo: {
        fontSize: 15,
        padding: '5%',
        maxWidth: width * 0.95,
        minWidth: width * 0.25,
        height: "auto",
        borderRadius: 5,
        backgroundColor: colors.white,
        elevation: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    espacoLinha: {
        lineHeight: 25,
        paddingTop: '2%'
    },
    horarioRobo: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        fontSize: 10,
        color: colors.gray[900],
    },

    viewPrincipal: {
        position: 'absolute',
        bottom: 15,
        flexDirection: 'row',
        paddingHorizontal: 15
        // margin: 10
    }
});

export default styles