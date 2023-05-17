import { BsCheckLg } from 'react-icons/bs'
import styles from './styles.module.css'
import * as Checkbox from '@radix-ui/react-checkbox'
import { ScheduleType } from '../../../types/schedule'
import dateFormatter from '@/utils/formatter'

export const EventItem = ({ id, date_time, ingested, name }: ScheduleType) => {
  const { formatToTime } = dateFormatter()

  return (
    <tr className={styles.scheduledTimeItem}>
      <td>
        <Checkbox.Root className={styles.checkbox}>
          <Checkbox.Indicator className={styles.indicator}>
            <BsCheckLg />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </td>
      <td>{name}</td>
      <td>{formatToTime(new Date(date_time))}</td>
      <td>aguardando</td>
    </tr>
  )
}
