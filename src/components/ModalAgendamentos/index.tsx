import { useState } from "react"
import { Modal, Text, View, TouchableOpacity } from "react-native"
import { SelectBox } from "@/components/SelectBox"
import { ServiceDTO } from "@/dto/ServiceDTO"
import { HourDTO } from "@/dto/HourDTO"
import { colors, fontFamily } from "@/theme"
import { styles } from "@/components/ModalAgendamentos/styles";
import { ButtonSmall } from "../ButtonSmall"

type Props = {
    visible: boolean
    onClose: () => void
    services: ServiceDTO[]
    hours: HourDTO[]
}

export function ModalAgendamentos({
    visible,
    onClose,
    services,
    hours,
}: Props) {
    const [service, setService] = useState<ServiceDTO | null>(null)
    const [hour, setHour] = useState<HourDTO | null>(null)

    return (
        <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
            <View style={styles.modalContainer}> <View style={styles.modalContent}>
                <View style={{
                    backgroundColor: colors.white[100],
                    borderRadius: 20,
                    padding: 20,
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: fontFamily.bold,
                        marginBottom: 20,
                        color: colors.blue[200]
                    }}>
                        Novo Agendamento
                    </Text>

                    <SelectBox
                        label="Serviço"
                        value={service?.name}
                        data={services}
                        onSelect={setService}
                        renderLabel={(item) => item.name}
                    />

                    <SelectBox
                        label="Horário"
                        value={hour?.label}
                        data={hours}
                        onSelect={setHour}
                        renderLabel={(item) => item.label}
                    />

                    {service && hour && (
                        <View style={{
                            backgroundColor: colors.gray[100],
                            borderRadius: 12,
                            padding: 12,
                            marginVertical: 16,
                            gap: 5
                        }}>
                            <Text style={{ fontFamily: fontFamily.bold, fontSize: 16}}>Resumo do agendamento:</Text>
                            <Text style={{fontSize: 16}}>• {service.name}</Text>
                            <Text style={{fontSize: 16}}>• Duração: {service.duration} min</Text>
                            <Text style={{fontSize: 16}}>• Horário: {hour.label}</Text>
                        </View>
                    )}

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginTop: 10,
                        gap: 10,
                        width: "100%"
                    }}>
                        <ButtonSmall
                            title="Cancelar"
                            backgroundColor={colors.gray[200]}
                            onPress={onClose}
                        />
                        <ButtonSmall
                            title="Confirmar"
                        />

                    </View>
                </View>
            </View>
            </View>
        </Modal>
    )
}
