import * as RadioGroup from '@radix-ui/react-radio-group'
import styles from './styles.module.css'
import { DayStepper } from '../DayStepper'

export const Form = () => {
  return (
    <form>
      <fieldset className={styles.fieldset}>
        <label htmlFor="name" className={styles.label}>
          Insira o nome do medicamento
        </label>
        <input
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
          <input type="date" id="date" />
          <input type="time" id="time" />
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label htmlFor="date" className={styles.label}>
          Selecione a data do início do tratamento
        </label>
        <RadioGroup.Root className={styles.radioRoot}>
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
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label htmlFor="name" className={styles.label}>
          Selecione a duração do tratamento
        </label>
        <DayStepper />
      </fieldset>

      <button className={styles.button}>Agendar</button>
    </form>
  )
}
