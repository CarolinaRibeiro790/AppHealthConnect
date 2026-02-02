import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme";

export function HomeHeader({ title, icon, isLeft = false }: Props) {
    const navigation = useNavigation<any>();

    useEffect(() => {
        navigation.setOptions({
            title,
            headerStyle: {
                backgroundColor: colors.blue[200],
            },
            headerTintColor: "white",
            headerRight: () =>
                icon ? (
                    <MaterialIcons
                        name={icon}
                        size={28}
                        color="white"
                        style={{ marginRight: 16 }}
                        onPress={() => navigation.navigate("Notificacao")}
                    />
                ) : null,
        });
    }, [navigation, title, icon]);

    return null;
}
