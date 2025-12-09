import { Image, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "@/style/stylesLogin";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

const Login = () => {
    const navigation = useNavigation();
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
                        />
                        <Input
                            label=""
                            placeholder="Digite sua senha"
                        />
                    </View>

                    <Button title="ACESSAR" onPress={() => navigation.navigate("Home")} />

                    <Text style={styles.linkSenha}>Esqueceu a senha?</Text>
                </View>
            </View>
        </View>
    )
}

export default Login;