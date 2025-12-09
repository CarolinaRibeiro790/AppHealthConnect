import { FlatList, Text, View } from "react-native";
import { HomeHeader } from "@/components/HomeHeader";
import { colors } from "@/theme";
import { styles } from "@/style/stylesHome";
import { Button } from "@/components/Button";
import { ButtonSmall } from "@/components/ButtonSmall";
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {

    const dados = {
        text: "Olá, Carol",
    }

    const servicos = [
        { id: 1, nome: "Iridologia", icone: "visibility" },
        { id: 2, nome: "Drenagem", icone: "favorite" },
        { id: 3, nome: "Drenagem", icone: "favorite" },
        { id: 4, nome: "Drenagem", icone: "favorite" }
    ];

    const servicosItens = ({ item }) => (
        <View style={styles.cardService}>
            <MaterialIcons name={item.icone as any} style={styles.icon} />
            <Text style={styles.tituloCardService}>{item.nome}</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <HomeHeader
                data={dados}
                icon={{
                    name: "notifications",
                    color: colors.white[100],
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
                    />
                </View>
            </View>

            <View style={styles.viewServices}>
                <Text style={styles.titulo}>Meus agendamentos</Text>

                <View style={styles.viewConsulta}>
                    <View style={styles.cabecalho}>
                        <View style={styles.servicoItem}>
                            <MaterialIcons name="visibility" style={styles.icon} />
                            <Text style={styles.txt} numberOfLines={1}>Iridologia</Text>
                        </View>
                        <View style={styles.viewCalendary}>
                            {/* <MaterialIcons name="calendar-today" style={styles.iconComum} /> */}
                            <Text style={styles.txtComum}>15/12/2025</Text>
                        </View>

                    </View>

                    <View style={styles.viewBodyConsultas}>
                        <View style={{gap:5}}>
                            <View>
                                <Text style={styles.txtNome}>Dra. Tais Prates</Text>
                            </View>

                            <View style={styles.viewCalendary}>
                                <MaterialIcons name="alarm" style={styles.iconComum} />
                                <Text style={styles.txtComum}>13:30 - 14:30</Text>
                            </View>
                        </View>


                        <ButtonSmall title="Desmarcar" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home;