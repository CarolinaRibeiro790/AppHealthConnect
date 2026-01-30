import { useState } from "react"
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/theme"

type SelectBoxProps<T> = {
    label: string
    value?: string
    data: T[]
    onSelect: (item: T) => void
    renderLabel: (item: T) => string
}

export function SelectBox<T>({
    label,
    value,
    data,
    onSelect,
    renderLabel,
}: SelectBoxProps<T>) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <View style={{ marginBottom: 20}}>
                <Text style={{ marginBottom: 6, color: colors.gray[400] , fontSize:16}}>
                    {label}
                </Text>

                <TouchableOpacity
                    onPress={() => setOpen(true)}
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: colors.gray[800],
                        borderRadius: 14,
                        padding: 12,
                        backgroundColor: colors.white,
                    }}
                >
                    <Text style={{ color: colors.gray[400], fontSize: 16 }}>
                        {value || `Selecione ${label.toLowerCase()}`}
                    </Text>

                    <MaterialIcons
                        name="keyboard-arrow-down"
                        size={24}
                        color={colors.gray[800]}
                    />
                </TouchableOpacity>
            </View>

            <Modal transparent animationType="fade" visible={open}>

                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(0,0,0,0.4)",
                        justifyContent: "center",
                        padding: 20,
                    }}
                    activeOpacity={1}
                    onPress={() => setOpen(false)}
                >
                    <View
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: 16,
                            paddingVertical: 10,
                        }}
                    >
                        <FlatList
                            data={data}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        onSelect(item)
                                        setOpen(false)
                                    }}
                                    style={{
                                        padding: 16,
                                        borderBottomWidth: 1,
                                        borderColor: "#eee",
                                    }}
                                >
                                    <Text style={{fontSize: 16}}>{renderLabel(item)}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    )
}
