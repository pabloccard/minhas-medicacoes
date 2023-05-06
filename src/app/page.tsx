import Image from 'next/image'
import styles from './page.module.css'
import img from '../../public/pimple-patches-pana.svg'

export default function Home() {
  return (
    <div className={styles.home}>
      <main className={styles.hero}>
        <div className={styles.content}>
          <h1>
            Simplifique o <span>gerenciamento</span> de suas medicações
          </h1>

          <Image src={img} alt="" width={280} />

          <p>
            Agende suas medicações com facilidade e nunca mais perca uma dose,
            seja o herói da sua saúde!
          </p>

          <button>AGENDAR AGORA</button>
        </div>
      </main>
    </div>
  )
}
