import { View } from "react-native";
import { Input } from "@/components/Input";
import { HomeHeader } from "@/components/HomeHeader";
import { Button } from "@/components/Button";

const Dados = () => {
    const dados = {
        text: "Dados Pessoais"
    }
    return (
        <View >
            <HomeHeader data={dados} />
            <View style={{ paddingHorizontal: 15 }}>
                <Input
                    label=""
                    placeholder="Nome"
                />
                <Input
                    label=""
                    placeholder="Endereço"
                />
                <Input
                    label=""
                    placeholder="Número"
                />
                <Input
                    label=""
                    placeholder="Bairro"
                />
                <Input
                    label=""
                    placeholder="Cidade"
                />
                <Input
                    label=""
                    placeholder="Celular"
                />
                <Input
                    label=""
                    placeholder="Data de Nascimento"
                />
            </View>
            <View style={{ position: "absolute", bottom: "-80", paddingHorizontal: 20 }}>
                <Button title="SALVAR" />
            </View>
        </View>
    )
}

export default Dados;