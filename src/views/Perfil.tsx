import { memo } from 'react';
import { View, TouchableOpacity, Text, FlatList, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { UserDTO } from "@/dto/UserDTO";

import { HomeHeader } from "@/components/HomeHeader";
import { CardPerfil } from "@/components/CardPerfil";
import { Separator } from '@/components/Separator';

import { colors } from '@/theme';
import { styles } from '@/style/stylesPerfil';

const outros = [
    { id: 1, iconName: 'lock-reset', title: 'Alterar senha', iconSeta: 'chevron-right', tela: 'AlterarSenha' },
    // { id: 2, iconName: 'system-update', title: 'Atualizar', iconSeta: 'chevron-right', tela: '' },
    { id: 3, iconName: 'info-outline', title: 'Sobre nós', iconSeta: 'chevron-right', link: 'localhost:3333' },
    { id: 4, iconName: 'logout', title: 'Sair', iconSeta: 'chevron-right' },
]

const Perfil = () => {
    const navigation = useNavigation();
    const dadosUser: UserDTO = {
        id: "1",
        name: "Ana Carolina Gonçalves Ribeiro",
        dataNascimento: "13/03/1999",
        telephone: "(19) 99922-2222"
    }

    type ItemTabelaProps = {
        id: number
        iconName: keyof typeof MaterialIcons.glyphMap
        title: string
        iconSeta: keyof typeof MaterialIcons.glyphMap
        tela?: string
        link?: string
    }

    const openLink = (url) => {
        Linking.openURL(url).catch((err) => console.error('Erro ao abrir link:', err));
    };



    const ItemTabela = memo(
        ({ iconName, title, iconSeta, tela, link }: ItemTabelaProps) => (
            <TouchableOpacity style={styles.vantagens}
                onPress={() => {
                    if (title === 'Sair') {
                        // handleLogoutLocal();
                    } else if (link) {
                        // openLink(link);
                    } else {
                        navigation.navigate(tela);
                    }
                }}>
                <View style={styles.colunaEsquerda}>
                    <MaterialIcons name={iconName} style={styles.iconeServico} />
                </View>

                <View style={styles.colunaTextoEsquerda}>
                    <Text style={styles.textServico}>{title}</Text>
                </View>

                <View style={styles.colunaDireita}>
                    <MaterialIcons name={iconSeta} style={styles.iconeExpandir} />
                </View>
            </TouchableOpacity>
        )
    )


    return (
        <View >
            <HomeHeader title="Perfil" />
            <View style={{ paddingVertical: 25, alignItems: "center" }}>
                <CardPerfil data={dadosUser} />
            </View>

            <View style={{ paddingHorizontal: 15 }}>
                <Text style={styles.textSessao}>Outros</Text>

                <View>
                    <FlatList
                        data={outros}
                        keyExtractor={(item) => item.id.toString()}
                        ItemSeparatorComponent={() => <Separator color={colors.gray[100]} />}
                        renderItem={({ item }) => <ItemTabela {...item} />}
                    />

                </View>
            </View>
        </View>
    )
}

export default Perfil;