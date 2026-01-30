import { View, Text } from "react-native";
import { styles } from "./styles";
import { UserDTO } from "@/dto/UserDTO";
import { ButtonSmall } from "../ButtonSmall";
import { colors, fontFamily } from "@/theme";
import { useNavigation } from '@react-navigation/native';

type CardPerfilProps = {
    data: UserDTO
}

export function CardPerfil({ data }: CardPerfilProps) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={{ fontFamily: fontFamily.bold, fontSize: 18, color: colors.blue[200] }} numberOfLines={1}>{data.name}</Text>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: 16, color: colors.gray[400] }}>{data.dataNascimento}</Text>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: 16, color: colors.gray[400] }}>{data.telephone}</Text>
            </View>

            <View style={styles.viewButton}>
                <ButtonSmall title="Editar Perfil" onPress={() => navigation.navigate('Dados')}/>
            </View>
        </View>
    )
}