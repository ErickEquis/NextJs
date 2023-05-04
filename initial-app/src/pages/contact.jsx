import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@erick/styles/Home.module.css'
import { MainLayouts } from '../../components/layouts/MainLayouts'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <MainLayouts>
      <h1>Contact</h1>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>
            Ir a Home
          </p>
        </Link>
      </div>
    </MainLayouts>
  )
}