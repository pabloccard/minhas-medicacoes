import Link from 'next/link'
import styles from './styles.module.css'
import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineMedicineBox,
} from 'react-icons/ai'

export const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <strong className={styles.logo}>Minhas Medicações</strong>
        <nav>
          <Link href="/" className={`${styles.link} ${styles.active}`}>
            <span>
              <AiOutlineHome />
            </span>
            <strong>Home</strong>
          </Link>
          <Link href="/calendar" className={styles.link}>
            <span>
              <AiOutlineCalendar />
            </span>
            <strong>Calendário</strong>
          </Link>
          <Link href="/calendar" className={styles.link}>
            <span>
              <AiOutlineMedicineBox />
            </span>
            <strong>Medicamentos</strong>
          </Link>
        </nav>
      </header>
    </div>
  )
}
