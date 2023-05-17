'use client'

import styles from './page.module.css'
import { ScheduledDay } from './scheduledDay'
import { ScheduledDayList } from './scheduledDayList'
import { ScheduledTimeItem } from './scheduledTimeItem'
import { ScheduledTimeTable } from './scheduledTimeTable'
import { SelectedDate } from './selectedDate'

export default function Calendario() {
  return (
    <div className={styles.container}>
      <SelectedDate />

      <ScheduledDayList>
        <ScheduledDay />
        <ScheduledDay />
        <ScheduledDay />
      </ScheduledDayList>

      <ScheduledTimeTable>
        <ScheduledTimeItem />
        <ScheduledTimeItem />
        <ScheduledTimeItem />
      </ScheduledTimeTable>
    </div>
  )
}
