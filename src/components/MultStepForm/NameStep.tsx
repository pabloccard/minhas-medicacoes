import styles from './styles.module.css'

type StepProps = {
  changeStep(step: number): void
  currentStep: number
}

export const NameStep = ({ changeStep, currentStep }: StepProps) => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <label htmlFor="name" className={styles.label}>
          Insira o nome do medicamento
        </label>
        <input type="text" id="name" placeholder="Amoxilina" />
      </fieldset>

      <div className={styles.controls}>
        <button onClick={() => changeStep(currentStep + 1)}>Avançar</button>
      </div>
    </form>
  )
}
