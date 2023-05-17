import styles from './styles.module.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

type DayStepperProps = {
  onChange: (...event: any[]) => void
  value: number
}

export const DayStepper = ({ onChange, value }: DayStepperProps) => {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.action}
        onClick={() => onChange(value - 1)}
      >
        <AiOutlineLeft />
      </button>
      <span className={styles.value}>
        {value} {value > 1 ? 'dias' : 'dia'}
      </span>
      <button
        type="button"
        className={styles.action}
        onClick={() => onChange(value + 1)}
      >
        <AiOutlineRight />
      </button>
    </div>
  )
}
