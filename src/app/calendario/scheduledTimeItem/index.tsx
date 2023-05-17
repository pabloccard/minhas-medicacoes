import { BsCheckLg } from 'react-icons/bs'
import styles from './styles.module.css'
import * as Checkbox from '@radix-ui/react-checkbox'

export const ScheduledTimeItem = () => {
  return (
    <tr className={styles.scheduledTimeItem}>
      <td>
        <Checkbox.Root className={styles.checkbox}>
          <Checkbox.Indicator className={styles.indicator}>
            <BsCheckLg />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </td>
      <td>Amoxilina</td>
      <td>22:45</td>
      <td>aguardando</td>
    </tr>
  )
}
