import { DayStepper } from '../DayStepper'
import styles from './styles.module.css'

type StepProps = {
  changeStep(step: number): void
  currentStep: number
}

export const DurationStep = ({ changeStep, currentStep }: StepProps) => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <label htmlFor="name" className={styles.label}>
          Selecione a duração do tratamento
        </label>
        <DayStepper />
      </fieldset>

      <div className={styles.controls}>
        <button onClick={() => changeStep(currentStep - 1)}>Voltar</button>
        <button onClick={() => changeStep(currentStep + 1)}>Avançar</button>
      </div>
    </form>
  )
}
