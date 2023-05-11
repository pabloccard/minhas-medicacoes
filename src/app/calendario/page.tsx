import styles from './styles.module.css'

export default function Calendario() {
  return (
    <div className={styles.container}>
      <div className={styles.selectedDate}>
        <strong>7</strong>
        <div>
          <span>Terça</span>
          <span>Abril | 2021</span>
        </div>
      </div>

      <div className={styles.scheduledDayList}>
        <button className={`${styles.scheduledDay} ${styles.active}`}>
          <strong>Ter</strong>
          <strong>12</strong>
        </button>
        <button className={styles.scheduledDay}>
          <strong>qua</strong>
          <strong>13</strong>
        </button>
        <button className={styles.scheduledDay}>
          <strong>Qui</strong>
          <strong>14</strong>
        </button>
      </div>

      <div className={styles.scheduledTimeContainer}>
        <table className={styles.scheduledDayTable}>
          <thead>
            <tr>
              <th></th>
              <th>medicamento</th>
              <th>horário</th>
              <th>status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Amoxilina</td>
              <td>22:45</td>
              <td>aguardando</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Amoxilina</td>
              <td>22:45</td>
              <td>aguardando</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
