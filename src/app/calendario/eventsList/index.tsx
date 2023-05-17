import { ReactNode } from 'react'
import styles from './styles.module.css'

type EventsListProps = {
  children: ReactNode
}

export const EventsList = ({ children }: EventsListProps) => {
  return (
    <div className={styles.scheduledTimeContainer}>
      <table className={styles.scheduledDayTable}>
        <thead>
          <tr>
            <th></th>
            <th>medicamento</th>
            <th>horário</th>
            <th>status</th>
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
