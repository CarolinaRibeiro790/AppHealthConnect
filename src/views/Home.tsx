import { FlatList, Text, View, ListRenderItem, ScrollView } from "react-native";
import { HomeHeader } from "@/components/HomeHeader";
import { colors } from "@/theme";
import { styles } from "@/style/stylesHome";
import { CardConsultas } from "@/components/CardConsultas";
import { ButtonServicos } from "@/components/ButtonServicos";
import { ServiceDTO } from "@/dto/ServiceDTO";
import { ConsultaDTO } from "@/dto/ConsultaDTO";

const Home = () => {

    const dados = {
        text: "Olá, Carol",
    }

    const servicos = [
        { id: 1, name: "Iridologia", icon: "visibility" },
        { id: 2, name: "Massagem terapêutica", icon: "spa" },
        { id: 3, name: "Acupuntura", icon: "adjust" },
        { id: 4, name: "Auriculoterapia", icon: "hearing" },
        { id: 5, name: "Drenagem", icon: "water-drop" },
        { id: 6, name: "Desbloqueio emocional", icon: "psychology" }
    ];

    const consultas: ConsultaDTO[] = [
        {
            id: "1",
            service: "Iridologia",
            date: "24/12/2025",
            hour: "13:30 - 14:30",
            doctor: "Dra. Tais Prates",
        },
        {
            id: "2",
            service: "Acupuntura",
            date: "23/12/2025",
            hour: "09:00 - 10:00",
            doctor: "Dr. Tais Prates",
        },
        {
            id: "3",
            service: "Drenagem",
            date: "28/12/2025",
            hour: "14:30 - 15:30",
            doctor: "Dra. Tais Prates",
        },
        {
            id: "4",
            service: "Massagem Terapeutica",
            date: "20/12/2025",
            hour: "14:30 - 15:30",
            doctor: "Dra. Tais Prates",
        },
    ]



    const servicosItens: ListRenderItem<ServiceDTO> = ({ item }) => {
        return <ButtonServicos item={item} />
    }
    return (
        <View style={styles.container}>
            <HomeHeader
                data={dados}
                icon={{
                    name: "notifications",
                    color: colors.white,
                }} />

            <View style={styles.viewServices}>
                <Text style={styles.titulo}>Serviços</Text>

                <View style={{ flexDirection: "row", gap: 10, paddingVertical: 15 }}>

                    <FlatList
                        data={servicos}
                        horizontal
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={servicosItens}
                        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                        showsHorizontalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <Text style={{ textAlign: "center", marginTop: 20, color: colors.gray[200] }}>
                                Nenhum serviço encontrado.
                            </Text>
                        )}
                    />
                </View>
            </View>

            <ScrollView>
                <View style={styles.viewServices}>
                    <Text style={styles.titulo}>Meus agendamentos</Text>
                    <FlatList
                        data={consultas}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <CardConsultas data={item} />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <Text style={{ textAlign: "center", marginTop: 20, color: colors.gray[200] }}>
                                Nenhum agendamento encontrado.
                            </Text>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;