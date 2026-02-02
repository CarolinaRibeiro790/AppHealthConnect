import { HomeHeader } from "@/components/HomeHeader";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "@/style/stylesChat";

const Chat = () => {
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader title="Chat" icon="more-vert" />

            <ScrollView style={styles.tela}>
                <View style={styles.viewCaixaColaborador}>
                    <View style={styles.caixaMensagemColaborador}>
                        <Text style={styles.espacoLinha} >Bom dia</Text>
                        <Text style={styles.horarioColaborador}>08:50</Text>
                    </View>

                </View>

                <View style={styles.viewCaixaRobo}>
                    <View style={styles.caixaMensagemRobo}>
                        <Text style={styles.espacoLinha} >Olá, sou a secretária virtual Aurora!</Text>
                        <Text style={styles.horarioRobo}>08:51</Text>
                    </View>
                </View>

                <View style={styles.viewCaixaRobo}>
                    <View style={styles.caixaMensagemRobo}>
                        <Text style={styles.espacoLinha}>Qual serviço gostaria de tirar dúvidas?</Text>
                        <Text style={styles.espacoLinha}>1 - Acupuntura</Text>
                        <Text style={styles.espacoLinha}>2 - Auriculoterapia</Text>
                        <Text style={styles.espacoLinha}>3 - Desbloqueio emocional</Text>
                        <Text style={styles.espacoLinha}>4 - Drenagem</Text>
                        <Text style={styles.espacoLinha}>5 - Iridologia</Text>
                        <Text style={styles.espacoLinha}>6 - Massagem terapêutica</Text>
                        <Text style={styles.horarioRobo}>08:51</Text>
                    </View>

                </View>

                {/* <View style={styles.viewCaixaColaborador}>
                    <View style={styles.caixaMensagemColaborador}>
                        <Text style={styles.espacoLinha}>8</Text>
                        <Text style={styles.horarioColaborador}>08:52</Text>
                    </View>

                </View>

                <View style={styles.viewCaixaRobo}>
                    <View style={styles.caixaMensagemRobo}>
                        <Text style={styles.espacoLinha}>Gostaria de falar sobre qual assunto no Apoio Hapvida?</Text>
                        <Text style={styles.espacoLinha}>1 - Marcar consulta</Text>
                        <Text style={styles.espacoLinha}>2 - Marcar exame</Text>
                        <Text style={styles.espacoLinha}>3 - Consultar agendamento</Text>
                        <Text style={styles.espacoLinha}>4 - Reagendar consulta</Text>
                        <Text style={styles.espacoLinha}>5 - Reagendar exame</Text>
                        <Text style={styles.espacoLinha}>6 - Desmarcar consulta</Text>
                        <Text style={styles.espacoLinha}>7 - Desmarcar exame</Text>
                        <Text style={styles.horarioRobo}>08:52</Text>
                    </View>
                </View>

                <View style={styles.viewCaixaColaborador}>
                    <View style={styles.caixaMensagemColaborador}>
                        <Text>1</Text>
                        <Text style={styles.horarioColaborador}>08:53</Text>
                    </View>

                </View>

                <View style={styles.viewCaixaRobo}>
                    <View style={styles.caixaMensagemRobo}>
                        <Text style={styles.espacoLinha}>Qual especialista?</Text>
                        <Text style={styles.espacoLinha}>1 - Neurologista</Text>
                        <Text style={styles.espacoLinha}>2 - Ortopedista</Text>
                        <Text style={styles.espacoLinha}>3 - Psiquiatra</Text>
                        <Text style={styles.espacoLinha}>4 - Nutricionista</Text>
                        <Text style={styles.espacoLinha}>5 - Cliníco geral</Text>
                        <Text style={styles.espacoLinha}>6 - Cardiologista</Text>
                        <Text style={styles.espacoLinha}>7 - Ginecologista</Text>
                        <Text style={styles.horarioRobo}>08:52</Text>
                    </View>

                </View> */}

            </ScrollView>

            <View style={styles.viewPrincipal}>
                <View style={styles.searchContainer}>

                    <TouchableOpacity style={styles.btnIcones}>
                        <MaterialIcons name="emoji-emotions" size={24} color="gray" />
                    </TouchableOpacity>

                    <TextInput
                        placeholder="Digite sua mensagem"
                        style={styles.searchInput}
                        returnKeyType="search" />
                    {/* 
                    <TouchableOpacity style={styles.btnIcones}>
                        <MaterialIcons name="pie-chart-outlined" size={24} color="gray" />
                    </TouchableOpacity> */}

                </View>

                <TouchableOpacity
                    style={styles.icon}>
                    <MaterialIcons name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Chat;