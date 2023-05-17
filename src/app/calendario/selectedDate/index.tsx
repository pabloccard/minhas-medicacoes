import dateFormatter from '@/utils/formatter'
import styles from './styles.module.css'

type SelectedDateProps = {
  selectedDate: Date
}
export const SelectedDate = ({ selectedDate }: SelectedDateProps) => {
  const { formatToDay, formatToMonth, formatToWeekDay, formatToYear } =
    dateFormatter()

  return (
    <div className={styles.selectedDate}>
      <strong>{formatToDay(selectedDate)}</strong>
      <div>
        <span>{formatToWeekDay(selectedDate)}</span>
        <span>
          {formatToMonth(selectedDate)} | {formatToYear(selectedDate)}
        </span>
      </div>
    </div>
  )
}
