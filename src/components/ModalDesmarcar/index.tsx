import { Modal, Text, View } from "react-native"
import { colors, fontFamily } from "@/theme"
import { styles } from "@/components/ModalAgendamentos/styles";
import { ButtonSmall } from "../ButtonSmall"

type Props = {
    visible: boolean
    onClose: () => void
}

export function ModalDesmarcar({
    visible,
    onClose,
}: Props) {

    return (
        <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
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
                            ATENÇÃO!
                        </Text>



                        <View style={{ paddingVertical: 5, marginBottom: 15 }}>
                            <Text style={{ fontFamily: fontFamily.regular, fontSize: 16 }}>Tem certeza que deseja desmarcar a consulta? Se confirmar, a ação não poderá ser desfeita.</Text>
                        </View>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            marginTop: 10,
                            gap: 10,
                            width: "100%"
                        }}>
                            <ButtonSmall
                                title="Não"
                                backgroundColor={colors.gray[200]}
                                onPress={onClose}
                            />
                            <ButtonSmall
                                title="Sim"
                            />

                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
