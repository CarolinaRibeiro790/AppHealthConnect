import { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";


import { colors } from "@/theme";
import { styles } from "@/style/stylesLogin";

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../assets/fundo.png")} />
                <View style={styles.viewLogo}>
                    <Image source={require("../assets/logo.png")} />
                    <Text style={styles.titulo}>HealthConnect</Text>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.subtitulo}>Acesse sua conta</Text>

                    <View style={styles.inputs}>

                        <Input
                            label=""
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChangeText={setEmail}

                        />
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

                    </View>

                    <Button title="ACESSAR" onPress={() => navigation.navigate("Home")} />

                    <Text style={styles.linkSenha}>Esqueceu a senha?</Text>
                </View>
            </View>
        </View>
    )
}

export default Login;