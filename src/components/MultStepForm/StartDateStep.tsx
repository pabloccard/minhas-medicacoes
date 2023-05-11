import styles from './styles.module.css'

type StepProps = {
  changeStep(step: number): void
  currentStep: number
}

export const StarDateStep = ({ changeStep, currentStep }: StepProps) => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <label htmlFor="date" className={styles.label}>
          Selecione a data do início do tratamento
        </label>
        <input type="date" id="date" />
      </fieldset>

      <div className={styles.controls}>
        <button onClick={() => changeStep(currentStep - 1)}>Voltar</button>
        <button onClick={() => changeStep(currentStep + 1)}>Avançar</button>
      </div>
    </form>
  )
}
