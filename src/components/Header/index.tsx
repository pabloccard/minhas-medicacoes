'use client'

import Link from 'next/link'
import styles from './styles.module.css'
import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineMedicineBox,
} from 'react-icons/ai'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <strong className={styles.logo}>Minhas Medicações</strong>
        <nav>
          <Link
            href="/"
            className={`${styles.link} ${pathname === '/' && styles.active}`}
          >
            <span>
              <AiOutlineHome />
            </span>
            <strong>Home</strong>
          </Link>
          <Link
            href="/calendario"
            className={`${styles.link} ${
              pathname === '/calendario' && styles.active
            }`}
          >
            <span>
              <AiOutlineCalendar />
            </span>
            <strong>Calendário</strong>
          </Link>
          <Link
            href="/medicamentos"
            className={`${styles.link} ${
              pathname === '/medicamentos' && styles.active
            }`}
          >
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
