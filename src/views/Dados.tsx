import { View } from "react-native";
import { Input } from "@/components/Input";
import { HomeHeader } from "@/components/HomeHeader";
import { Button } from "@/components/Button";
import { useState } from "react";

const Dados = () => {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [celular, setCelular] = useState('');
    const [nascimento, setNascimento] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <HomeHeader title="Dados pessoais" />

            <View style={{ paddingHorizontal: 15 }}>
                <Input
                    label=""
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />
                <Input
                    label=""
                    placeholder="Endereço"
                    value={endereco}
                    onChangeText={setEndereco}
                />
                <Input
                    label=""
                    placeholder="Número"
                    value={numero}
                    onChangeText={setNumero}
                />
                <Input
                    label=""
                    placeholder="Bairro"
                    value={bairro}
                    onChangeText={setBairro}
                />
                <Input
                    label=""
                    placeholder="Cidade"
                    value={cidade}
                    onChangeText={setCidade}
                />
                <Input
                    label=""
                    placeholder="Celular"
                    value={celular}
                    onChangeText={setCelular}
                />
                <Input
                    label=""
                    placeholder="Data de Nascimento"
                    value={nascimento}
                    onChangeText={setNascimento}
                />
            </View>
            <View style={{ position: "absolute", bottom: 30, paddingHorizontal: 20 }}>
                <Button title="SALVAR" />
            </View>
        </View>
    )
}

export default Dados;