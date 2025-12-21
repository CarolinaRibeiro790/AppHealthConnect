import { Text, View } from "react-native";
import { styles } from "@/components/ButtonServicos/styles";

import { MaterialIcons } from "@expo/vector-icons";
import { ServiceDTO } from "@/dto/ServiceDTO";

type ButtonServicosProps = {
    item: ServiceDTO
}

export function ButtonServicos({ item }: ButtonServicosProps) {
    return (
        <View style={styles.cardService}>
            <MaterialIcons name={item.icon as any} style={styles.icon} />
            <Text style={styles.tituloCardService}>{item.name}</Text>
        </View>
    )
}