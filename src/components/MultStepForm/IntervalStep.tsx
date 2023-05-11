import * as RadioGroup from '@radix-ui/react-radio-group'
import styles from './styles.module.css'

type StepProps = {
  changeStep(step: number): void
  currentStep: number
}

export const IntervalStep = ({ changeStep, currentStep }: StepProps) => {
  return (
    <form className={styles.form}>
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

      <div className={styles.controls}>
        <button onClick={() => changeStep(currentStep - 1)}>Voltar</button>
        <button onClick={() => changeStep(currentStep + 1)}>Avançar</button>
      </div>
    </form>
  )
}
