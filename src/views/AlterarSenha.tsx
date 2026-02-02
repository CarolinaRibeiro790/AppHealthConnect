import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/theme";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { HomeHeader } from "@/components/HomeHeader";

const AlterarSenha = () => {
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [passwordConfirmVisibility, setPasswordConfirmVisibility] = useState(true);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    const togglePasswordConfirmVisibility = () => {
        setPasswordConfirmVisibility(!passwordConfirmVisibility);
    };

    return (
        <View style={{ flex: 1 }}>
            <HomeHeader title="Alterar Senha" />

            <View style={{ paddingHorizontal: 20, gap: 20, paddingVertical: 20 }}>
                <View style={{ position: 'relative' }}>
                    <Input
                        label=""
                        placeholder="Digite sua senha"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={passwordVisibility}
                        returnKeyType="done"
                    />

                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        style={{
                            position: 'absolute',
                            right: 12,
                            top: '50%',
                        }}
                    >
                        <MaterialIcons
                            name={passwordVisibility ? 'visibility-off' : 'visibility'}
                            size={24}
                            color={colors.gray[200]}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ position: 'relative' }}>
                    <Input
                        label=""
                        placeholder="Digite sua senha"
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        secureTextEntry={passwordConfirmVisibility}
                        returnKeyType="done"
                    />

                    <TouchableOpacity
                        onPress={togglePasswordConfirmVisibility}
                        style={{
                            position: 'absolute',
                            right: 12,
                            top: '50%',
                        }}
                    >
                        <MaterialIcons
                            name={passwordConfirmVisibility ? 'visibility-off' : 'visibility'}
                            size={24}
                            color={colors.gray[200]}
                        />
                    </TouchableOpacity>
                </View>


            </View>
            <View style={{ position: "absolute", bottom: 30, paddingHorizontal: 20 }}>
                <Button title="SALVAR" />
            </View>
        </View>
    )
}

export default AlterarSenha;