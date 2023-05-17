import styles from './styles.module.css'

export const SelectedDate = () => {
  return (
    <div className={styles.selectedDate}>
      <strong>7</strong>
      <div>
        <span>Terça</span>
        <span>Abril | 2021</span>
      </div>
    </div>
  )
}
