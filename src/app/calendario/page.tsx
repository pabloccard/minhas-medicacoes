'use client'

import styles from './page.module.css'

import { isSameDay } from 'date-fns'
import { useScheduleContext } from '../contexts/scheduleContext/scheduleContextProvider'

import { ScheduledDate } from './scheduledDate'
import { ScheduledDateList } from './scheduledDateList'
import { EventItem } from './eventItem'
import { EventsList } from './eventsList'
import { SelectedDate } from './selectedDate'
import { useState } from 'react'

export default function Calendario() {
  const { schedules } = useScheduleContext()
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(schedules[0].date_time) || new Date(),
  )

  const scheduledDates: Date[] = schedules.reduce(
    (dates: Date[], { date_time }) => {
      const exists = dates.some((e) => isSameDay(e, new Date(date_time)))

      if (!exists) {
        dates.push(new Date(date_time))
      }

      return dates
    },
    [],
  )

  const filteredEvents = schedules.filter(({ date_time }) =>
    isSameDay(new Date(date_time), selectedDate),
  )

  return (
    <div className={styles.container}>
      <SelectedDate selectedDate={selectedDate} />

      <ScheduledDateList>
        {scheduledDates.map((date) => (
          <ScheduledDate
            key={date.toDateString()}
            date={date}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </ScheduledDateList>

      <EventsList>
        {filteredEvents.map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
      </EventsList>
    </div>
  )
}
