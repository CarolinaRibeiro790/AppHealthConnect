import { useState } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "@/components/CardConsultas/styles";
import { ButtonSmall } from "../ButtonSmall";
import { ConsultaDTO } from "@/dto/ConsultaDTO";
import { ModalDesmarcar } from "../ModalDesmarcar";
import { isDateInPast } from "@/utils/dateUtils";
import { colors } from "@/theme";

type CardConsultasProps = {
    data: ConsultaDTO
}

export function CardConsultas({ data }: CardConsultasProps) {
    const [modalDesmarcar, setModalDesmarcar] = useState(false);
    const isPastDate = isDateInPast(data.date)
    console.log('isPastDate', isPastDate)

    return (
        <View style={styles.viewConsulta}>
            <ModalDesmarcar
                visible={modalDesmarcar}
                onClose={() => setModalDesmarcar(false)}
            />

            <View style={styles.cabecalho}>
                <View style={styles.servicoItem}>
                    <Text style={styles.txt} numberOfLines={1}> {data.service}</Text>
                </View>
                <View style={styles.viewCalendary}>
                    <Text style={styles.txtComum}>{data.date}</Text>
                </View>

            </View>

            <View style={styles.viewBodyConsultas}>
                <View style={{ gap: 5 }}>
                    <View>
                        <Text style={styles.txtNome}>{data.doctor}</Text>
                    </View>

                    <View style={styles.viewCalendary}>
                        <MaterialIcons name="alarm" style={styles.iconComum} />
                        <Text style={styles.txtComum}>{data.hour}</Text>
                    </View>
                </View>


                <ButtonSmall
                    title="Desmarcar"
                    onPress={() => {
                        if (!isPastDate) {
                            setModalDesmarcar(true)
                        }
                    }}
                    disabled={isPastDate}
                    backgroundColor={isPastDate ? colors.gray[100] : colors.blue[200]}
                />

            </View>
        </View>
    )
}