'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styles from './styles.module.css'
import { DayStepper } from '../DayStepper'
import { useForm, Controller } from 'react-hook-form'
import z from 'zod'
import { useScheduleContext } from '@/app/contexts/scheduleContext/scheduleContextProvider'
import { format } from 'date-fns'

const FormDataSchemaValidation = z.object({
  name: z.string().min(2),
  start_date: z.string(),
  start_time: z.string(),
  interval: z.string(),
  duration: z.number(),
})

type FormData = z.infer<typeof FormDataSchemaValidation>

export const Form = () => {
  const { createSchedule } = useScheduleContext()

  const { handleSubmit, control, register } = useForm<FormData>({
    resolver: zodResolver(FormDataSchemaValidation),
    defaultValues: {
      start_date: format(new Date(), 'yyyy-MM-dd'),
      start_time: format(new Date(), 'HH:mm'),
      interval: '8',
      duration: 2,
    },
  })

  function submit(data: FormData) {
    createSchedule({ ...data })
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <fieldset className={styles.fieldset}>
        <label htmlFor="name" className={styles.label}>
          Insira o nome do medicamento
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          placeholder="Amoxilina"
          autoFocus={false}
        />
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label htmlFor="date" className={styles.label}>
          Selecione a data e o horário de início
        </label>

        <div className={styles.initial}>
          <input {...register('start_date')} type="date" id="date" />
          <input {...register('start_time')} type="time" id="time" />
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label htmlFor="date" className={styles.label}>
          Selecione a data do início do tratamento
        </label>

        <Controller
          control={control}
          name="interval"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <RadioGroup.Root
              onValueChange={onChange}
              value={value}
              className={styles.radioRoot}
            >
              <RadioGroup.Item value="8" className={styles.radioItem}>
                8h
              </RadioGroup.Item>
              <RadioGroup.Item value="10" className={styles.radioItem}>
                10h
              </RadioGroup.Item>
              <RadioGroup.Item value="12" className={styles.radioItem}>
                12h
              </RadioGroup.Item>
            </RadioGroup.Root>
          )}
        />
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label htmlFor="name" className={styles.label}>
          Selecione a duração do tratamento
        </label>
        <Controller
          control={control}
          name="duration"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <DayStepper onChange={onChange} value={value} />
          )}
        />
      </fieldset>

      <button className={styles.button}>Agendar</button>
    </form>
  )
}
