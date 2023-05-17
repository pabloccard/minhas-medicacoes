import styles from './styles.module.css'

export const ScheduledDay = () => {
  return (
    <button
      className={`${styles.scheduledDay} ${styles.active} keen-slider__slide`}
    >
      <strong>Ter</strong>
      <strong>12</strong>
    </button>
  )
}
