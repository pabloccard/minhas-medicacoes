import styles from './styles.module.css'
import dateFormatter from '../../../utils/formatter'
import { Dispatch, SetStateAction } from 'react'
import { isSameDay } from 'date-fns'

type ScheduledDayProps = {
  date: Date
  selectedDate: Date
  setSelectedDate: Dispatch<SetStateAction<Date>>
}

export const ScheduledDate = ({
  date,
  selectedDate,
  setSelectedDate,
}: ScheduledDayProps) => {
  const { formatToDay, formatToShortWeekDay } = dateFormatter()

  const isSameDate = isSameDay(date, selectedDate)

  return (
    <button
      className={`${styles.scheduledDay} ${
        isSameDate && styles.active
      } keen-slider__slide`}
      onClick={() => setSelectedDate(date)}
    >
      <strong>{formatToShortWeekDay(date)}</strong>
      <strong>{formatToDay(date)}</strong>
    </button>
  )
}
