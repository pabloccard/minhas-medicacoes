'use client'

import { addDays, eachMinuteOfInterval, isSameDay } from 'date-fns'
import { ReactNode, useContext } from 'react'
import { SchedulesContext } from '.'
import { v4 as uuidV4 } from 'uuid'
import { usePersistedState } from '../../../hooks/usePersistedState'
import { CreateScheduleParams } from '../../../types/createScheduleParams'
import { ScheduleType } from '../../../types/schedule'

export const SchedulesContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [schedules, setSchedules] = usePersistedState<ScheduleType[]>(
    '@my-medications: schedules',
    [],
  )

  function createSchedule(data: CreateScheduleParams) {
    const { name, start_date, start_time, duration, interval } = data

    const scheduleAlreadyExists = schedules.some(
      (schedule) =>
        schedule.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    )

    if (scheduleAlreadyExists) {
      throw new Error('Este medicamento já está sendo usado')
    }

    const startDateTime = new Date(`${start_date} ${start_time}`)
    const endDateTime = addDays(startDateTime, duration)
    const intervalInMinutes = parseInt(interval) * 60

    const newSchedules = eachMinuteOfInterval(
      { start: startDateTime, end: endDateTime },
      { step: intervalInMinutes },
    ).map((schedule) => {
      return {
        id: uuidV4(),
        name,
        ingested: false,
        date_time: schedule.toString(),
      }
    })
    setSchedules((prev) => [...prev, ...newSchedules])
  }

  function findSchedules(date: Date) {
    return schedules.filter(({ date_time }) => {
      return isSameDay(new Date(date_time), date)
    })
  }

  function markAsIngested(id: string) {
    setSchedules((prev) => {
      return prev.map((schedule) => {
        if (schedule.id === id) {
          return {
            ...schedule,
            ingested: !schedule.ingested,
          }
        }
        return schedule
      })
    })
  }

  return (
    <SchedulesContext.Provider
      value={{ schedules, createSchedule, findSchedules, markAsIngested }}
    >
      {children}
    </SchedulesContext.Provider>
  )
}

export const useScheduleContext = () => {
  const context = useContext(SchedulesContext)
  return context
}
