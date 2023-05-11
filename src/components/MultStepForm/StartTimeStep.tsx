import styles from './styles.module.css'

type StepProps = {
  changeStep(step: number): void
  currentStep: number
}

export const StartTimeStep = ({ changeStep, currentStep }: StepProps) => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <label htmlFor="time" className={styles.label}>
          Selecione a data do início do tratamento
        </label>
        <input type="time" id="time" />
      </fieldset>

      <div className={styles.controls}>
        <button onClick={() => changeStep(currentStep - 1)}>Voltar</button>
        <button onClick={() => changeStep(currentStep + 1)}>Avançar</button>
      </div>
    </form>
  )
}
