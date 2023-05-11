import styles from './styles.module.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
export const DayStepper = () => {
  return (
    <div className={styles.container}>
      <button className={styles.action}>
        <AiOutlineLeft />
      </button>
      <span className={styles.value}>7 dias</span>
      <button className={styles.action}>
        <AiOutlineRight />
      </button>
    </div>
  )
}
