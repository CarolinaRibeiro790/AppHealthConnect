import { parse, format } from 'date-fns';

export const timeZone = 'America/Sao_Paulo';

export const formatDateInTimeZone = (date, timeZone) => {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: timeZone,
    };
    const formattedParts = new Intl.DateTimeFormat('en-GB', options).formatToParts(date);
    const year = formattedParts.find(part => part.type === 'year').value;
    const month = formattedParts.find(part => part.type === 'month').value;
    const day = formattedParts.find(part => part.type === 'day').value;

    return `${year}-${month}-${day}`;
};


export const getMonthName = (date) => {
    try {
        return date.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();
    } catch (error) {
        console.error('Erro ao obter nome do mês:', error);
        return '';
    }
};


export const convertToAPIDateFormat = (dateStr) => {
    try {
        if (!dateStr) return '';

        const parsedDate = parse(dateStr, 'dd/MM/yyyy', new Date());

        // Verifica se a data é válida
        if (isNaN(parsedDate.getTime())) {
            console.warn('Data inválida:', dateStr);
            return '';
        }

        return format(parsedDate, 'yyyy-MM-dd');
    } catch (error) {
        console.error('Erro ao converter data para formato API:', error);
        return '';
    }
};

export const formatDate = (dateString) => {
    try {
        if (!dateString) return '';

        const [year, month, day] = dateString.split('-');

        // Validação básica
        if (!year || !month || !day) {
            console.warn('Formato de data inválido:', dateString);
            return dateString;
        }

        return `${day}/${month}/${year}`;
    } catch (error) {
        console.error('Erro ao formatar data:', error);
        return dateString;
    }
};

export const getCurrentDate = () => {
    return formatDateInTimeZone(new Date(), timeZone);
};


export const isToday = (dateString) => {
    try {
        const today = getCurrentDate();
        return dateString === today;
    } catch (error) {
        console.error('Erro ao verificar se é hoje:', error);
        return false;
    }
};

export function isDateInPast(date?: string) {
    if (!date) return false

    let selected: Date

    // Formato DD/MM/YYYY
    if (date.includes("/")) {
        const [day, month, year] = date.split("/")
        selected = new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
        )
    }
    // Formato YYYY-MM-DD
    else {
        selected = new Date(`${date}T00:00:00`)
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    selected.setHours(0, 0, 0, 0)

    console.log("selected Date", selected)

    return selected < today
}
