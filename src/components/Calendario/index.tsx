import { CalendarList, LocaleConfig } from "react-native-calendars"
import { ptBR } from "@/utils/localeCalenderConfig"
import { colors } from "@/theme"

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br";

type CalendarioProps = {
    selectedDate: string
    markedDates: Record<string, any>
    onDayPress: (day: { dateString: string }) => void
}

export function Calendario({
    selectedDate,
    markedDates,
    onDayPress,
}: CalendarioProps) {
    return (
        <CalendarList
            horizontal
            pagingEnabled
            markedDates={markedDates}
            onDayPress={onDayPress}
            markingType="custom"
            hideExtraDays
            firstDay={1}
            theme={{
                backgroundColor: colors.white,
                calendarBackground: colors.white,
                todayTextColor: colors.blue[200],
                dayTextColor: colors.gray[400],
                monthTextColor: colors.gray[400],
                arrowColor: colors.blue[200],
                textMonthFontSize: 16,
                textSectionTitleColor: colors.gray[400],
            }}
        />
    )
}
