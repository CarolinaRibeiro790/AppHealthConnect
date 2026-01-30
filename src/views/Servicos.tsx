import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "@/style/stylesServicos";
import { HomeHeader } from "@/components/HomeHeader";

export default function Servicos() {
    const route = useRoute<any>()
    const { id } = route.params;

    const dados = {
        text: "Saiba mais"
    }

    const descricao = [
        { id: 1, name: "Iridologia", descricao: "A iridologia é uma técnica de avaliação da saúde por meio da observação da íris (parte colorida dos olhos).", objetivo: "Identificar desequilíbrios no organismo e tendências do corpo.", beneficio: "Ajuda a prevenir problemas, auxilia no autoconhecimento e contribui para um tratamento mais personalizado." },
        { id: 2, name: "Massagem Terapêutica", descricao: "A massagem terapêutica utiliza movimentos específicos para aliviar tensões musculares e dores no corpo.", objetivo: "Promover relaxamento e bem-estar físico.", beneficio: "Reduz dores, melhora a circulação, diminui o estresse e proporciona sensação de alívio e conforto." },
        { id: 3, name: "Acupuntura", descricao: "A acupuntura é uma técnica da medicina tradicional chinesa que utiliza agulhas finas em pontos específicos do corpo.", objetivo: "Equilibrar a energia do organismo.", beneficio: "Ajuda no alívio de dores, ansiedade, estresse, insônia e melhora a saúde de forma natural." },
        { id: 4, name: "Auriculoterapia", descricao: "A auriculoterapia é uma técnica que estimula pontos específicos da orelha, relacionados a diferentes partes do corpo.", objetivo: "Tratar desequilíbrios físicos e emocionais.", beneficio: "Auxilia no controle da ansiedade, dores, compulsões, estresse e promove equilíbrio geral." },
        { id: 5, name: "Drenagem", descricao: "A drenagem é uma massagem suave que estimula o sistema linfático.", objetivo: "Ajudar o corpo a eliminar toxinas e líquidos retidos.", beneficio: "Reduz inchaços, melhora a circulação, auxilia na recuperação pós-operatória e promove sensação de leveza." },
        { id: 6, name: "Desbloqueio Emocional", descricao: "O desbloqueio emocional é uma técnica terapêutica que ajuda a identificar e liberar emoções reprimidas.", objetivo: "Promover equilíbrio emocional e bem-estar mental.", beneficio: "Reduz ansiedade, estresse, medos e contribui para mais leveza emocional e qualidade de vida." },
    ]
    const servicoSelecionado = descricao.find(
        item => item.id === id
    )
    if (!servicoSelecionado) {
        return (
            <View>
                <Text>Serviço não encontrado</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HomeHeader data={dados}/>
            <View style={styles.conteudo}>
                <View>
                    <Text style={styles.titulo}>{servicoSelecionado.name}</Text>
                    <Text style={styles.txt}>{servicoSelecionado.descricao}</Text>
                </View>
                <View>
                    <Text style={styles.subtitulo}>Objetivo</Text>
                    <Text style={styles.txt}>{servicoSelecionado.objetivo}</Text>
                </View>
                <View>
                    <Text style={styles.subtitulo}>Benefícios</Text>
                    <Text style={styles.txt}>{servicoSelecionado.beneficio}</Text>
                </View>
            </View>
        </View>
    )
}