import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function dateFormatter() {
  const formatToWeekDay = (date: Date): string => {
    return format(date, 'eee', { locale: ptBR })
  }

  const formatToShortWeekDay = (date: Date): string => {
    return format(date, 'EEEEEE', { locale: ptBR })
  }

  const formatToDay = (date: Date): string => {
    return format(date, 'd', { locale: ptBR })
  }

  const formatToMonth = (date: Date): string => {
    return format(date, 'MMMM', { locale: ptBR })
  }

  const formatToYear = (date: Date): string => {
    return format(date, 'yyyy', { locale: ptBR })
  }

  const formatToTime = (date: Date): string => {
    return format(date, 'HH:mm')
  }

  return {
    formatToWeekDay,
    formatToShortWeekDay,
    formatToDay,
    formatToMonth,
    formatToYear,
    formatToTime,
  }
}
