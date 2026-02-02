import { useState, useCallback } from "react"
import { View, Text, ScrollView } from "react-native"
import { isDateInPast } from "@/utils/dateUtils"
import { colors, fontFamily } from "@/theme"
import { formatDateInTimeZone, convertToAPIDateFormat } from "@/utils/dateUtils"
import { ConsultaDTO } from "@/dto/ConsultaDTO"
import { ServiceDTO } from "@/dto/ServiceDTO"
import { HourDTO } from "@/dto/HourDTO"
import { Calendario } from "@/components/Calendario"
import { CardConsultas } from "@/components/CardConsultas"
import { HomeHeader } from "@/components/HomeHeader"
import { Button } from "@/components/Button"
import { ModalAgendamentos } from "@/components/ModalAgendamentos"
import { Loading } from "@/components/Loading"

const Agenda = () => {
    const [modalAgenda, setModalAgenda] = useState(false);
    const [serviceSelected, setServiceSelected] = useState("");
    const isPastDate = isDateInPast(selectedDate);
    const [isLoading, setIsLoading] = useState(false);

    // Data selecionada no calendário
    const [selectedDate, setSelectedDate] = useState(
        formatDateInTimeZone(new Date())
    )

    const consultas: ConsultaDTO[] = [
        {
            id: "1",
            service: "Iridologia",
            date: "30/01/2026",
            hour: "13:30 - 14:30",
            doctor: "Dra. Tais Prates",
        },
        {
            id: "2",
            service: "Acupuntura",
            date: "04/02/2026",
            hour: "09:00 - 10:00",
            doctor: "Dr. Tais Prates",
        },
    ]

    const services: ServiceDTO[] = [
        { id: 1, name: "Iridologia", duration: 60 },
        { id: 2, name: "Massagem terapêutica", duration: 60 },
        { id: 3, name: "Drenagem", duration: 60 },
        { id: 4, name: "Acupuntura", duration: 30 },
        { id: 5, name: "Auriculoterapia", duration: 30 },
        { id: 6, name: "Desbloqueio emocional", duration: 60 }
    ]

    const hours: HourDTO[] = [
        { id: "1", label: "09:00h - 09:30h" },
        { id: "2", label: "10:00h - 11:00h" },
        { id: "1", label: "09:00h - 09:30h" },
        { id: "2", label: "10:00h - 11:00h" },
        { id: "1", label: "09:00h - 09:30h" },
        { id: "2", label: "10:00h - 11:00h" },

    ]

    //CONSULTAS DO DIA SELECIONADO
    const consultasDoDia = consultas.filter(
        (consulta) =>
            convertToAPIDateFormat(consulta.date) === selectedDate
    )

    //MARCAÇÃO DO CALENDÁRIO
    const prepareMarkedDates = useCallback(() => {
        const dates: any = {}

        consultas.forEach((consulta) => {
            const date = convertToAPIDateFormat(consulta.date)

            dates[date] = {
                marked: true,
                dotColor: colors.blue[200],
            }
        })

        // Dia selecionado
        dates[selectedDate] = {
            ...dates[selectedDate],
            selected: true,
            selectedColor: colors.blue[200],
            selectedTextColor: colors.white,
        }

        return dates
    }, [consultas, selectedDate]);

    if (isLoading) {
        return <Loading />
    }

    return (
        <View style={{ flex: 1 }}>
            <HomeHeader title="Agenda" />

            <ModalAgendamentos
                visible={modalAgenda}
                onClose={() => setModalAgenda(false)}
                services={services}
                selectedService={serviceSelected}
                onChangeService={setServiceSelected}
                hours={hours}
            />

            <Calendario
                selectedDate={selectedDate}
                markedDates={prepareMarkedDates()}
                onDayPress={(day) => setSelectedDate(day.dateString)}
            />

            <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
                <Text style={{ fontSize: 16, fontFamily: fontFamily.medium }}>Agendamento(s) do dia:</Text>
            </View>

            <ScrollView style={{ flex: 1, marginBottom: 80 }}>

                {consultasDoDia.length === 0 ? (
                    <Text style={{ paddingHorizontal: 15, fontSize: 16 }}>
                        Nenhum agendamento para este dia.
                    </Text>
                ) : (
                    consultasDoDia.map((consulta) => (

                        <CardConsultas key={consulta.id} data={consulta} />

                    ))
                )}
            </ScrollView>


            <View style={{ position: "absolute", bottom: 20, paddingHorizontal: 20 }}>
                <Button title="AGENDAR" onPress={() => setModalAgenda(true)} disabled={isPastDate} />
            </View>
        </View>
    )
}

export default Agenda
