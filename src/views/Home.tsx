import { useEffect, useState, useCallback } from "react";
import { FlatList, Text, View, ListRenderItem, ScrollView, RefreshControl } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/theme";
import { styles } from "@/style/stylesHome";

import { CardConsultas } from "@/components/CardConsultas";
import { ButtonServicos } from "@/components/ButtonServicos";

import { ServiceDTO } from "@/dto/ServiceDTO";
import { ConsultaDTO } from "@/dto/ConsultaDTO";
import { Loading } from "@/components/Loading";
import { HomeHeader } from "@/components/HomeHeader";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            title: `Olá, Carol`,
            headerStyle: {
                backgroundColor: colors.blue[200],
            },
            headerTintColor: 'white',
            headerRight: () => (
                <MaterialIcons
                    name="notifications"
                    size={28}
                    color="white"
                    style={{ marginRight: 16 }}
                    onPress={() => {
                        console.log("Clicou no ícone");
                    }}
                />
            ),
        });
    }, [navigation]);


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
            date: "30/01/2026",
            hour: "13:30 - 14:30",
            doctor: "Dra. Tais Prates",
        },
        {
            id: "2",
            service: "Acupuntura",
            date: "04/02/2026",
            hour: "09:00 - 10:00",
            doctor: "Dr. Tais Prates",
        },
    ]

    const parseDateBR = (dateStr: string) => {
        const [day, month, year] = dateStr.split("/").map(Number);
        return new Date(year, month - 1, day);
    };

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const consultasFiltradas = consultas.filter((consulta) => {
        const dataConsulta = parseDateBR(consulta.date);
        return dataConsulta >= hoje;
    });

    const servicosItens: ListRenderItem<ServiceDTO> = ({ item }) => {
        return <ButtonServicos item={item} />
    }

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        // await Promise.all([

        // ]);
        setRefreshing(false);
    }, []);



    if (isLoading) {
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <HomeHeader title="Olá, Carol" icon="notifications" />

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

            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor={colors.blue[200]}
                        colors={[colors.blue[200]]}
                        progressBackgroundColor="#FFFFFF"
                    />
                }>
                <View style={styles.viewServices}>
                    <Text style={styles.titulo}>Meus agendamentos</Text>
                    <FlatList
                        data={consultasFiltradas}
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