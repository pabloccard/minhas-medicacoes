import { createContext } from 'react'
import { CreateScheduleParams } from '../../../types/createScheduleParams'
import { ScheduleType } from '../../../types/schedule'

type SchedulesContextType = {
  schedules: Array<ScheduleType>
  createSchedule: (data: CreateScheduleParams) => void
  findSchedules: (date: Date) => Array<ScheduleType>
  markAsIngested: (id: string) => void
}

export const SchedulesContext = createContext<SchedulesContextType>(null!)
