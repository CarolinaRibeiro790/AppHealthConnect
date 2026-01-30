import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { styles } from "@/components/ButtonServicos/styles";

import { MaterialIcons } from "@expo/vector-icons";
import { ServiceDTO } from "@/dto/ServiceDTO";

type ButtonServicosProps = {
    item: ServiceDTO,
}

export function ButtonServicos({ item }: ButtonServicosProps) {
    const navigation = useNavigation<any>()
    return (
        <TouchableOpacity style={styles.cardService}
            onPress={() =>
                navigation.navigate("Servicos", {
                    id: item.id
                })
            }>
            <MaterialIcons name={item.icon as any} style={styles.icon} />
            <Text style={styles.tituloCardService}>{item.name}</Text>
        </TouchableOpacity>
    )
}